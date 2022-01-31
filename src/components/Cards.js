import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Os melhores serviços para bibliotecas estão aqui!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__item__services'>
            <CardItem
              src='images/how-to-rent-a-book.jpg'
              text='Alugue e reserve livros online'
              label='Alguel de livros online'
            />
            <CardItem
              src='images/book-club.jpg'
              text='Partilhe suas percepções de livros com outras pessoas'
              label='Clubes do livro'
            />
          </ul>
          <ul className='cards__item__services'>
            <CardItem
              src='images/Palestra-online.jpg'
              text='Assista palestras e aulas online facilmente pela nossa plataforma'
              label='Palestras online'
            />
            <CardItem
              src='images/book-nomination.jpg'
              text='Indicação de livros baseada em livros que você já escolheu antes'
              label='Indicação de livros'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
