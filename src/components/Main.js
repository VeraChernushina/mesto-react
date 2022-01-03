import React from "react";

import avatarLoading from "../images/avatar-loading.png";

const Main = props => {
  return (
      <main className="content">
        <section className="profile page__profile">
          <div className="profile__card">
            <img
              className="profile__avatar"
              src={avatarLoading}
              alt="Аватар пользователя"
            />
            <button className="profile__avatar-btn" onClick={props.onEditAvatar}></button>
            <div className="profile__info">
              <h1 className="profile__title"></h1>
              <button type="button" className="profile__edit-button"
              onClick={props.onEditProfile}></button>
              <p className="profile__description"></p>
            </div>
          </div>

          <button type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
        </section>

        <section className="elements"></section>
      </main>
  );
};

export default Main;
