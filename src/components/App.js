import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import {useState} from "react";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function closeAllPopups() {
      setIsEditAvatarPopupOpen(false);
      setIsAddPlacePopupOpen(false);
      setIsEditProfilePopupOpen(false);
      setSelectedCard(null);
  }

  function handleCardClick(card) {
      setSelectedCard(card);
  }

  return (
    <div className="page__container">
      <Header />
      <Main
            handleEditAvatarClick={handleEditAvatarClick}
            handleAddPlaceClick={handleAddPlaceClick}
            handleEditProfileClick={handleEditProfileClick}
            onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
          name='add-card'
          title='Новое место'
          textButton='Создать'
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
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
          onClose={closeAllPopups}
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
          onClose={closeAllPopups}
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
      <ImagePopup cardData={selectedCard} onClose={closeAllPopups}/>
    </div>
  );
}

export default App;
