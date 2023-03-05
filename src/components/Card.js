import React from 'react';

function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="elements__item" key={card._id}>
      <button type="button" className="elements__trash"></button>
      <img
        src={card.link}
        alt={card.name}
        className="elements__image"
        onClick={handleClick}
      />
      <div className="elements__card">
        <h2 className="elements__text">{card.name}</h2>
        <button type="button" className="elements__button"></button>
        <p className="elements__counter">{card.likes.length}</p>
      </div>
    </li>
  );
}

export default Card;
