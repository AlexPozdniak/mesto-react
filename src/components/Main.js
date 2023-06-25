import {useEffect, useState} from "react";
import api from "../utils/api";
import Card from "./Card";

function Main({
    handleAddPlaceClick,
    handleEditAvatarClick,
    handleEditProfileClick,
    onCardClick,
}) {
    const [user, setUser] = useState({});
    const [userAvatar, setUserAvatar] = useState('');
    const [cards, setCards] = useState([]);

    useEffect(() => {
        api.getData()
            .then(res => {
                const [user, cards] = res;
                setUser(user);
                setUserAvatar(user.avatar);
                setCards(cards);
            })
            .catch((err) => console.log(err));
    }, []);

    return(
        <main className="content">
            <section className="profile">
                <button className="profile__avatar-edit-button" onClick={handleEditAvatarClick}>
                    <img className="profile__avatar-img" src={userAvatar}
                         alt="Аватар профиля" />
                </button>
                <div className="profile__info">
                    <h1 className="profile__name">{user.name}</h1>
                    <button
                        className="profile__edit-button"
                        type="button"
                        aria-label="Редактировать"
                        onClick={handleEditProfileClick}
                    />
                    <p className="profile__job">{user.about}</p>
                </div>
                <button
                    className="profile__add-button"
                    type="button"
                    aria-label="Добавить"
                    onClick={handleAddPlaceClick}
                />
            </section>
            <section className="elements">
                <ul className="elements__list">
                    {cards.map(item => {
                        return <Card
                            key={item._id}
                            cardData={item}
                            onCardClick={onCardClick}
                        />
                    })}
                </ul>
            </section>
        </main>
    )
}

export default Main;