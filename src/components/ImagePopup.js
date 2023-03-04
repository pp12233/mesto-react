import React from 'react';

function ImagePopup({ card, onClose }) {
  return (
    <div
      className={`popup popup_gallery ${
        card.link ? 'popup_opened' : ''
      }`}>
      <div className="popup__background">
        <button
          type="button"
          className="popup__close"
          onClick={onClose}></button>
        <img className="popup__img" src={card.link} alt={card.name} />
        <h2 className="popup__name">{card.name}</h2>
      </div>
    </div>
  );
}

export default ImagePopup;
