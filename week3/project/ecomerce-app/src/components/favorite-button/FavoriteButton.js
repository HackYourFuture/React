// FavoriteButton.js
import React from 'react';
import { useFavorites } from '../FavoriteContext';

function FavoriteButton({ productId }) {
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorited = favorites.includes(productId);

  return (
    <button onClick={() => toggleFavorite(productId)}>
      {isFavorited ? '❤️' : '🤍'}
    </button>
  );
}

export default FavoriteButton;
