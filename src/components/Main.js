import { useEffect, useState } from 'react';
import api from '../utils/api.js';
import Card from './Card';

function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
}) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getCards()])
      .then(([user, cards]) => {
        setUserName(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);
        setCards(cards);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      <section className="profile">
        <img
          src={userAvatar}
          className="profile__image"
          alt="профиль"
        />
        <div
          className="profile__image-edit"
          onClick={onEditAvatar}></div>
        <div className="profile__info">
          <div className="profile__line">
            <h1 className="profile__name">{userName}</h1>
            <button
              type="button"
              className="profile__edit"
              onClick={onEditProfile}></button>
          </div>
          <p className="profile__content">{userDescription}</p>
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
                onCardClick={onCardClick}
                key={card._id}
                link={card.link}
                name={card.name}
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

export default Main;
