import React, { useEffect } from "react";
import "./favorites.css";

interface FavoriteProps {
  favorites: Array<any> | any;
}

const Favorites: React.FC<FavoriteProps> = (props) => {
  const { favorites } = props;
  console.log(favorites);

  {
    favorites && console.log(favorites.favorites);
  }

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
          {favorites.favorites.map((album: any) => (
            <li key={album?.data?.uri} className="favorite-item">
              <img
                src={album?.data?.coverArt?.sources?.[0].url}
                alt="album-cover"
                className="favorite-image"
              />
              <div className="favorite-details">
                <p className="favorite-title">{album?.data?.name}</p>
                <p className="favorite-subtitle">
                  Released: {album?.data?.date?.year}
                </p>
              </div>
              <a
                href={album?.data?.uri}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn-gradient-2"> Listen!</button>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorites;
