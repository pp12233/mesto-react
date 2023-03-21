import { useContext } from 'react';
import Card from './Card';
import CurrentUserContext from '../contexts/CurrentUserContext.js';

export default function Main({
  cards,
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
  onCardDelete,
  onCardLike,
}) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="container">
      <section className="profile">
        <img
          src={`${currentUser.avatar}`}
          className="profile__image"
          alt="профиль"
        />
        <div
          className="profile__image-edit"
          onClick={onEditAvatar}></div>
        <div className="profile__info">
          <div className="profile__line">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button
              type="button"
              className="profile__edit"
              onClick={onEditProfile}></button>
          </div>
          <p className="profile__content">{currentUser.about}</p>
        </div>
        <button
          type="button"
          className="profile__add"
          onClick={onAddPlace}></button>
      </section>
      <section className="elements">
        <ul className="elements__list">
          {cards.map((card) => {
            return (
              <Card
                card={card}
                key={card._id}
                link={card.link}
                name={card.name}
                onCardClick={onCardClick}
                onCardLike={onCardLike}
                onCardDelete={onCardDelete}
              />
            );
          })}
        </ul>
      </section>

      {/* <div className="popup popup_delete-card">
      <div className="popup__container popup__container_delete-card">
        <button type="button" className="popup__close"></button>
        <h2 className="popup__title">Вы уверены?</h2>
        <form name="delete-card" className="popup__form" novalidate>
          <button type="submit" className="popup__btn popup__btn_approval">
            Да
          </button>
        </form>
      </div>
    </div> */}
    </div>
  );
}
