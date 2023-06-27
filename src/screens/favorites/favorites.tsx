import React, { useEffect } from "react";
import "./favorites.css";

interface FavoriteProps {
  favorites: Array<any>;
}

const Favorites: React.FC<FavoriteProps> = (props) => {
  const { favorites } = props;

  useEffect(() => {}, [favorites]);

  return (
    <div className="favorites-container">
      <h2 className="favorites-heading">Your Favorite Songs</h2>

      {favorites.length === 0 ? (
        <p className="favorites-message">
          No favorite songs yet. {favorites.length}
        </p>
      ) : (
        <ul className="favorites-list">
          {favorites.map((album) => (
            <li key={album?.data?.uri} className="favorite-item">
              <img
                src={album?.data?.coverArt?.sources?.url}
                alt="album-cover"
                className="favorite-image"
              />
              <div className="favorite-details">
                <p className="favorite-title">{album?.data?.name}</p>
                <p className="favorite-subtitle">
                  Released: {album?.data?.date?.year}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorites;
