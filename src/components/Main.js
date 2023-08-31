<<<<<<< HEAD
import {useContext} from "react";
import Card from "./Card";
import {CurrentUserContext} from "../contexts/CurrentUserContext";
=======
import {useEffect, useState} from "react";
import api from "../utils/api";
import Card from "./Card";
>>>>>>> 947eb918df43af0a39f6361e9c1c6cad43d341ad

function Main({
    handleAddPlaceClick,
    handleEditAvatarClick,
    handleEditProfileClick,
    onCardClick,
<<<<<<< HEAD
    onCardLike,
    onCardDelete,
    cards
}) {
    const {name, about, avatar, _id: id} = useContext(CurrentUserContext);
=======
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
>>>>>>> 947eb918df43af0a39f6361e9c1c6cad43d341ad

    return(
        <main className="content">
            <section className="profile">
                <button className="profile__avatar-edit-button" onClick={handleEditAvatarClick}>
<<<<<<< HEAD
                    <img className="profile__avatar-img" src={avatar}
                         alt="Аватар профиля" />
                </button>
                <div className="profile__info">
                    <h1 className="profile__name">{name}</h1>
=======
                    <img className="profile__avatar-img" src={userAvatar}
                         alt="Аватар профиля" />
                </button>
                <div className="profile__info">
                    <h1 className="profile__name">{user.name}</h1>
>>>>>>> 947eb918df43af0a39f6361e9c1c6cad43d341ad
                    <button
                        className="profile__edit-button"
                        type="button"
                        aria-label="Редактировать"
                        onClick={handleEditProfileClick}
                    />
<<<<<<< HEAD
                    <p className="profile__job">{about}</p>
=======
                    <p className="profile__job">{user.about}</p>
>>>>>>> 947eb918df43af0a39f6361e9c1c6cad43d341ad
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
<<<<<<< HEAD
                            currentUserId={id}
                            onCardLike={onCardLike}
                            onCardDelete={onCardDelete}
=======
>>>>>>> 947eb918df43af0a39f6361e9c1c6cad43d341ad
                        />
                    })}
                </ul>
            </section>
        </main>
    )
}

export default Main;