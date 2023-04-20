import React, { useEffect, useState } from "react";
import { Input } from '../../UI/Input/Input';


export const Modal = ( {titulo} ) => {

    const URL = 'http://localhost:8080/api/usuarios'

 
    const [modal, setModal] = useState(false);
    const [valorInputDoc, setValorInputDoc] = useState("");
    const [valorInputNom, setValorInputNom] = useState("");
    const [valorInputApell, setValorInputApell] = useState("");
    const [valorInputTelef, setValorInputTelef] = useState("");
    const [valorInputCorreo, setValorInputCorreo] = useState("");


    const informacionInput1 = (evento) => {
        setValorInputDoc(evento.target.value)
      }
    
    const informacionInput2 = (evento) => {
       setValorInputNom(evento.target.value)
    }
    
     const informacionInput3 = (evento) => {
       setValorInputApell(evento.target.value)
    }
    
    const informacionInput4 = (evento) => {
       setValorInputTelef(evento.target.value)
    }
    
    const informacionInput5 = (evento) => {
       setValorInputCorreo(evento.target.value)
    }

    const abrirModal = () => {
        setModal(true);
    };

    const cerrarModal = () => {
        setModal(false);
    };

    const limpiar = () => {
      setValorInputDoc("");
      setValorInputNom("");
      setValorInputApell("");
      setValorInputTelef("");
      setValorInputCorreo("");
      cerrarModal();
    }

    const guardarUsuario = () => {
        let documento = valorInputDoc;
        let nombre = valorInputNom;
        let apellido = valorInputApell;
        let telefono = valorInputTelef;
        let correo = valorInputCorreo;
  
        if (documento === 0 || nombre === "" || apellido === "" || telefono === "" || correo === "") {
          alert("LLene todos los campos")
        }
        else{
          fetch(URL, {
            method : "POST",
            headers : {"Content-type":"application/json"},
            body:JSON.stringify({
              documento: documento,
              nombre: nombre,
              apellido: apellido,
              telefono: telefono,
              correo: correo
            })
          })
          .then( (respuesta) => {
            if (respuesta.status === 201) {
                alert("Registrado con exito");
                cerrarModal();
                limpiar();
            }
            else{
                if (respuesta.status === 400) {
                    alert("Por Favor Verifique que el documento no este repetido \n Verifique que el Correo tenga un formato valido y el telefono ")
                }
            }
          })
        }
      };

    return(
        <>
        <button className="btn btn-success" onClick={abrirModal}>Registrar Usuarios</button>
        {modal && (
            <div className="modal-overlay">
                <div className="modal2">
                    <div className="modal-header">
                        <h2>{titulo}</h2>
                        <button className="cerrarModal" onClick={cerrarModal}>X</button>
                    </div>
                    <div className="modal-body">
                        <div className='formulario'>
                            <Input id={"documento"} tipo={"number"} valor={valorInputDoc} estilo={"input"} placeholder={"Documento"} evento={informacionInput1}/>
                            <Input id={"nombre"} tipo={"text"} valor={valorInputNom} estilo={"input"} placeholder={"Nombre"} evento={informacionInput2}/>
                            <Input id={"apellido"} tipo={"text"} valor={valorInputApell} estilo={"input"} placeholder={"Apellido"} evento={informacionInput3}/>
                            <Input id={"telefono"} tipo={"text"} valor={valorInputTelef} estilo={"input"} placeholder={"Telefono"} evento={informacionInput4}/>
                            <Input id={"correo"} tipo={"text"} valor={valorInputCorreo} estilo={"input"} placeholder={"Correo"} evento={informacionInput5}/>
                            
                            <div className="contBtn">
                                <button id='btnGuardar' className='btn btn-success' onClick={guardarUsuario}>Guardar</button>
                                <button id='btnCancelar' className='btn btn-danger' onClick={limpiar}>Cancelar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
        </>
    );
}