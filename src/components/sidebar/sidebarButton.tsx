import React from "react";
import "./sidebarButton.css";
import { Link } from "react-router-dom";
import { title } from "process";

interface SidebarButtonProps {
  buttonTitle: string;
  to: string;
  icon: React.ReactNode;
}

const SidebarButton: React.FC<SidebarButtonProps> = (props) => {
  const { buttonTitle, to, icon } = props;

  return (
    <Link to={to}>
      <div className="btn-body">
        <p>{icon}</p>
        <p className="btn-title">{buttonTitle}</p>
      </div>
    </Link>
  );
};

export default SidebarButton;
