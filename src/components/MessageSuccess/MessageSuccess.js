
import React, { useContext, useEffect } from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";
import { CartContext } from  '../Contexts/CartContext';


const MessageSuccess = ({ purchaseID }) => {

	const { removeAllFromCart } = useContext(CartContext);

	useEffect(() => {
		removeAllFromCart();
	}, [removeAllFromCart]);


	const styles = {
		link: {
		  color: "Blue",
		  textDecoration: "underline",
		}
	};

	return (
		<>
			<Stack sx={{ width: '100%' }} spacing={2}>
				<Alert severity='success'>
					Gracias por su compra! su id de transacción es: {purchaseID}					 
				</Alert>
			</Stack>
			<Link to="/" style={styles.link} >
				<p> Volver.</p>
			</Link>	
		</>
	);
};

export default MessageSuccess;