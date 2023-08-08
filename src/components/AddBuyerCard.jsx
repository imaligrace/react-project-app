import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import addIcon from '../assets/add.png';

function AddBuyerCard({ handleAddBuyer }) {
  const colors = ['#e8dff5', '#fce1e4', ' #fcf4dd', '#ddedea', '#daeaf6'];

  const [listOpen, setListOpen] = useState(false);
  const [buyer, setBuyer] = useState('');
  const [text, setText] = useState('');
  const [selectedColor, setSelectedColor] = useState(null);

  const handleAddCard = () => {
    if (buyer.trim() !== '' && text.trim() !== '' && selectedColor !== null) {
      handleAddBuyer(buyer, text, selectedColor);
      setBuyer('');
      setText('');
      setSelectedColor(null);
      setListOpen(false);
    }
  };

  return (
    <div className='add-card'>
      <img
        src={addIcon}
        alt='Add'
        onClick={() => setListOpen(!listOpen)}
        style={{ cursor: 'pointer' }}
        className='add-icon'
      />
      {listOpen && (
        <div className='card-entry'>
          <input
            type='text'
            value={buyer}
            onChange={(e) => setBuyer(e.target.value)}
            placeholder='Enter Buyer Name'
          />
          <textarea
            rows='5'
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='Enter Updates, Status, or Pending Task Description Here...'
          />
         
          <div className='color-options'>
            Select a Color:
            {colors.map((item, index) => (
              <div
                key={index}
                className={`color-option ${
                  selectedColor === item ? 'selected' : ''
                }`}
                style={{ backgroundColor: item }}
                onClick={() => setSelectedColor(item)}
              />
            ))}
          </div>

          <button className='add-button' onClick={handleAddCard}>
            Add Buyer Card
          </button>
        </div>
      )}
    </div>
  );
}

export default AddBuyerCard;
