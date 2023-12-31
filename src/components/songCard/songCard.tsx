import React from "react";
import "./songCard.css";
import AlbumImage from "./albumImage";
import AlbumInfo from "./albumInfo";
import { Url } from "url";

interface Album {
  name: string;
}


interface SongCardProps {
  album: Album | any;
  url: string;
}

const SongCard: React.FC<SongCardProps> = (props) => {
  const { album, url } = props;

  return (
    <div className="songCard-body flex">
      {url && <AlbumImage url={url} />}
      <AlbumInfo album={album} />
    </div>
  );
};

export default SongCard;
