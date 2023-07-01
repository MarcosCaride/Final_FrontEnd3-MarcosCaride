import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/Context";
import { Link } from 'react-router-dom'
import { routes } from "../utils/routes";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const { DHOdontologoState } = useContextGlobal()

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {DHOdontologoState.listaFavoritos?.map(odontologo => 
                <Link to={routes.dentistById + odontologo.id} key={odontologo.id}>
                    <Card className="Tarjeta" name={odontologo.name} username={odontologo.username} id={odontologo.id} />
                </Link>
        ) }
      </div>
    </>
  );
};

export default Favs;
