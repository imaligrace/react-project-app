import React, { useState } from 'react';
import deleteIcon from '../assets/delete.png';
import editIcon from '../assets/edit.png';

const BuyerCard = ({
  id,
  buyer,
  text,
  color,
  handleDeleteBuyer,
  handleEditBuyerTask,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const handleDeleteClick = () => {
    handleDeleteBuyer(id);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    handleEditBuyerTask(id, editedText);
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEditedText(text);
  };

  return (
    <div className='card' style={{ backgroundColor: color }}>
      {isEditing ? (
        <>
          <textarea
            className='tasks'
            rows='7'
            cols='10'
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          ></textarea>
          <div className='card-icons'>
            <button className='save' onClick={handleSaveClick}>
              Save
            </button>
            <button className='cancel' onClick={handleCancelClick}>
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <div style={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
            {buyer}
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: text.replace(/\n/g, '<br/>') }}
          />
          <div className='card-icons'>
            <img
              src={editIcon}
              alt='Edit'
              className='edit-icon'
              onClick={handleEditClick}
            />
            <img
              src={deleteIcon}
              alt='Delete'
              className='delete-icon'
              onClick={handleDeleteClick}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default BuyerCard;
