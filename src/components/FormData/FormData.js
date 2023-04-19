
import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

import "./FormData.css";

// Form y Validaciones
import { Formik } from "formik";
import * as yup from 'yup';

// Firebase
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

//Mensaje de confirmación
import MessageSuccess from "../MessageSuccess/MessageSuccess";


yup.addMethod(yup.string, 'equals', function(ref, message) {
  return this.test({
    name: 'equals',
    exclusive: false,
    message: message,
    params: {reference: ref.path},
    test: function(value) {return value === this.resolve(ref);}
  });
});

const yupSchema = yup.object({
  name: yup.string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(50, 'El nombre no debe tener más de 50 caracteres')
    .required('Ingrese un nombre'),

  lastName: yup.string()
    .min(2, 'El Apellido debe tener al menos 2 caracteres')
    .max(50, 'El Apellido no debe tener más de 50 caracteres')
    .required('Ingrese un Apellido'),
  
  email: yup.string()
    .email('Ingrese un correo electrónico válido')
    .required('Ingrese un correo electrónico'),

  emailConfirm: yup.string()
    .email('Ingrese un correo electrónico válido')
    .equals(yup.ref('email'), 'Los correos electrónicos deben ser iguales')
    .required('Ingrese un correo electrónico'),

  phone: yup.string()
    .matches(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/, 'Ingrese un número de teléfono válido')
    .min(8, 'El número de telefono debe tener al menos 8 dígitos')
    .max(11, 'El número de telefono no puede tener mas de 11 dígitos')
    .required('Ingrese un número de teléfono'),
});

const initialValues = {
  name: "",
  lastName: "", 
  email: "",
  emailConfirm: "",
  phone: "",
};

const FormData = () => {   
  const [purchaseID, setPurchaseID] = useState("");
  const onSubmit = async (values,resetForm) => {
  const docRef = await addDoc(collection(db, "Compras"), {
    values,
  });
  setPurchaseID(docRef.id);
  resetForm();
};

    return (
        <div className="Generic">
          <h1>Cargue sus datos para finalizar la compra</h1>
          <Formik
            initialValues={initialValues}
            onSubmit={(values, { resetForm }) => onSubmit(values, resetForm)}
            validationSchema={yupSchema}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleSubmit,
              isValid,
              dirty,
            }) => (
              <form className="Form" onSubmit={handleSubmit}>
                <TextField
                  name="name"
                  className="TextField"
                  sx={{ mb: 2 }}
                  fullWidth
                  placeholder="Nombre"
                  value={values.name}
                  onChange={handleChange}
                />
                {errors.name && (<span style={{ color: "red" }}>{errors.name}</span>)}
                <TextField
                  name="lastName"
                  className="TextField"
                  sx={{ mb: 2 }}
                  fullWidth
                  placeholder="Apellido"
                  value={values.lastName}
                  onChange={handleChange}
                />
                {errors.lastName && (<span style={{ color: "red" }}>{errors.lastName}</span>)}
                <TextField
                  name="email"
                  className="TextField"
                  sx={{ mb: 2 }}
                  fullWidth
                  placeholder="Email"
                  value={values.email}
                  onChange={handleChange}
                />
                {errors.email && (<span style={{ color: "red" }}>{errors.email}</span>)}
                <TextField
                  name="emailConfirm"
                  className="TextField"
                  sx={{ mb: 2 }}
                  fullWidth
                  placeholder="Email"
                  value={values.emailConfirm}
                  onChange={handleChange}
                />
                {errors.emailConfirm && (<span style={{ color: "red" }}>{errors.emailConfirm}</span>)}
                <TextField
                  name="phone"
                  className="TextField"
                  sx={{ mb: 2 }}
                  fullWidth
                  placeholder="Teléfono de contacto"
                  value={values.phone}
                  onChange={handleChange}
                />
                {errors.phone && (<span style={{ color: "red" }}>{errors.phone}</span>)}

                <Button
                  variant="contained"
                  fullWidth
                  sx={{ height: "54px" }}
                  type="submit"
                  disabled={!(isValid && dirty)}
                >
                  Finalizar compra
                </Button>
                {purchaseID.length ? <MessageSuccess purchaseID={purchaseID} /> : null}
              </form>
            )}            
          </Formik>        
        </div>
      );
    };
    
export default FormData;

