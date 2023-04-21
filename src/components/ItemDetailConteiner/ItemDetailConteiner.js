import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import Spinner from "../Spinner/Spinner";
import {  collection,  query,  getDocs,  where,  documentId,} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
 
  const [detalleArticulo, setDetalleArticulo] = useState([]);
  
  const [isLoading, setIsLoading] = useState(true);
  
  let { id } = useParams();

  useEffect(() => {
    const getArticulos = async () => {
      const q = query(collection(db, "Articulos"), where(documentId(), "==", id));
      const docs = [];
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setDetalleArticulo(docs);
    };
    getArticulos();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [id]);
 
     return (
      <>
        {isLoading ? (
          <div className="Spinner">
            <Spinner />
          </div>
        ) : (
          <div >
            {detalleArticulo.map((data) => {
              return (             
                  <ItemDetail detalleArticulo={data} key={data.id}/>
              );
            })}
          </div>
        )}
      </>
    );  
};
export default ItemDetailContainer;