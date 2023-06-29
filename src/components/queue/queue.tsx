import React from "react";
import "./queue.css";
import { Tracks } from "../../utils/types";

interface QueueProps {
  tracks: Tracks[];
  setCurrentIndex: any;
}

const Queue: React.FC<QueueProps> = (props) => {
  const { tracks, setCurrentIndex } = props;

  if (!Array.isArray(tracks)) {
    return <div>Error: Invalid tracks data</div>;
  }

  return (
    <div className="queue-container flex">
      <div className="queue flex">
        <p className="upNext">Up Next</p>
        <div className="queue-list">
          {tracks.map((track, index) => (
            <div
              className="queue-item flex"
              onClick={() => setCurrentIndex(index)}
            >
              <p className="track-name">{track.name}</p>
              <p>0:30</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Queue;
