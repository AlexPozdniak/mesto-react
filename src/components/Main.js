import PopupWithForm from "./PopupWithForm";
import {useEffect, useState} from "react";
import api from "../utils/api";
import Card from "./Card";
import ImagePopup from "./ImagePopup";

function Main({
    handleAddPlaceClick,
    handleEditAvatarClick,
    handleEditProfileClick,
    onClose,
    isAddPlacePopupOpen,
    isEditAvatarPopupOpen,
    isEditProfilePopupOpen,
    onCardClick,
    selectedCard,
}) {
    const [user, setUser] = useState({});
    const [userAvatar, setUserAvatar] = useState('');
    const [cards, setCards] = useState([]);

    useEffect(() => {
        api.getData().then(res => {
            const [user, cards] = res;
            setUser(user);
            setUserAvatar(user.avatar);
            setCards(cards);
        });
    }, [])

    return(
        <>
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
            <PopupWithForm
                name='add-card'
                title='Новое место'
                textButton='Создать'
                isOpen={isAddPlacePopupOpen}
                onClose={onClose}
            >
                <div className="popup__container-input">
                    <input
                        id="name"
                        className="popup__input popup__input_type_name"
                        type="text"
                        name="name"
                        placeholder="Название"
                        required
                        minLength="2"
                        maxLength="30"
                    />
                    <span className="error-class popup__input-error-name"></span>
                </div>
                <div className="popup__container-input">
                    <input
                        id="link"
                        className="popup__input popup__input_type_link"
                        type="url"
                        name="link"
                        placeholder="Ссылка на картинку"
                        required
                    />
                    <span className="error-class popup__input-error-link"></span>
                </div>
            </PopupWithForm>
            <PopupWithForm
                name='change-avatar'
                title='Обновить аватар'
                textButton='Сохранить'
                isOpen={isEditAvatarPopupOpen}
                onClose={onClose}
            >
                <div className="popup__container-input">
                    <input
                        id="avatar"
                        className="popup__input popup__input_type_avatar"
                        type="url"
                        name="avatar"
                        placeholder="Ссылка на картинку"
                        required
                    />
                    <span className="error-class popup__input-error-avatar"></span>
                </div>
            </PopupWithForm>
            <PopupWithForm
                name='profile'
                title='Редактировать профиль'
                textButton='Сохранить'
                isOpen={isEditProfilePopupOpen}
                onClose={onClose}
            >
                <div className="popup__container-input">
                    <input
                        id="title"
                        className="popup__input popup__input_type_title"
                        type="text"
                        name="name"
                        placeholder="Имя"
                        required minLength="2"
                        maxLength="40"
                    />
                    <span className="error-class popup__input-error-title"></span>
                </div>
                <div className="popup__container-input">
                    <input
                        id="job"
                        className="popup__input popup__input_type_job"
                        type="text"
                        name="about"
                        placeholder="О себе"
                        required
                        minLength="2"
                        maxLength="200"
                    />
                    <span className="error-class popup__input-error-job"></span>
                </div>
            </PopupWithForm>
            <ImagePopup cardData={selectedCard} onClose={onClose}/>
        </>
    )
}

export default Main;