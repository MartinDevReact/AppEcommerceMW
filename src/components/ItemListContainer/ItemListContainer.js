import React, { useEffect, useState } from 'react';
import CardList from '../CardList/CardList';
import Spinner from "../Spinner/Spinner";
import { collection, query, getDocs , where} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { useParams } from "react-router-dom";


const ItemListContainer = ({ greeting }) => {
  const [listaArticulos, setListaArticulos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let { category } = useParams();

  useEffect(() => {
    const getArticulos = async () => {
    
    let q = {};
    
    if (category !== undefined) {
        q = query(collection(db, "Articulos"), where("category", "==", category));
    } else {
        q = query(collection(db, "Articulos"));
    }
    const docs = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
      });

    setListaArticulos(docs);
  };
  getArticulos();
  setTimeout(() => {
    setIsLoading(false);
  }, 1000);
}, [category]);

  return (
  
    <>
      {isLoading ? (
        <div className="Spinner">
          <Spinner />
        </div>
      ) : (
          <div>
            <h2>{greeting}</h2>
            <CardList listaArticulos={listaArticulos}/>
          </div>
           )}
    </>

  )
};

export default ItemListContainer;

