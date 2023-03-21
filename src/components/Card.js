import { useContext } from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext.js';

function Card({ card, onCardClick, onCardDelete, onCardLike }) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = `elements__button ${
    isLiked && 'elements__button_activ'
  }`;

  function handleClick() {
    onCardClick(card);
  }
  function handleDeleteClick() {
    onCardDelete(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  return (
    <li className="elements__item" key={card._id}>
      {isOwn && (
        <button
          type="button"
          className="elements__trash"
          onClick={handleDeleteClick}
        />
      )}
      <img
        src={card.link}
        alt={card.name}
        className="elements__image"
        onClick={handleClick}
      />
      <div className="elements__card">
        <h2 className="elements__text">{card.name}</h2>
        <button
          type="button"
          className={`${cardLikeButtonClassName}`}
          onClick={handleLikeClick}></button>
        <p className="elements__counter">{card.likes.length}</p>
      </div>
    </li>
  );
}

export default Card;
