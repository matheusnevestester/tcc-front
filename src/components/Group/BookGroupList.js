import React, {useRef, useState, useEffect} from "react";
import '../Register/RegisterForm.css'
import BookGroupItem from "./BookGroupItem";

const axios = require('axios');

export default function BookGroupList() {

    const [bookGroups, setGroups] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8083/api/v1/groups'
        ).then(({data}) => {
            console.log(data)
            setGroups(data);
        })
        // eslint-disable-next-line
    }, [])
    console.log(bookGroups)

    let groupsArray = separateCards(bookGroups)
    function separateCards(cardsArray) {
        let size = 3;
        let arrayOfArrays = [];
        let totalItemsMissing = cardsArray.length
        for (let i = 0; i < cardsArray.length; i += size) {
            arrayOfArrays.push(cardsArray.slice(i, i + size));
            totalItemsMissing = totalItemsMissing - size

        }
        return arrayOfArrays
    }

    return (
        <div className='cards'>
            <h1>Nossos livros disponíveis!</h1>
            <div className='cards__wrapper'>
                <h1>Grupos</h1>
                <ul >
                    {groupsArray.map((bookGroups) => (
                        <ul className='cards__items'>
                            {bookGroups?.map((group) => (
                                <BookGroupItem
                                    src='images/book-tcc.jpg'
                                    text={group.name}
                                    path='/books-list'
                                    groupId={group.id}
                                />
                            ))}
                        </ul>
                    ))}
                </ul>
            </div>
        </div>
    );
}

