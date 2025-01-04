import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';

const CardList = () => {
  const navigate = useNavigate();
  const { filteredItems: cards, status, error } = useSelector((state) => state.cards);

  if (status === 'loading') {
    return (
      <div className="loading-spinner">
        <div className="loading-dot dot-1"></div>
        <div className="loading-dot dot-2"></div>
        <div className="loading-dot dot-3"></div>
      </div>
    );
  }

  if (status === 'failed') {
    return (
      <div className="error-message">
        <p>⚠️ {error}</p>
      </div>
    );
  }

  if (cards.length === 0) {
    return (
      <>
        <SearchBar />
        <div className="empty-state">
          <p>✨ Select a set to view cards or try a different search term</p>
        </div>
      </>
    );
  }

  const handleCardClick = (cardId) => {
    navigate(`/cards/${cardId}`);
  };

  return (
    <>
      <SearchBar />
      <div className="card-grid">
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => handleCardClick(card.id)}
            className="card-container"
          >
            <img
              src={card.images[0].small}
              alt={card.name}
              className="card-image"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default CardList; 