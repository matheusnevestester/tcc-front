import React, {useRef, useState, useEffect} from "react";
import {Link, useHistory} from 'react-router-dom';

import '../Register/RegisterForm.css'
import '../DetailPage.css'
import CategoryItem from "../CategoryItem";
const axios = require('axios');

export default function ConferenceDetailPage(confereceId) {
    const history = useHistory();

    console.log(history)
    const [conference, setConference] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8083/api/v1/conferences/'+history.location.state.conference+''
        ).then(({data}) => {
            console.log(data)
            setConference(data);
            console.log(conference.startDate)
            let date = new Date(conference.startDate);
            let year = date.getFullYear();
            let month = date.getMonth()+1;
            let day = date.getDate();
            let hour = date.getHours();
            let minutes = date.getMinutes();
            conference.startDate = ""+day+"/"+month+"/"+year+" ás "+hour+":"+minutes+""

            console.log(conference.endDate)
            date = new Date(conference.endDate);
            year = date.getFullYear();
            month = date.getMonth()+1;
            day = date.getDate();
            hour = date.getHours();
            minutes = date.getMinutes();
            conference.endDate = ""+day+"/"+month+"/"+year+" ás "+hour+":"+minutes+""
        })
    }, [])


    console.log(conference)

    return (
        <div className="detailPage">
            <div>
                <a>A palestra está acontecendo</a>
                <br/>
                <button className="rentButton" onClick={() => history.push("/call", { hash: conference.meetingHash})}>entre agora!</button>
            </div>
            <div>
                <h1>{conference.subject}</h1>
            </div>
            <div className="detailPageImg">
                <img src='images/book-tcc.jpg' alt="book">
                </img>
            </div>
            <div className="detailPageDescription">
                <h2>Quando?</h2>
                <a> De: {conference.startDate}
                    <br></br>
                    Até: {conference.endDate}
                </a>
            </div>
        </div>
    );
}

