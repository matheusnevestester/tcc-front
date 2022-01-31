import React, {useRef, useState, useEffect} from "react";
import {Link, useHistory} from 'react-router-dom';

import '../../Register/RegisterForm.css'
import '../Book/List.css'


const axios = require('axios');

export default function UserListAdmin() {
    const history = useHistory();

    const [students, setStudents] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:8081/api/v1/students').then(({data}) => {
            console.log(data)
            setStudents(data);
        })
        // eslint-disable-next-line
    }, [])

    const handleClickEdit = ({target}) => {
        const studentIdEdit= target.name
        const studentId = studentIdEdit.replace('edit-','');
        history.push("/admin-students-edit", { student: studentId })
    }


    return (
        <div className="backPage">
            <h1>Todos estudantes</h1>
            <div className="alignCenter">
                <table className="informationStudent boxShadow">
                    <tr>
                        <th><h3 className="listPadding">Nome</h3></th>
                        <th className="fullSizeList"><h3>Email</h3></th>
                        <th className="fullSizeList"><h3>Telefone</h3></th>
                        <th className="fullSizeList"><h3>Série</h3></th>
                        <th className="fullSizeList"><h3>Data de nascimento</h3></th>
                        <th><h3>Editar</h3></th>
                    </tr>
                    {students?.map((student) => (
                        <tr className="boxShadow">
                            <td className="listPadding">{student.name}</td>
                            <td className="fullSizeList">{student.email}</td>
                            <td className="fullSizeList">{student.phone}</td>
                            <td className="fullSizeList">{student.grade}</td>
                            <td className="fullSizeList">{student.birthday}</td>
                            <td><img onClick={handleClickEdit} className="editDeleteImg" src={"/images/editIcon.jpg"} alt="book"  name={"edit-" + student.id}/></td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    );
}

