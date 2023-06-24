import React from "react";
import "./albumImage.css";

interface AlbumImageProps {
  url: string;
}

const AlbumImage: React.FC<AlbumImageProps> = (props) => {
  const { url } = props;

  return (
    <div>
      <img src={url} alt="" />
    </div>
  );
};

export default AlbumImage;
