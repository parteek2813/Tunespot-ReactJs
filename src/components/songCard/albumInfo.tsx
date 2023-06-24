import React from "react";
import "./albumInfo.css";

interface Album {
  artists: Array<any>;
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_urls: {
    spotify: string;
  };
  id: string;
  is_local: boolean;
  is_playable: boolean;
  name: string;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
}

interface AlbumInfoProps {
  album: Album;
}

const AlbumInfo: React.FC<AlbumInfoProps> = (props) => {
  const { album } = props;

  console.log(album); // getting the artists array here

  return (
    <div>
      <div className="albumName-Container"></div>
      <div className="album-info"></div>
      <div className="album-realease"></div>
      <a href={album.uri} target="_blank" rel="noopener noreferrer">
        <button>Full Listen</button>
      </a>
    </div>
  );
};

export default AlbumInfo;
