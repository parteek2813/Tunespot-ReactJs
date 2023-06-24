import React from "react";
import "./queue.css";

interface Track {
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

type MyArray = Track[];

interface QueueProps {
  tracks: MyArray | any;
  setCurrentIndex: any;
}

const Queue: React.FC<QueueProps> = (props) => {
  const { tracks, setCurrentIndex } = props;
  console.log(tracks);

  if (!Array.isArray(tracks)) {
    return <div>Error: Invalid tracks data</div>;
  }

  return (
    <div className="queue-container flex">
      <div className="queue flex">
        <p className="upNext">Up Next</p>
        <div className="queue-list">
          {tracks?.map((track: Track) => (
            <div className="queue-item flex" onClick={() => setCurrentIndex()}>
              <p className="track-name">{track?.name}</p>
              <p>0:30</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Queue;
