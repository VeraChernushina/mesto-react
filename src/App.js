import React from "react";

function App() {
  return (
    <div>
     <div className="page">
    <header className="header page__header">
      <img className="header__logo" src="<%=require('./images/logo-header.svg')%>" alt="Логотип сайта Место." />
    </header>

    <main className="content">
      <section className="profile page__profile">
        <div className="profile__card">
          <img className="profile__avatar" src="<%=require('./images/avatar-loading.png')%>" alt="Аватар пользователя" />
          <button className="profile__avatar-btn"></button>
          <div className="profile__info">
            <h1 className="profile__title"></h1>
            <button type="button" className="profile__edit-button"></button>
            <p className="profile__description"></p>
        </div>
        </div>

        <button type="button" className="profile__add-button"></button>
      </section>

      <section className="elements"></section>
    </main>

    <footer className="footer page__footer">
      <p className="footer__copyright">&copy;2021 Mesto Russia</p>
    </footer>

    <div className="popup popup_type_avatar">
      <div className="popup__container">
        <button type="button" className="popup__close"></button>
        <h3 className="popup__title">Обновить аватар</h3>
        <form name="edit-avatar-form" action="#" className="popup__form form" novalidate>
          <fieldset className="form__set">
            <input
              type="url"
              name="avatar"
              id="avatar"
              placeholder="Ссылка на картинку"
              className="form__input"
              required />
            <span id="avatar-error" className="form__input-error"></span>
            <button type="submit" className="form__submit">Сохранить</button>
          </fieldset>
        </form>
      </div>
    </div>

    <div className="popup popup_type_edit">
      <div className="popup__container">
        <button type="button" className="popup__close"></button>
        <h3 className="popup__title">Редактировать профиль</h3>
        <form name="edit-form" method="GET" action="#" className="popup__form form" novalidate>
          <fieldset className="form__set">
            <input
            type="text"
            name="username"
            id="name"
            placeholder="Имя"
            minlength="2"
            maxlength="40"
            className="form__input"
            required />
            <span id="name-error" class="form__input-error"></span>
            <input
            type="text"
            name="job"
            id="job"
            placeholder="Вид деятельности"
            minlength="2"
            maxlength="200"
            className="form__input"
            required />
            <span id="job-error" className="form__input-error"></span>
            <button type="submit" className="form__submit">Сохранить</button>
          </fieldset>
        </form>
      </div>
    </div>

    <div className="popup popup_type_new-card">
      <div className="popup__container">
        <button type="button" className="popup__close"></button>
        <h3 className="popup__title">Новое место</h3>
        <form name="add-form" method="GET" action="#" className="popup__form form" novalidate>
          <fieldset className="form__set">
            <input
            type="text"
            name="name"
            id="title"
            placeholder="Название"
            minlength="2"
            maxlength="30"
            className="form__input"
            required />
            <span id="title-error" class="form__input-error"></span>
            <input
            type="url"
            name="link"
            id="link"
            placeholder="Ссылка на картинку"
            className="form__input"
            required />
            <span id="link-error" className="form__input-error"></span>
            <button type="submit" className="form__submit">Создать</button>
          </fieldset>
        </form>
      </div>
    </div>

    <div className="popup popup_type_delete-card">
      <div className="popup__container">
        <button type="button" className="popup__close"></button>
        <h3 className="popup__title">Вы уверены?</h3>
        <form name="delete-form" action="#" className="popup__form form" novalidate>
            <button type="submit" className="form__submit">Да</button>
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
