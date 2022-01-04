import React from "react";
import api from "../utils/api";

const Main = (props) => {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  });

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  });

  return (
    <main className="content">
      <section className="profile page__profile">
        <div className="profile__card">
          <img
            className="profile__avatar"
            src={userAvatar}
            alt="Аватар пользователя"
          />
          <button
            className="profile__avatar-btn"
            onClick={props.onEditAvatar}
          ></button>
          <div className="profile__info">
            <h1 className="profile__title">{userName}</h1>
            <button
              type="button"
              className="profile__edit-button"
              onClick={props.onEditProfile}
            ></button>
            <p className="profile__description">{userDescription}</p>
          </div>
        </div>

        <button
          type="button"
          className="profile__add-button"
          onClick={props.onAddPlace}
        ></button>
      </section>

      <section className="elements">
        {cards.map((card) => {
          return (
            <li className="element" key={card._id}>
              <img className="element__img" src={card.link} alt={card.name} />
              <div className="element__bottom-block">
                <h3 className="element__title">{card.name}</h3>
                <div className="element__likes">
                  <button type="button" className="element__like-btn"></button>
                  <span className="element__likes-number">
                    {card.likes.length}
                  </span>
                </div>
                <button type="button" className="element__delete-btn"></button>
              </div>
            </li>
          );
        })}
      </section>
    </main>
  );
};

export default Main;
