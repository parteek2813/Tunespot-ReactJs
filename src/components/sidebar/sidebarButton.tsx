import React from "react";
import "./sidebarButton.css";
import { Link, useLocation } from "react-router-dom";
import { IconContext } from "react-icons/lib/esm/iconContext";
import path from "path";

interface SidebarButtonProps {
  buttonTitle: string;
  to: string;
  icon: React.ReactNode;
}

const SidebarButton: React.FC<SidebarButtonProps> = (props) => {
  const { buttonTitle, to, icon } = props;

  const location = useLocation();

  // True, if the pathname equals the "to" path given
  const isActive = location.pathname === to;

  // Making switch between active or not
  const btnClass = isActive ? "btn-body active" : "btn-body";

  return (
    <Link to={to}>
      <div className={btnClass}>
        <IconContext.Provider value={{ size: "24px", className: "btn-icon" }}>
          <p>{icon}</p>
          <p className="btn-title">{buttonTitle}</p>
        </IconContext.Provider>
      </div>
    </Link>
  );
};

export default SidebarButton;
