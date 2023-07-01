import { useContext } from "react";
import { useEffect } from "react";
import { useReducer } from "react";
import { createContext } from "react";

import axios from "axios"

export const InitialDHOdontologoState = {
  modoOscuro: false, 
  listaOdontologos: [],
  odontologo: {},
  listaFavoritos: []
}

export const ContextGlobal = createContext(InitialDHOdontologoState);

const DHOdontologoReducer = (state, action) => {
  switch (action.type) {
    case 'ObtenerListaOdontologos':
        return { ...state, listaOdontologos: action.payload }
    
    case 'ObtenerUnOdontologo':
        return { ...state, odontologo: action.payload }

    case 'Modo_Oscuro':
      return { ...state, modoOscuro: !state.modoOscuro }

    case 'Agregar_Favoritos':
      return { ...state, listaFavoritos: [ ...state.listaFavoritos, action.payload ] }

      default:
        throw new Error('Te confunidte wacho. Arreglalo')
  }

}


export const ContextProvider = ({ children }) => {
  
  const [DHOdontologoState, DHOdontologoDispatch] = useReducer(DHOdontologoReducer, InitialDHOdontologoState)
  
  const APIUrl = 'https://jsonplaceholder.typicode.com/users'
  
  useEffect(() => {
    axios(APIUrl)
    .then(result => DHOdontologoDispatch({type:'ObtenerListaOdontologos', payload: result.data}) )
    
  }, [])
  
  useEffect(()=>{
    localStorage.setItem('listaFavoritos', JSON.stringify(DHOdontologoState.listaFavoritos))
  }, [DHOdontologoState.listaFavoritos])

  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  return (
    <ContextGlobal.Provider value={{ DHOdontologoState, DHOdontologoDispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useContextGlobal = () => useContext(ContextGlobal)
