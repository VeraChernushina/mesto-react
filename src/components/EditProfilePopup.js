import React, { useState, useContext, useEffect } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

const EditProfilePopup = ({ isOpen, onClose, onUpdateUser, onLoading }) => {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  const handleSubmit = (event) => {
    event.preventDefault();

    onUpdateUser({
      username: name,
      job: description,
    });
  };

  return (
    <PopupWithForm
      name="edit"
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
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
          value={name}
          onChange={handleNameChange}
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
          value={description}
          onChange={handleDescriptionChange}
        />
        <span id="job-error" className="form__input-error"></span>
        <button type="submit" className="form__submit">
          {onLoading ? "Сохранение..." : "Сохранить"}
        </button>
      </fieldset>
    </PopupWithForm>
  );
};

export default EditProfilePopup;
