import { useRef } from 'react';
import PopupWithForm from './PopupWithForm';

export default function EditAvatarPopup({
  isOpen,
  onClose,
  onUpdateAvatar,
  onChanging,
}) {
  const avatar = useRef('');

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatar.current.value,
    });
  }
  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      name="avatar"
      title="Обновить аватар"
      buttonText={onChanging ? 'Сохранение...' : 'Сохранить'}
      onSubmit={handleSubmit}>
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
          ref={avatar}
        />
        <span className="link-avatar-error popup__input-error"></span>
      </>
    </PopupWithForm>
  );
}
