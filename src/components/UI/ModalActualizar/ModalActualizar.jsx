import React, { useState } from "react";
import Actualizar from "../../../Images/lapiz.png";
import { Input } from "../Input/Input";


export const ModalActualizar = ( {documento, nombre, apellido, telefono, correo} ) => {

    const [modal, setModal] = useState(false);
    const [valorDoc, setValorDoc] = useState("");
    const [valorNom, setValorNom] = useState("");
    const [valorApe, setValorApe] = useState("");
    const [valorTel, setValorTel] = useState("");
    const [valorCorreo, setValorCorreo] = useState("");

    const abrirModal = () => {
        setModal(true);
    };

    const cerrarModal = () => {
        setModal(false);
    };

    const infoInputDoc = (evento) => {
        setValorDoc(evento.target.value)
    }

    const infoInputNom = (evento) => {
        setValorNom(evento.target.value)
    }

    const infoInputApe = (evento) => {
        setValorApe(evento.target.value)
    }

    const infoInputTel = (evento) => {
        setValorTel(evento.target.value)
    }

    const infoInputCorreo = (evento) => {
        setValorCorreo(evento.target.value)
    }

    const limpiar = () => {
        setValorDoc("");
        setValorNom("");
        setValorApe("");
        setValorTel("");
        setValorCorreo("");
        cerrarModal();
      }

    const actualizar = () => {
        console.log(valorDoc, valorNom, valorApe, valorTel, valorCorreo);
    }

    return(
        <>
        <button className="btnActualizar" onClick={abrirModal}><img className="imgActualizar" src={Actualizar} alt="actualizar" /></button>
        {modal && (
            <div className="modal-overlay">
                <div className="modal2">
                    <div className="modal-header">
                        <h2>{"Actualizar Usuario " + nombre}</h2>
                        <button className="cerrarModal" onClick={cerrarModal}>X</button>
                    </div>
                    <div className="modal-body">
                        <div className='formulario'>
                            <Input id={"documento"} tipo={"number"} valor={valorDoc} estilo={"input"} evento={infoInputDoc} habilitado={"true"}/>
                            <Input id={"nombre"} tipo={"text"} valor={valorNom} estilo={"input"} evento={infoInputNom}/>
                            <Input id={"apellido"} tipo={"text"} valor={valorApe} estilo={"input"} evento={infoInputApe}/>
                            <Input id={"telefono"} tipo={"text"} valor={valorTel} estilo={"input"} evento={infoInputTel}/>
                            <Input id={"correo"} tipo={"text"} valor={valorCorreo} estilo={"input"} evento={infoInputCorreo}/>

                            <div className="contBtn">
                                <button id='btnGuardar' className='btn btn-success' onClick={actualizar}>Actualizar</button>
                                <button id='btnCancelar' className='btn btn-danger' onClick={limpiar}>Cancelar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
        </>
    );
};