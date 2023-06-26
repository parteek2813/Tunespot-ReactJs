import React from "react";
import "./progressCircle.css";

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
      </svg>
    </div>
  );
};

export default ProgressCircle;
