import { useEffect } from 'react';
import PopupWithForm from './PopupWithForm';
import useForm from '../hooks/useForm';

export default function AddPlacePopup({
  isOpen,
  onClose,
  onAddPlace,
  onChanging,
}) {
  const { values, handleChange, reset } = useForm();

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      title: values.title,
      link: values.link,
    });
  }

  useEffect(() => {
    reset();
  }, [isOpen, reset]);

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      name="create"
      title="Новое место"
      buttonText={onChanging ? 'Создание...' : 'Создать'}
      onSubmit={handleSubmit}>
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
          onChange={handleChange}
          value={values.title || ''}
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
          onChange={handleChange}
          value={values.link || ''}
        />
        <span className="link-input-error popup__input-error"></span>
      </>
    </PopupWithForm>
  );
}
