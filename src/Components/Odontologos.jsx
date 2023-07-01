import React from 'react'
import { useContextGlobal } from './utils/Context'
import Card from './Card'

import { Link } from 'react-router-dom'
import { routes } from '../utils/routes'

const ListStyles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
}


const Odontologos = () => {

  const { DHOdontologoState } = useContextGlobal()

  return (
    <div style={ListStyles} >
        { DHOdontologoState.listaOdontologos.map(odontologo => 
                <Link to={routes.dentistById + odontologo.id} key={odontologo.id}>
                    <Card className="Tarjeta" name={odontologo.name} username={odontologo.username} id={odontologo.id} />
                </Link>
        ) }
    </div>
  )
}

export default Odontologos