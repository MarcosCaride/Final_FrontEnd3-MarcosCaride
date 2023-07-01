import React from 'react'
import { useParams } from 'react-router-dom'
import { useContextGlobal } from './utils/Context'
import { useEffect } from 'react'
import axios from 'axios'

import './Odontologo.css'

const Odontologo = () => {

    const { id } = useParams()
    const { DHOdontologoState, DHOdontologoDispatch } = useContextGlobal()
    const OdontologoUrl = 'https://jsonplaceholder.typicode.com/users/' + id

    useEffect(() => {
        axios(OdontologoUrl)
            .then(respuesta => DHOdontologoDispatch({type: "ObtenerUnOdontologo", payload: respuesta.data}))
    }, [])

    console.log(DHOdontologoState.odontologo);


    

  return (
    <div className='Odontologo'>

        <div className='Caja'>
            <img id='OdontologoEncontrado' src="/images/doctor.jpg" alt="" />
            <div className='Info'>
                <h2>{DHOdontologoState.odontologo?.name}</h2>  
                <p>{DHOdontologoState.odontologo?.email}</p>
                <p>{DHOdontologoState.odontologo?.phone}</p>
                <p>{DHOdontologoState.odontologo?.website}</p>
            </div>
        </div>




    </div>
  )
}

export default Odontologo