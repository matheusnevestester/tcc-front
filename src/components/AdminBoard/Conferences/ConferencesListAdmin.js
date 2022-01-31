import React, {useRef, useState, useEffect} from "react";
import {Link, useHistory} from 'react-router-dom';

import '../../Register/RegisterForm.css'
import './../Book/List.css'
import ModalTest from "../../Modal/Modal";


const axios = require('axios');

export default function ConferencesListAdmin() {
    const history = useHistory();
    const [deleteModal,setDeleteModal] = useState(false)
    const [conferences, setConferences] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:8083/api/v1/conferences').then(({data}) => {
            console.log(data)
            setConferences(data);
        })
        // eslint-disable-next-line
    }, [])


    const handleClickEdit = ({target}) => {
        const conferenceIdEdit= target.name
        const conferenceId = conferenceIdEdit.replace('edit-','');
        history.push("/admin-categories-edit", { conference: conferenceId })
    }


    const handleClickDelete = ({target}) => {
        const conferenceIdIdDelete = target.name
        const conferenceIdId = conferenceIdIdDelete.replace('delete-','');
        setDeleteModal(true)
    }

    return (
        <>
            {deleteModal && < ModalTest setIsOpen={setDeleteModal}/>}
            <div className="backPage">
                <h1>Palestras</h1>
                <div className="alignCenter">
                    <table className="maxWidth boxShadow">
                        <tr>
                            <th><h3 className="listPadding">Nome</h3></th>
                            <th className="fullSizeList"><h3>Data de início</h3></th>
                            <th className="fullSizeList"><h3>Duração prevista</h3></th>
                            <th className="listPaddingLeft"><h3>Editar</h3></th>
                            <th className="listPaddingLeft"><h3>Excluir</h3></th>
                        </tr>
                        {conferences?.map((conference) => (
                            <tr className="boxShadow">
                                <td className="listPadding">{conference.subject}</td>
                                <td className="fullSizeList">{conference.startDate}</td>
                                <td className="fullSizeList" >{conference.duration}</td>
                                <td><img className="editDeleteImg" src={"/images/editIcon.jpg"} alt="conferenceId-edit" name={"edit-" + conference.id} onClick={handleClickEdit}/></td>
                                <td><img className="editDeleteImg" src={"/images/deleteIcon.png"} alt="conferenceId-delete" name={"delete-" + conference.id}onClick={handleClickDelete}/></td>
                            </tr>
                        ))}
                    </table>
                </div>
            </div>
        </>

    );
}

