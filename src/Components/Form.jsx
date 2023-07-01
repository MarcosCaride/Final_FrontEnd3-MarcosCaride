import React from "react";
import './Form.css'
import { useState } from "react";


const Form = () => {

  let nombre = document.getElementById("Nombre")
  let email = document.getElementById("Email")
  let mensaje = document.getElementById("Message")
  let Error = document.getElementById("Error")
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if(nombre.value.length > 5 && mensaje.value.length > 0){
      Error.innerHTML = `Gracias ${nombre.value}, te contactaremos cuando antes vía mail`
    } else{
      Error.innerHTML= `Hay algun dato mal`
      console.log(nombre.value + "   -----   " + mensaje.value);
    }
    
  }
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>¡Hola, escribenos un mensaje!</h2>

          <label htmlFor="Nombre">Nombre:</label>
          <input type="text" id="Nombre" placeholder='Ingresa tu Nombre aqui' />

        <br />

          <label htmlFor="Email">Email:</label>
        <input type="email" name="Email" id="Email" placeholder="Ingresa tu Email" />

        <br />

          <label htmlFor="Message">Mensaje:</label>
        <input type="text" name="Message" id="Message" placeholder="Aquí escribe tu lindo mensaje!" />
        <br />
        <button> Enviar</button>

        <h4 id="Error"></h4>
      </form>
    </div>
  );
};

export default Form;
