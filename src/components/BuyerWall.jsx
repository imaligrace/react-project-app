// BuyerWall.jsx
import React from 'react';
import BuyerCard from './BuyerCard';

const BuyerWall = ({ cards, handleDeleteBuyer, handleEditBuyerTask }) => {
  return (
    <div className='buyers-wall'>
      {cards.map((card) => (
        <BuyerCard
          key={card.id}
          id={card.id}
          buyer={card.buyer}
          text={card.text}
          color={card.color}
          handleDeleteBuyer={handleDeleteBuyer}
          handleEditBuyerTask={handleEditBuyerTask}
        />
      ))}
    </div>
  );
};

export default BuyerWall;
