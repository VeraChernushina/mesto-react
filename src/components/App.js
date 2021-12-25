import React from "react";

import Header from "./Header";
import Main from "./Main";

function App() {
  return (
    <div>
      <div className="page">
        <Header />
        <Main />
        <footer className="footer page__footer">
          <p className="footer__copyright">&copy;2021 Mesto Russia</p>
        </footer>

        <div className="popup popup_type_avatar">
          <div className="popup__container">
            <button type="button" className="popup__close"></button>
            <h3 className="popup__title">Обновить аватар</h3>
            <form
              name="edit-avatar-form"
              action="#"
              className="popup__form form"
              noValidate
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
            </form>
          </div>
        </div>

        <div className="popup popup_type_edit">
          <div className="popup__container">
            <button type="button" className="popup__close"></button>
            <h3 className="popup__title">Редактировать профиль</h3>
            <form
              name="edit-form"
              method="GET"
              action="#"
              className="popup__form form"
              noValidate
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
            </form>
          </div>
        </div>

        <div className="popup popup_type_new-card">
          <div className="popup__container">
            <button type="button" className="popup__close"></button>
            <h3 className="popup__title">Новое место</h3>
            <form
              name="add-form"
              method="GET"
              action="#"
              className="popup__form form"
              noValidate
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
            </form>
          </div>
        </div>

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

        <div className="popup popup_type_image">
          <div className="popup__img-container">
            <button type="button" className="popup__close"></button>
            <figure className="popup__figure">
              <img className="popup__img" />
              <figcaption className="popup__caption"></figcaption>
            </figure>
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
