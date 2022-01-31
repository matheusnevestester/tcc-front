
import React, {useRef, useState, useEffect} from "react";
import {Link, useHistory} from 'react-router-dom';

import '../../Register/RegisterForm.css'
import '../Book/List.css'


const axios = require('axios');

export default function AdminLendings() {
    const history = useHistory();

    const [lendings, setLendings] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:8081/api/v1/lending').then(({data}) => {
            console.log(data)
            setLendings(data);
        })
        // eslint-disable-next-line
    }, [])

    const handleClickEdit = ({target}) => {
        const studentIdEdit= target.name
        const studentId = studentIdEdit.replace('edit-','');
        //history.push("/admin-students-edit", { student: studentId })
    }


    return (
        <div className="backPage">
            <h1>Todos os empréstimos ativos</h1>
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
                    {lendings?.map((lending) => (
                        <tr className="boxShadow">
                            <td className="listPadding">{lending.bookId}</td>
                            <td className="fullSizeList">{lending.studentId}</td>
                            <td className="fullSizeList"></td>
                            <td className="fullSizeList"></td>
                            <td className="fullSizeList"></td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    );
}

