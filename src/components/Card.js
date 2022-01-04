import React from "react";

const Card = ({ card }) => {
    return (
        <li className="element">
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
    )
}

export default Card;