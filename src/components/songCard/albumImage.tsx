import React from "react";
import "./albumImage.css";

interface AlbumImageProps {
  url: string;
}

const AlbumImage: React.FC<AlbumImageProps> = (props) => {
  const { url } = props;
  console.log(url);
  return <div>AlbumImage</div>;
};

export default AlbumImage;
