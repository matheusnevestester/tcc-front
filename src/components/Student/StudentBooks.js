import React, {useRef, useState, useEffect} from "react";
import {Link, useHistory} from 'react-router-dom';

import '../Register/RegisterForm.css'
import './StudentBoard.css'

const axios = require('axios');

export default function StudentBooks() {
    const [student, setStudent] = useState([]);
    const [book, setBook] = useState([]);
    const [lending, setLending] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:8081/api/v1/book/3'
        ).then(({data}) => {
            console.log(data)
            setBook(data);
        })
    }, [])
    console.log(book)

    useEffect(() => {
        axios.get('http://localhost:8081/api/v1/lending/1'
        ).then(({data}) => {

            let date = new Date(data.lendingDate);
            let year = date.getFullYear();
            let month = date.getMonth()+1;
            let day = date.getDate();
            let hour = date.getHours();
            let minutes = date.getMinutes();
            data.lendingDate = ""+day+"/"+month+"/"+year+" ás "+hour+":"+minutes+""

            console.log(data)
            setLending(data);

        })
    }, [])
    console.log(lending)



    return (
        <div className="backPage">
            <h1>Livros alugados e pedidos de aluguel</h1>
            <div className="alignCenter">
                <table className="informationStudent boxShadow">
                    <h2>Alugados</h2>
                    <tr>
                        <th><h3>Nome do livro</h3></th>
                        <th><h3>Número registro</h3></th>
                        <th><h3>Data de retirada</h3></th>
                        <th><h3>Data de devolução</h3></th>
                    </tr>
                    <tr>
                        <td>{book.title}</td>
                        <td>{book.registerNumber}</td>
                        <td>{lending.lendingDate}</td>
                        <td>{student.birthday}</td>
                    </tr>
                    </table>
                    <table className="informationStudent boxShadow">
                    <h2>Reservas</h2>
                    <tr>
                        <th><h3>Nome do livro</h3></th>
                        <th><h3>Número registro</h3></th>
                        <th><h3>Data de retirada</h3></th>
                        <th><h3>Data de devolução</h3></th>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>

                    </tr>
                </table>

            </div>
        </div>
    );
}

