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

  const artist: any[] = [];
  album?.artists?.forEach((element) => {
    artist.push(element.name);
  });


  return (
    <div className="albumInfo-card">
      <div className="albumName-Container">
        <div className="marquee">
          {album?.name + " - " + artist?.join(",")} - {album?.type}
        </div>
      </div>

      <div className="album-realease"></div>
      <div className="parent">
        <a href={album?.uri} target="_blank" rel="noopener noreferrer">
          <button className="btn-gradient-2">Full Listen!</button>
        </a>
      </div>
    </div>
  );
};

export default AlbumInfo;
