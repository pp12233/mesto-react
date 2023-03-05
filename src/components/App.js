import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] =
    useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
  };

  return (
    <div className="App" style={{ backgroundColor: 'black' }}>
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <PopupWithForm
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          name="profile"
          title="Редактировать профиль"
          buttonText="Сохранить">
          <>
            <input
              className="popup__input popup__input_type_name"
              name="name"
              type="text"
              minLength="2"
              maxLength="40"
              id="name-input"
              placeholder="Имя"
              required
            />
            <span className="name-input-error popup__input-error"></span>
            <input
              className="popup__input popup__input_type_job"
              name="about"
              type="text"
              minLength="2"
              maxLength="200"
              id="job-input"
              placeholder="О себе"
              required
            />
            <span className="job-input-error popup__input-error"></span>
          </>
        </PopupWithForm>
        <PopupWithForm
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          name="create"
          title="Новое место"
          buttonText="Создать">
          <>
            <input
              className="popup__input popup__input_type_city"
              name="city"
              type="text"
              minLength="2"
              maxLength="30"
              id="city-input"
              placeholder="Название"
              required
            />
            <span className="city-input-error popup__input-error"></span>
            <input
              className="popup__input popup__input_type_link"
              name="link"
              type="url"
              minLength="2"
              maxLength="200"
              id="link-input"
              placeholder="Ссылка на картинку"
              required
            />
            <span className="link-input-error popup__input-error"></span>
          </>
        </PopupWithForm>
        <PopupWithForm
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          name="avatar"
          title="Обновить аватар"
          buttonText="Сохранить">
          <>
            <input
              className="popup__input popup__input_type_link"
              name="link"
              type="url"
              minLength="2"
              maxLength="200"
              id="link-avatar"
              placeholder="Ссылка на аватар"
              required
            />
            <span className="link-avatar-error popup__input-error"></span>
          </>
        </PopupWithForm>
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
