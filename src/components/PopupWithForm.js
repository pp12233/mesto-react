import React from 'react';

function PopupWithForm({
  name,
  isOpen,
  onClose,
  title,
  buttonText,
  onSubmit,
  ...props
}) {
  return (
    <div
      className={`popup popup_${name} ${
        isOpen ? 'popup_opened' : ''
      }`}>
      <div className="popup__container">
        <button
          type="button"
          className="popup__close"
          onClick={onClose}></button>
        <h2 className="popup__title">{title}</h2>
        <form
          className="popup__form"
          name={`${name}`}
          noValidate
          onSubmit={onSubmit}>
          {props.children}
          <button type="submit" className="popup__btn">
            {buttonText || 'Сохранить'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
