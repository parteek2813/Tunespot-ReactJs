import React from "react";
import "./progressCircle.css";

interface ProgressProps {
  percentage: number;
  isPlaying: boolean;
  size: number;
  color: string;
}

const ProgressCircle: React.FC<ProgressProps> = (props) => {
  const { percentage, isPlaying, size, color } = props;
  return <div>ProgressCircle</div>;
};

export default ProgressCircle;
