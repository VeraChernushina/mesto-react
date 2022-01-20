import { useState } from "react";
import PopupWithForm from "./PopupWithForm";

const AddPlacePopup = ({ isOpen, onClose, onAddPlace, onLoading }) => {
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');

    const handleImageChange = (event) => {
        setImage(event.target.value)
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        onAddPlace({
            name: description,
            link: image
        });
    };

    return (
        <PopupWithForm
          name="new-card"
          title="Новое место"
          isOpen={isOpen}
          onClose={onClose}
          onSubmit={handleSubmit}
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
              onChange={handleDescriptionChange}
              required
            />
            <span id="title-error" className="form__input-error"></span>
            <input
              type="url"
              name="link"
              id="link"
              placeholder="Ссылка на картинку"
              className="form__input"
              onChange={handleImageChange}
              required
            />
            <span id="link-error" className="form__input-error"></span>
            <button type="submit" className="form__submit">
            {onLoading ? "Сохранение..." : "Создать"}
            </button>
          </fieldset>
        </PopupWithForm>
    )
};

export default AddPlacePopup;