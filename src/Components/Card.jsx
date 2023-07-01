import React from "react";
import './Card.css'
import { useContextGlobal } from "./utils/Context";
import axios from 'axios'


const Card = ({ name, username, id }) => {

  const { DHOdontologoState, DHOdontologoDispatch} = useContextGlobal()

  const OdontologoUrl = 'https://jsonplaceholder.typicode.com/users/' + id

  const addFav = () => {
    axios(OdontologoUrl)
              .then(respuesta => DHOdontologoDispatch({type: 'Agregar_Favoritos', payload: respuesta.data}))
}


  return (
    <div className="card" >

        <img src="/images/doctor.jpg" alt="" />

        <p><span>{name}</span></p>
        <p>{username} {id}</p>


        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">⭐</button>
    </div>
  );
};

export default Card;
