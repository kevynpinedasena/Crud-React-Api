import React, { useEffect, useState } from 'react'
import { Usuarios } from '../../UI/Usuarios/Usuarios'
import "bootstrap/dist/css/bootstrap.min.css";
import { Input } from '../../UI/Input/Input';
import { Modal } from '../../UI/Modal/Modal';

export const Principal = () => {

  const URL = 'http://localhost:8080/api/usuarios'
  
  const [user, setUser] = useState([]);
  

  const ListaUsuarios = () => {
    fetch(URL)
    .then(respuesta => respuesta.json())
    .then(data => setUser(data))
    .catch(error => console.log(error))
  }

  useEffect( () => {
    ListaUsuarios();
  },[])

  return (
    <> 
      <Modal titulo={"Registro Usuarios"}/>

      <div className="gestionUsuario">
          <div className="contTabla">
            <Usuarios usuario={user} />
          </div>
      </div>
    </>
      
  )
}
