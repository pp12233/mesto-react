import { useEffect, useContext } from 'react';
import PopupWithForm from './PopupWithForm';
import CurrentUserContext from '../contexts/CurrentUserContext';
import useForm from '../hooks/useForm';

export default function EditProfilePopup({
  isOpen,
  onClose,
  onUpdateUser,
  onChanging,
}) {
  const currentUser = useContext(CurrentUserContext);

  const { values, handleChange, reset } = useForm();

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name: values.name,
      about: values.about,
    });
  }

  useEffect(() => {
    currentUser ? reset(currentUser) : reset();
  }, [currentUser, isOpen, reset]);

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      name="profile"
      title="Редактировать профиль"
      buttonText={onChanging ? 'Сохранение...' : 'Сохранить'}
      onSubmit={handleSubmit}>
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
          onChange={handleChange}
          value={values.name || ''}
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
          onChange={handleChange}
          value={values.about || ''}
        />
        <span className="job-input-error popup__input-error"></span>
      </>
    </PopupWithForm>
  );
}
