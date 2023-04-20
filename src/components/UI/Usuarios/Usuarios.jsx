import React, { useState } from "react";
import Actualizar from "../../../Images/lapiz.png";
import Eliminar from "../../../Images/eliminar.png";
import { ModalActualizar } from "../ModalActualizar/ModalActualizar";

export const Usuarios = ( {usuario = []} ) => {

    const eliminarUsuario = (documento) => {
        console.log(documento);
        let URL = 'http://localhost:8080/api/usuarios/'+documento

        fetch(URL, {
            method: "DELETE",
        })
        .then( (respuesta) => {
            if (respuesta.status === 200) {
                alert("Usuario Eliminado con Exito")
            }
            else if (respuesta.status === 404) {
                alert("El Usuario con el documento " + documento + " No existe")
            }
            else{
                alert("Error")
            }
        })
    }
    

    return(
        <>
        <div className="contsUsuarios">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Documento</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Telefono</th>
                        <th scope="col">Correo</th>
                        <th scope="col">Actualizar</th>
                        <th scope="col">Eliminar</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        usuario.map( (item) => (
                         <tr>
                            <th scope="row">{item.documento}</th>
                            <th scope="row">{item.nombre}</th>
                            <th scope="row">{item.apellido}</th>
                            <th scope="row">{item.telefono}</th>
                            <th scope="row">{item.correo}</th>
                            <th><ModalActualizar documento={item.documento}/></th>
                            <th><button id={item.documento} className="btnEliminar" onClick={ () => eliminarUsuario(item.documento)}><img className="imgEliminar" src={Eliminar} alt="eliminar" /></button></th>
                         </tr>   
                        ))
                    }
                </tbody>
            </table>
        </div>
        </>
    )
}