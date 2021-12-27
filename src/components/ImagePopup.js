import React from "react";

const ImagePopup = () => {
  return (
    <div className="popup popup_type_image">
      <div className="popup__img-container">
        <button type="button" className="popup__close"></button>
        <figure className="popup__figure">
          <img className="popup__img" />
          <figcaption className="popup__caption"></figcaption>
        </figure>
      </div>
    </div>
  );
};

export default ImagePopup;
