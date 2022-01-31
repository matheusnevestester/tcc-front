import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    return (
        <div className='cards'>
            <h1>Painel de serviços do estudante</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <h3>Sua área</h3>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/how-to-rent-a-book.jpg'
                            text='Verificar e alterar dados pessois'
                            label='Meus dados pessoais'
                            path='/student-board'
                        />
                        <CardItem
                            src='images/how-to-rent-a-book.jpg'
                            text='Livros alugados e reservados'
                            label='Meus livros'
                            path='student-books'
                        />
                        <CardItem
                            src='images/how-to-rent-a-book.jpg'
                            text='Grupos do livro que está participando'
                            label='Meus grupos do livro'
                        />
                    </ul>
                    <h3>Nova pesquisa</h3>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/how-to-rent-a-book.jpg'
                            text='Listagem de livros para aluguel'
                            label='Buscar novo livro'
                            path='/books-list'
                        />
                        <CardItem
                            src='images/how-to-rent-a-book.jpg'
                            text='Listagem de palestras'
                            label='Buscar palestras'
                            path='/conferences'
                        />
                        <CardItem
                            src='images/how-to-rent-a-book.jpg'
                            text='Listagem de grupos do livro'
                            label='Todos grupos do livro'
                            path='/book-club'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
