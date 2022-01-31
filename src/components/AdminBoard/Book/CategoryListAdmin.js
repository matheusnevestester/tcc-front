import React, {useRef, useState, useEffect} from "react";
import {Link, useHistory} from 'react-router-dom';
import {Button} from "react-bootstrap";

import '../../Register/RegisterForm.css'
import './List.css'
import Modal from "react-bootstrap/Modal";
import ModalTest from "../../Modal/Modal";


const axios = require('axios');

export default function CategoryListAdmin() {
    const history = useHistory();

    const [categories, setCategories] = useState([]);
    const [deleteModal,setDeleteModal] = useState(false)
    const [deleteConfirm, setDeleteConfirm] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState('')


    useEffect(() => {
        axios.get('http://localhost:8081/api/v1/categories').then(({data}) => {
            console.log(data)
            setCategories(data);
        })
        // eslint-disable-next-line
    }, [])


    useEffect(() => {
        if (!deleteConfirm) return
        const deleteBook = async () => {
            try {
                const response = await axios.delete('http://localhost:8081/api/v1/categories/' + selectedCategory)
                console.log(response)
                setDeleteConfirm(false)
                setSelectedCategory('')
            } catch (e) {
                console.log(e);
                setDeleteConfirm(false)
                setSelectedCategory('')
            }
        }
        deleteBook()
    }, [deleteConfirm])

    const handleClickEdit = ({target}) => {
        const categoryIdEdit= target.name
        const categoryId = categoryIdEdit.replace('edit-','');
        history.push("/admin-categories-edit", { category: categoryId })
    }


    const handleClickDelete = ({target}) => {
        const categoryIdDelete = target.name
        const categoryId = categoryIdDelete.replace('delete-','');
        setSelectedCategory(categoryId)
        setDeleteModal(true)
        console.log(categoryId)
    }

    return (
        <>
            {deleteModal && < ModalTest setIsOpen={setDeleteModal} deleteConfirm={setDeleteConfirm}/>}
        <div className="backPage" >
            <h1>Categorias</h1>
            <div className="alignCenter">
                <table className="maxWidth boxShadow">
                    <tr>
                        <th><h3 className="listPadding">Nome</h3></th>
                        <th className="fullSizeList"><h3>Descrição</h3></th>
                        <th className="listPaddingLeft"><h3>Editar</h3></th>
                        <th className="listPaddingLeft"><h3>Excluir</h3></th>

                    </tr>
                    {categories?.map((category) => (
                        <tr className="boxShadow">
                            <td className="listPadding">{category.name}</td>
                            <td className="fullSizeList">{category.description}</td>
                            <td ><img className="editDeleteImg" src={"/images/editIcon.jpg"} alt="book-edit" name={"edit-" + category.id} onClick={handleClickEdit}/></td>
                            <td><img className="editDeleteImg" src={"/images/deleteIcon.png"} alt="book-delete" name={"delete-" + category.id}onClick={handleClickDelete}/></td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    </>
    );
}

