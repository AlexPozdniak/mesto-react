function Card({ cardData, onCardClick, onCardLike, onCardDelete, currentUserId }) {
    const { name, link, likes, _id: cardId } = cardData;
    const isOwn = cardData.owner._id === currentUserId;
    const isLiked = cardData.likes.some((el) => el._id === currentUserId);
    const likeButtonClassName = `elements__icon ${
        isLiked ? "elements__icon-active" : ""
    }`;

    return(
        <li className="elements__list-item">
<<<<<<< HEAD
            {isOwn && <button className="elements__trash" type="button" onClick={() => onCardDelete(cardId)}/>}
=======
            <button className="elements__trash" type="button" />
>>>>>>> 947eb918df43af0a39f6361e9c1c6cad43d341ad
            <img
                className="elements__picture"
                alt={name}
                src={link}
                onClick={() => onCardClick( { name: name, link: link } )}
            />
            <div className="elements__container">
                <h2 className="elements__text">{name}</h2>
                <div className="elements__like-container">
<<<<<<< HEAD
                    <button
                        className={likeButtonClassName}
                        type="button"
                        onClick={() => onCardLike(cardId, isLiked)}
                    />
=======
                    <button className="elements__icon" type="button" />
>>>>>>> 947eb918df43af0a39f6361e9c1c6cad43d341ad
                    <span className="elements__counter">{likes.length}</span>
                </div>
            </div>
        </li>
    );
}

export default Card;