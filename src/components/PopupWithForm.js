import React from 'react';

function PopupWithForm(props) {
  return (
    <div className={`popup popup_${props.name} ${props.isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button type="button" className="popup__close" onClick={props.onClose}></button>
        <h2 className="popup__title">{props.title}</h2>
        <form className="popup__form" name={`${props.name}`} noValidate>
          {props.children}
          <button type="submit" className="popup__btn">{props.buttonText}</button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;