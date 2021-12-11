import React, {useRef, useState, useEffect} from "react";
import './Register/RegisterForm.css'
import CardItem from "./CardItem";
import BookItem from "./BookItem";
import CategoryItem from "./CategoryItem";
import BookGroupItem from "./BookGroupItem";

const axios = require('axios');

export default function BookGroupList() {

    const [bookGroups, setGroups] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8083/api/v1/groups/'
        ).then(({data}) => {
            console.log(data)
            setGroups(data.data);
        })
        // eslint-disable-next-line
    }, [])
    console.log(bookGroups)

    return (
        <div className='cards'>
            <h1>Nossos livros disponíveis!</h1>
            <div className='cards__wrapper'>
                <h1>Grupos</h1>
                <ul>
                    <ul className='cards__items'>
                        {bookGroups?.map((group) => (
                            <CategoryItem
                                src='images/book-tcc.jpg'
                                text={group.name}
                                path='/books-list'
                            />
                        ))}
                    </ul>
                </ul>
            </div>
        </div>
    );
}

