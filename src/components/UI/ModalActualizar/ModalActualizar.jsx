import React, { useState } from "react";
import Actualizar from "../../../Images/lapiz.png";


export const ModalActualizar = ( {documento} ) => {

    const [modal, setModal] = useState(false);
    const abrirModal = () => {
        setModal(true);
    };

    const cerrarModal = () => {
        setModal(false);
    };

    return(
        <>
        <button className="btnActualizar" onClick={abrirModal}><img className="imgActualizar" src={Actualizar} alt="actualizar" /></button>
        {modal && (
            <div className="modal-overlay">
                <div className="modal2">
                    <div className="modal-header">
                        <h2>{"Actualizar Usuario " + documento}</h2>
                        <button className="cerrarModal" onClick={cerrarModal}>X</button>
                    </div>
                    <div className="modal-body">
                        <div className='formulario'>
                            
                        </div>
                    </div>
                </div>
            </div>
        )}
        </>
    );
};