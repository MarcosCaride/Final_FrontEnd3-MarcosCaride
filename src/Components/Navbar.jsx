import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

import { routes } from '../utils/routes'
import { useContextGlobal } from './utils/Context'
import { useEffect } from 'react'





const linkStyle = {
  margin: "1rem",
  height: "fit-content",
  textDecoration: "none",
  color: 'black',
  alignSelf: "center"
};



const Navbar = () => {

  const { DHOdontologoState, DHOdontologoDispatch } = useContextGlobal()

  function ModoOscuro() {
    DHOdontologoDispatch({type:'Modo_Oscuro'})
    console.log(DHOdontologoState);
  }

  useEffect(() => {

    if (DHOdontologoState.modoOscuro) {
      document.querySelector("body").classList.add("dark")
      document.querySelector("button").classList.add("dark")
    } else {
      document.querySelector("body").classList.remove("dark")
      document.querySelector("button").classList.remove("dark")
    }

  }, [DHOdontologoState.modoOscuro])


  return (
    <nav>
      <h1>DH Odontologo</h1>

      <div className='Links'>
        <Link to={routes.home} style={linkStyle}>Home</Link>
        <Link to={routes.contact} style={linkStyle}>Contacto</Link>
        <Link to={routes.favorites} style={linkStyle}>Favoritos</Link>

        <button type='enabled' onClick={ModoOscuro}> 🌙 </button>
      </div>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
    </nav>
  )
}

export default Navbar