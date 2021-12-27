import React from "react";

const PopupWithForm = (props) => {
  return (
    <div className={`popup popup_type_${props.name}`}>
      <div className="popup__container">
        <button type="button" className="popup__close"></button>
        <h3 className="popup__title">{props.title}</h3>
        <form
          name={`${props.name}`}
          action="#"
          className="popup__form form"
          noValidate>
          {props.children}
        </form>
      </div>
    </div>
  );
};

export default PopupWithForm;
