import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import BuyerWall from './components/BuyerWall';
import AddBuyerCard from './components/AddBuyerCard';
import SideMenu from './components/SideMenu';

const App = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const storedCards = localStorage.getItem('cards');

    if (storedCards) {
      setCards(JSON.parse(storedCards));
    }
  }, []);

  const saveToLocalStorage = (data) => {
    localStorage.setItem('cards', JSON.stringify(data));
  };

  const handleAddBuyer = (buyer, text, color) => {
    const newCard = {
      id: nanoid(),
      buyer: buyer,
      text: text,
      color: color,
    };

    setCards((prevCards) => [...prevCards, newCard]);
  };

  const handleDeleteBuyer = (id) => {
    const newCards = cards.filter((card) => card.id !== id);
    setCards(newCards);
  };

  const handleEditBuyerTask = (id, editedText) => {
    const updatedCards = cards.map((card) =>
      card.id === id ? { ...card, text: editedText } : card
    );
    setCards(updatedCards);
  };

  useEffect(() => {
    saveToLocalStorage(cards);
  }, [cards]);

  return (
    <div className='container'>
      <div className='grid-container'>
        <SideMenu />
        <div>
          <div className='add-card'>
            <AddBuyerCard handleAddBuyer={handleAddBuyer} />
          </div>
          <div className='existing-cards'>
            <BuyerWall
              cards={cards}
              handleDeleteBuyer={handleDeleteBuyer}
              handleEditBuyerTask={handleEditBuyerTask}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
