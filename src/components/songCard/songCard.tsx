import React from "react";
import "./songCard.css";
import AlbumImage from "./albumImage";
import AlbumInfo from "./albumInfo";
import { Url } from "url";

interface Album {
  images?: {
    url: string;
  };
}

interface SongCardProps {
  album: Album;
}

const SongCard: React.FC<SongCardProps> = (props) => {
  const { album } = props;

  return (
    <div className="songCard-body">
      {album.images?.url && <AlbumImage url={album.images?.url} />}
      <AlbumInfo album={album} />
    </div>
  );
};

export default SongCard;
