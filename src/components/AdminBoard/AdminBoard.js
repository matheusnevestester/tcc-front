import React, {useRef, useState, useEffect} from "react";
import '../Register/RegisterForm.css'
import Cards from "../Cards";
import CardItem from "../CardItem";

const axios = require('axios');

export default function AdminBoard() {

    return (
        <div className='cards'>
            <h1>Áreas para gerenciamento</h1>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                        src='/images/bookImage.jpeg'
                        text="Conteúdo"
                        path="/admin-books"
                        label="Livros e categorias"
                    />
                    <CardItem
                        src='/images/bookImage.jpeg'
                        text="Usuários"
                        path="/admin-users"
                        label="Alunos, professores e grupos"

                    />
                    <CardItem
                        src='/images/bookImage.jpeg'
                        text="Empréstimos e reservas"
                        path="/admin-lendings"
                        label="Administração de empréstimos"
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                        src='/images/bookImage.jpeg'
                        text="Palestras"
                        path="/admin-conferences"
                        label="Palestras e meetings"
                    />
                </ul>
            </div>
        </div>
    );
}

