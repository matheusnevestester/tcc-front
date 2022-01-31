import React, {useRef, useState, useEffect} from "react";
import {Link, useHistory} from 'react-router-dom';

import '../Register/RegisterForm.css'
import '../DetailPage.css'
import '../Comment.css'
import CategoryItem from "../CategoryItem";
const axios = require('axios');

const initialState = {
    commentLine: '',
    sendComment: false,
    existComments: false,
    sendReserve: false,
    successReserve: false,
    errorReserve: false

}
export default function BookDetailPage(bookID) {
    const history = useHistory();

    const [book, setBook] = useState([]);
    const [comments, setComments] = useState([]);
    const [commentUser, setcommentUser] = useState('')
    const [state, setState] = useState(initialState)


    useEffect(() => {
        axios.get('http://localhost:8081/api/v1/book/'+history.location.state.book+''
        ).then(({data}) => {
            setBook(data);
        })
    }, [])

    useEffect(() => {
        if (!state.sendComment) return
        const signInClick = async () => {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
            try {
                const response = await axios.post('http://localhost:8083/api/v1/comments', {
                    bookId: history.location.state.book,
                    userId: 4 ,
                    title: "random",
                    text: state.commentLine
                }, config)
                console.log(response)
                setState({...state, sendComment: false})
                window.location.reload(false);
            } catch (e) {
                setState({...state, error: true})
                setTimeout(() =>
                        setState({...state, error: false, sendComment: false}),
                    2000)
            }
        }
        signInClick()
    }, [state.sendComment])

    useEffect(() => {
        axios.get('http://localhost:8083/api/v1/comments/'+history.location.state.book+'/book'
        ).then(({data}) => {
            setComments(data);
            if(data.length >0){
                setState({...state, existComments: true})
            }
        })
    }, [])

    useEffect(() => {
        if (!state.sendReserve) return
        const createReserve = async () => {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
            try {
                const response = await axios.post('http://localhost:8081/api/v1/lending', {
                    bookId: history.location.state.book,
                    studentId: 22,
                }, config)
                console.log(response)
                setState({...state, sendReserve: false, successReserve: true})
            } catch (e) {
                console.log(e);
                setState({...state, errorReserve: true})
                setTimeout(() =>
                        setState({...state, errorReserve: false, sendReserve: false}),
                    2000)
            }
        }
        createReserve()
    }, [state.sendReserve])


    const handleClickButton = (event) => {
        event.preventDefault();
        setState({...state, sendComment: true})
    }
    const handleCreateReserve = (event) => {
        event.preventDefault();
        setState({...state, sendReserve: true})
    }

    const handleCommentChange = ({target}) => setState({...state, commentLine: target.value})

    return (
        <>
        <div className="detailPage">
            <div>
                {!book.available && <>
                    <h3 className="noBookText">Oops, parece que não temos exemplares disponíveis.</h3>
                    <button className="rentButton">Voltar a página de livros</button></>
                }
                {book.available && <button onClick={handleCreateReserve} className="rentButton">Reserve agora!</button>}
            </div>
            <div className="align-text">
                <h1>{book.title}</h1>
                <a>Autor: {book.author}</a>
            </div>
            <div className="detailPageImg">
                <img src={"images/books/"+book.image+".jpg"} alt="book">
                </img>
            </div>
            <div className="detailPageDescription">
                <h2>Descrição:</h2>
                <a> {book.description}
                    <br></br>
                </a>
            </div>
        </div>
            <div className="commentSession">
            <div className="commentBlock">
                {state.existComments &&
                <>
                <h3>Comentários:</h3>
                {comments.map((comment) =>(
                    <p className="commentParagraph">
                        <b>{comment.userId}: </b><a>{comment.text}</a>
                    </p>
                    ))}
                </>}
                <h3>Adicionar comentário:</h3>
                <input onChange={handleCommentChange} placeholder="Escreva aqui o que achou do livro!"></input>
                <button onClick={handleClickButton}>adicionar comentário</button>
            </div>
            </div>
        </>
    );
}

