import React from "react";
import "./widgetEntry.css";

interface WidgetEntryProps {
  title: string | any;
  subtitle: string | any;
  image: string | any;
}
const WidgetEntry: React.FC<WidgetEntryProps> = (props) => {
  const { title, subtitle, image } = props;
  return (
    <div className="entry-body flex">
      <img src={image} alt={title} className="entry-image" />
      <div className="entry-right-body flex">
        <p className="entry-title">{title}</p>
        <p className="entry-subtitle">{subtitle}</p>
      </div>
    </div>
  );
};

export default WidgetEntry;
