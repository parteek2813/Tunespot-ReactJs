import React from "react";
import "./progressCircle.css";
import image from "../../utils/music-image.jpg";

interface ProgressProps {
  percentage: number;
  isPlaying: boolean;
  size: number;
  color: string;
}

interface CircleProps {
  strokeWidth: string;
  color: string;
  size: number;
  percentage: number;
}

type UnionProps = ProgressProps & CircleProps;

const Circle: React.FC<UnionProps> = (props) => {
  const { percentage, isPlaying, size, color, strokeWidth } = props;
  const radius = size / 2 - 10;
  const circ = 2 * Math.PI * radius - 20;
  const strokePct = ((100 - Math.round(percentage)) * circ) / 100;

  return (
    <circle
      r={radius}
      cx="50%"
      cy="50%"
      fill="transparent"
      stroke={strokePct !== circ ? color : ""}
      strokeWidth={strokeWidth}
      strokeDasharray={circ}
      strokeDashoffset={percentage ? strokePct : 0}
      strokeLinecap="round"
    ></circle>
  );
};

const ProgressCircle: React.FC<UnionProps> = (props) => {
  const { percentage, isPlaying, size, color } = props;
  return (
    <div className="progress-circle">
      <svg width={size} height={size}>
        <g>
          <Circle
            strokeWidth={"0.4rem"}
            color="#3B4F73"
            size={size}
            percentage={0}
            isPlaying={false}
          />
          <Circle
            strokeWidth={"0.6rem"}
            color={color}
            percentage={percentage}
            size={size}
            isPlaying={false}
          />
        </g>
        <defs>
          <clipPath id="myCircle">
            <circle cx="50%" cy="50%" r={size / 2 - 30} fill="#FFFFFF" />
          </clipPath>
          <clipPath id="myInnerCircle">
            <circle cx="50%" cy="50%" r={size / 2 - 100} fill="#FFFFFF" />
          </clipPath>
        </defs>
        <image
          className={isPlaying ? "active" : ""}
          x={30}
          y={30}
          width={2 * (size / 2 - 30)}
          height={2 * (size / 2 - 30)}
          href="https://pngimg.com/uploads/vinyl/vinyl_PNG107.png"
          clipPath="url(#myCircle)"
        />
        <image
          className={isPlaying ? "active" : ""}
          x={100}
          y={100}
          width={2 * (size / 2 - 100)}
          height={2 * (size / 2 - 100)}
          href={image}
          clipPath="url(#myInnerCircle)"
        />
      </svg>
    </div>
  );
};

export default ProgressCircle;
