import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Os melhores serviços para sua biblioteca estão aqui!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/how-to-rent-a-book.jpg'
              text='Alugue e reserve livros online'
              label='Alguel de livros online'
              path='/books-list'
            />
            <CardItem
              src='images/book-club.jpg'
              text='Partilhe suas percepções de livros com outras pessoas'
              label='Clubes do livro'
              path='/book-club'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Palestra-online.jpg'
              text='Assista palestras e aulas online facilmente pela nossa plataforma'
              label='Palestras online'
              path='/conferences'
            />
            <CardItem
              src='images/book-nomination.jpg'
              text='Indicação de livros baseada em livros que você já escolheu antes'
              label='Indicação de livros'
              path='/conferences'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
