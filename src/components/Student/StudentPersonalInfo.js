import React, {useRef, useState, useEffect} from "react";
import {Link, useHistory} from 'react-router-dom';

import '../Register/RegisterForm.css'
import './StudentPersonalInfo.css'

const axios = require('axios');

export default function StudentPersonalInfo(bookID) {
    const [student, setStudent] = useState([]);
    const [book, setBook] = useState([]);
    const [lending, setLending] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:8081/api/v1/students/'+161021778+''
        ).then(({data}) => {
            console.log(data)
            setStudent(data);
        })
    }, [])
    console.log(student)


    return (

        <div className='outsideContainer'>
            <button>Editar informações</button>
            <h1 >
                Informações do aluno
            </h1>
            <div className="studentInfoContainer center">
                <div className="studentInfoInside center">
                    <table className="fullsize">
                        <tr>
                            <td><img src={"/images/editIcon.jpg"}></img></td>
                            <td><table className="contentTable center">
                                <tr>
                                    <td><b>RA:</b></td>
                                    <td><a>{student.id}</a></td>
                                </tr>
                                <tr>
                                    <td><b>Nome:</b></td>
                                    <td><a>{student.name}</a></td>
                                </tr>
                                <tr>
                                    <td><b>Email:</b></td>
                                    <td><a>{student.email}</a></td>
                                </tr>
                                <tr>
                                    <td><b>Telefone:</b></td>
                                    <td><a>{student.phone}</a></td>
                                </tr>
                                <tr>
                                    <td><b>Data de aniverário:</b></td>
                                    <td><a>{student.birthday}</a></td>
                                </tr>
                            </table>
                            </td>
                        </tr>
                    </table>

                </div>
        </div>
    </div>


    );
}

