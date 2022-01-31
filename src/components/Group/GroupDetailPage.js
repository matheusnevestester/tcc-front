import React, {useRef, useState, useEffect} from "react";
import {Link, useHistory} from 'react-router-dom';

import '../Register/RegisterForm.css'
import '../DetailPage.css'
import CategoryItem from "../CategoryItem";
const axios = require('axios');

export default function GroupDetailPage(groupId) {
    const history = useHistory();

    console.log(history)
    const [group, setGroup] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8083/api/v1/groups/'+history.location.state.bookGroup+''
        ).then(({data}) => {
            console.log(data)
            setGroup(data);
        })
    }, [])
    console.log(setGroup)

    return (
        <div className="detailPage">
            <div>
                <button className="rentButton">Participar agora!</button>
            </div>
            <div>
                <h1>{group.name}</h1>
            </div>
            <div className="detailPageImg">
                <img src='images/book-tcc.jpg' alt="book">
                </img>
            </div>
            <div className="detailPageDescription">
                <h2>Descrição:</h2>
                <a> {group.description}
                    <br></br>
                </a>
            </div>
        </div>
    );
}

