import React, {useRef, useState, useEffect} from "react";
import '../Register/RegisterForm.css'
import ConferenceCard from "./ConferenceCard";

const axios = require('axios');

export default function ConfereceList() {

    const [conferences, setConferences] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8083/api/v1/conferences').then(({data}) => {
            console.log(data)
            setConferences(data);
        })
        // eslint-disable-next-line
    }, [])

    conferences.forEach(toDate)

    function toDate(item){
        console.log(item.startDate)
        let date = new Date(item.startDate);
        let year = date.getFullYear();
        let month = date.getMonth()+1;
        let day = date.getDate();
        let hour = date.getHours();
        let minutes = date.getMinutes();
        item.startDate = ""+day+"/"+month+"/"+year+" ás "+hour+":"+minutes+""
    }

    console.log(conferences)



    let conferencesArray = separateCards(conferences)
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
            <h1>Próximas palestas!</h1>
            <div className='cards__wrapper'>
                <ul >
                    {conferencesArray.map((conferences) => (
                        <ul className='cards__items'>
                            {conferences?.map((conference) => (
                                <ConferenceCard
                                    src='images/book-tcc.jpg'
                                    text={conference.subject}
                                    conferenceId={conference.id}
                                    label={conference.startDate}
                                />
                            ))}
                        </ul>
                    ))}
                </ul>
            </div>
        </div>
    );
}

