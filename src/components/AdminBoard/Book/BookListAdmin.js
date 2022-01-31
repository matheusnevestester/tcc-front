import React, {useRef, useState, useEffect} from "react";
import {Link, useHistory} from 'react-router-dom';

import '../../Register/RegisterForm.css'
import './List.css'
import ModalTest from "../../Modal/Modal";


const axios = require('axios');

export default function BookListAdmin() {
    const history = useHistory();
    const [deleteModal,setDeleteModal] = useState(false)
    const [deleteConfirm, setDeleteConfirm] = useState(false)
    const [selectedBook, setSelectedBook] = useState('')
    const [books, setBooks] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:8081/api/v1/book').then(({data}) => {
            console.log(data)
            setBooks(data);
        })
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        if (!deleteConfirm) return
        const deleteBook = async () => {
            try {
                const response = await axios.delete('http://localhost:8081/api/v1/book/' + selectedBook)
                console.log(response)
                setDeleteConfirm(false)
                setSelectedBook('')
            } catch (e) {
                console.log(e);
                setDeleteConfirm(false)
                setSelectedBook('')
            }
        }
        deleteBook()
    }, [deleteConfirm])

    const handleClickEdit = ({target}) => {
        const bookIdEdit = target.name
        const bookId = bookIdEdit.replace('edit-','');
        history.push("/admin-books-edit", { book: bookId })
    }


    const handleClickDelete = ({target}) => {
        const bookIdDelete = target.name
        const bookId = bookIdDelete.replace('delete-','');
        setDeleteModal(true)
        setSelectedBook(bookId)
        console.log(bookId)
    }

    return (
        <>
            {deleteModal && < ModalTest setIsOpen={setDeleteModal} deleteConfirm={setDeleteConfirm}/>}
        <div className="backPage">
            <h1>Livros</h1>
            <div className="alignCenter">
                <table className="maxWidth boxShadow">
                    <tr>
                        <th><h3 className="listPadding">Nome</h3></th>
                        <th className="fullSizeList"><h3>Autor</h3></th>
                        <th className="fullSizeList"><h3>Número de registro</h3></th>
                        <th className="fullSizeList"><h3>Disponível</h3></th>
                        <th className="listPaddingLeft"><h3>Editar</h3></th>
                        <th className="listPaddingLeft"><h3>Excluir</h3></th>
                    </tr>
                        {books?.map((book) => (
                            <tr className="boxShadow">
                                <td className="listPadding">{book.title}</td>
                                <td className="fullSizeList">{book.author}</td>
                                <td className="fullSizeList">{book.registerNumber}</td>
                                <td className="fullSizeList">{book.available.toString()}</td>
                                <td><img className="editDeleteImg" src={"/images/editIcon.jpg"} alt="book-edit" name={"edit-" + book.id} onClick={handleClickEdit}/></td>
                                <td ><img className="editDeleteImg" src={"/images/deleteIcon.png"} alt="book-delete" name={"delete-" + book.id}onClick={handleClickDelete}/></td>
                            </tr>
                        ))}
                </table>
            </div>
        </div>
        </>

    );
}

