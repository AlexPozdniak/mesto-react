import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import {useEffect, useState} from "react";
import ImagePopup from "./ImagePopup";
import {CurrentUserContext} from "../contexts/CurrentUserContext"
import api from "../utils/api";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getData()
        .then(([user, cards])  => {
            setCards(cards);
            setCurrentUser(user);
        })
        .catch((err) => console.log(err));
  }, []);

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

  function handleCardLike(cardId, isLiked) {
      api.changeLikeCardStatus(cardId, isLiked)
          .then(newCard => {
            setCards(state => state.map(stateCard => stateCard._id === cardId ? newCard : stateCard));
          })
          .catch((err) => console.log(err));
  }

  function handleUpdateUser(user) {
      api.patchUserInfo(user)
          .then(res => {
            setCurrentUser(res);
            closeAllPopups();
          })
          .catch((err) => console.log(err));
  }

  function handleUpdateAvatar(avatar) {
      api.setUserAvatar(avatar)
          .then(res => {
              setCurrentUser(res);
              closeAllPopups();
          })
          .catch((err) => console.log(err));
  }

  function handleAddCard(data) {
      api.createCard(data)
          .then(newCard => {
              setCards([newCard, ...cards]);
              closeAllPopups();
          })
          .catch((err) => console.log(err));
  }

  function handleDeleteCard(id) {
      api.deleteCard(id)
          .then(() => {
              const newCards = cards.filter(card => card._id !== id);
              setCards(newCards);
          })
          .catch((err) => console.log(err));
  }

  return (
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page__container">
          <Header />
          <Main
              handleEditAvatarClick={handleEditAvatarClick}
              handleAddPlaceClick={handleAddPlaceClick}
              handleEditProfileClick={handleEditProfileClick}
              onCardClick={handleCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handleDeleteCard}
              cards={cards}
          />
          <Footer />
          <AddPlacePopup
              onClose={closeAllPopups}
              isOpen={isAddPlacePopupOpen}
              onAddCard={handleAddCard}
          />
          <EditAvatarPopup
              isOpen={isEditAvatarPopupOpen}
              onClose={closeAllPopups}
              onUpdateAvatar={handleUpdateAvatar}
          />
          <EditProfilePopup
              isOpen={isEditProfilePopupOpen}
              onClose={closeAllPopups}
              onUpdateUser={handleUpdateUser}
          />
          <ImagePopup cardData={selectedCard} onClose={closeAllPopups}/>
        </div>
      </CurrentUserContext.Provider>
  );
}

export default App;
