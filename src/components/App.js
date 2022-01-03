import React from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  };

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
  }

  return (
    <div>
      <div className="page">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
        />
        <Footer />

        <PopupWithForm
          name="avatar"
          title="Обновить аватар"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <fieldset className="form__set">
            <input
              type="url"
              name="avatar"
              id="avatar"
              placeholder="Ссылка на картинку"
              className="form__input"
              required
            />
            <span id="avatar-error" className="form__input-error"></span>
            <button type="submit" className="form__submit">
              Сохранить
            </button>
          </fieldset>
        </PopupWithForm>

        <PopupWithForm
          name="edit"
          title="Редактировать профиль"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <fieldset className="form__set">
            <input
              type="text"
              name="username"
              id="name"
              placeholder="Имя"
              minLength="2"
              maxLength="40"
              className="form__input"
              required
            />
            <span id="name-error" className="form__input-error"></span>
            <input
              type="text"
              name="job"
              id="job"
              placeholder="Вид деятельности"
              minLength="2"
              maxLength="200"
              className="form__input"
              required
            />
            <span id="job-error" className="form__input-error"></span>
            <button type="submit" className="form__submit">
              Сохранить
            </button>
          </fieldset>
        </PopupWithForm>

        <PopupWithForm
          name="new-card"
          title="Новое место"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <fieldset className="form__set">
            <input
              type="text"
              name="name"
              id="title"
              placeholder="Название"
              minLength="2"
              maxLength="30"
              className="form__input"
              required
            />
            <span id="title-error" className="form__input-error"></span>
            <input
              type="url"
              name="link"
              id="link"
              placeholder="Ссылка на картинку"
              className="form__input"
              required
            />
            <span id="link-error" className="form__input-error"></span>
            <button type="submit" className="form__submit">
              Создать
            </button>
          </fieldset>
        </PopupWithForm>

        <div className="popup popup_type_delete-card">
          <div className="popup__container">
            <button type="button" className="popup__close"></button>
            <h3 className="popup__title">Вы уверены?</h3>
            <form
              name="delete-form"
              action="#"
              className="popup__form form"
              noValidate
            >
              <button type="submit" className="form__submit">
                Да
              </button>
            </form>
          </div>
        </div>
      </div>

      <template className="element-template">
        <li className="element">
          <img className="element__img" />
          <div className="element__bottom-block">
            <h3 className="element__title"></h3>
            <div className="element__likes">
              <button type="button" className="element__like-btn"></button>
              <span className="element__likes-number"></span>
            </div>
            <button type="button" className="element__delete-btn"></button>
          </div>
        </li>
      </template>
    </div>
  );
}

export default App;
