import React from "react";
import "./albumImage.css";

interface AlbumImageProps {
  url: string;
}

const AlbumImage: React.FC<AlbumImageProps> = (props) => {
  const { url } = props;

  return (
    <div className="albumImage flex">
      <img src={url} alt="album art" className="albumImage-art" />
      <div className="albumImage-shadow">
        <img src={url} alt="shadow art" className="albumImage-shadow" />
      </div>
    </div>
  );
};

export default AlbumImage;
