function Card({ cardData, onCardClick }) {
    const { name, link, likes } = cardData;

    return(
        <li className="elements__list-item">
            <button className="elements__trash" type="button" />
            <img
                className="elements__picture"
                alt={name}
                src={link}
                onClick={() => onCardClick( { name: name, link: link } )}
            />
            <div className="elements__container">
                <h2 className="elements__text">{name}</h2>
                <div className="elements__like-container">
                    <button className="elements__icon" type="button" />
                    <span className="elements__counter">{likes.length}</span>
                </div>
            </div>
        </li>
    );
}

export default Card;