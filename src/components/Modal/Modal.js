import React from "react";
import styles from "./Modal.css";
import { RiCloseLine } from "react-icons/ri";

const ModalTest = ({ setIsOpen, deleteConfirm}) => {
    return (
        <>
            <div className="darkBG" onClick={() => setIsOpen(false)} />
            <div className="centered">
                <div className="modal">
                    <div className="modalHeader">
                        <h5 className="heading">Confirmação de exclusão</h5>
                    </div>
                    <button className="closeBtn" onClick={() => setIsOpen(false)}>
                        <RiCloseLine style={{ marginBottom: "-3px" }} />
                    </button>
                    <div className="modalContent">
                        Ao excluir este item ele não poderá mais ser acessado. Por favor confirme ação.
                    </div>
                    <div className="modalActions">
                        <div className="actionsContainer">
                            <button className="deleteBtn" onClick={() => deleteConfirm(true)}>
                                Confirmar
                            </button>
                            <button
                                className="cancelBtn"
                                onClick={() => setIsOpen(false)}
                            >
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ModalTest;