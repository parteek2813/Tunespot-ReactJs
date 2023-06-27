import React from "react";
import "./controls.css";
import { IconContext } from "react-icons";
import { FaPause } from "react-icons/fa";
import { IoPlaySkipBack, IoPlaySkipForward, IoPlay } from "react-icons/io5";

interface ControlProps {
  isPlaying: boolean | any;
  setIsPlaying: boolean | any;
  handleNext: boolean | any;
  handlePrev: boolean | any;
  total: number;
}

const Controls: React.FC<ControlProps> = (props) => {
  const { isPlaying, setIsPlaying, handleNext, handlePrev, total } = props;
  // console.log(isPlaying); // true
  return (
    <>
      <IconContext.Provider value={{ size: "35px", color: "#000000" }}>
        <div className="controls-wrapper flex">
          <div className="action-btn flex" onClick={handlePrev}>
            <IoPlaySkipBack />
          </div>
          <div
            className={
              isPlaying ? "play-pause-btn flex active" : "play-pause-btn flex"
            }
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <FaPause /> : <IoPlay />}
          </div>
          <div className="action-btn flex" onClick={handleNext}>
            <IoPlaySkipForward />
          </div>
        </div>
      </IconContext.Provider>
      <p className="total"> Total Songs: {total} </p>
    </>
  );
};

export default Controls;
