import React from "react";
import "./albumInfo.css";

interface AlbumInfoProps {
  album: Object;
}
const AlbumInfo: React.FC<AlbumInfoProps> = (props) => {
  const { album } = props;
  console.log(album);
  return <div>AlbumInfo</div>;
};

export default AlbumInfo;
