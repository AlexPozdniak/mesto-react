import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import {useState} from "react";

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
            onClose={closeAllPopups}
            isAddPlacePopupOpen={isAddPlacePopupOpen}
            isEditProfilePopupOpen={isEditProfilePopupOpen}
            isEditAvatarPopupOpen={isEditAvatarPopupOpen}
            onCardClick={handleCardClick}
            selectedCard={selectedCard}
        />
        <Footer />
      </div>
  );
}

export default App;
