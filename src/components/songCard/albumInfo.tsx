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

  console.log(album.name); // getting the artists array here

  return <div>AlbumInfo</div>;
};

export default AlbumInfo;
