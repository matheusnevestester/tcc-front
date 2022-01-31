import React, {useRef, useState, useEffect} from "react";
import {Link, useHistory} from 'react-router-dom';

import '../../Register/RegisterForm.css'
import './../Book/List.css'
import ModalTest from "../../Modal/Modal";


const axios = require('axios');

export default function GroupListAdmin() {
    const history = useHistory();
    const [deleteModal,setDeleteModal] = useState(false)
    const [groups, setGroups] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:8083/api/v1/groups').then(({data}) => {
            console.log(data)
            setGroups(data);
        })
        // eslint-disable-next-line
    }, [])


    const handleClickEdit = ({target}) => {
        const groupIdEdit= target.name
        const groupId = groupIdEdit.replace('edit-','');
        history.push("/admin-categories-edit", { group: groupId })
    }


    const handleClickDelete = ({target}) => {
        const groupIdDelete = target.name
        const groupId = groupIdDelete.replace('delete-','');
        setDeleteModal(true)
    }

    return (
        <>
            {deleteModal && < ModalTest setIsOpen={setDeleteModal}/>}
        <div className="backPage">
            <h1>Grupos</h1>
            <div className="alignCenter">
                <table className="maxWidth boxShadow">
                    <tr>
                        <th><h3 className="listPadding">Nome</h3></th>
                        <th className="fullSizeList"><h3>Descrição</h3></th>
                        <th className="fullSizeList"><h3>Estado atual</h3></th>
                        <th className="listPaddingLeft"><h3>Editar</h3></th>
                        <th className="listPaddingLeft"><h3>Excluir</h3></th>
                    </tr>
                    {groups?.map((group) => (
                        <tr className="boxShadow">
                            <td className="listPadding">{group.name}</td>
                            <td className="fullSizeList">{group.description}</td>
                            <td className="fullSizeList">{group.status}</td>
                            <td><img className="editDeleteImg" src={"/images/editIcon.jpg"} alt="group-edit" name={"edit-" + group.id} onClick={handleClickEdit}/></td>
                            <td><img className="editDeleteImg" src={"/images/deleteIcon.png"} alt="group-delete" name={"delete-" + group.id}onClick={handleClickDelete}/></td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
        </>

    );
}

