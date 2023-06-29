import React from "react";
import "./widgetCard.css";
import { IconContext } from "react-icons";
import { FiChevronRight } from "react-icons/fi";
import WidgetEntry from "./widgetEntry";

interface WidgetCardProps {
  title: string;
  similar: Array<any> | any[];
  featured: Object | any[];
  Podcast: Object | any[];
}
const WidgetCard: React.FC<WidgetCardProps> = (props) => {
  const { title, similar, featured, Podcast } = props;

  const FeaturedArray = Object.entries(featured);
  const PodCastArray = Object.entries(Podcast);

  // Featured Constants
  const Fname = FeaturedArray[4]?.[1];
  const Flength = FeaturedArray[7]?.[0].length;
  const FImage = FeaturedArray[3]?.[1]?.[0]?.url;

  // New Release Constants
  const Pname = PodCastArray[0]?.[1]?.podcastUnionV2?.name;


  return (
    <div className="widgetcard-body">
      <p className="widget-title">{title}</p>

      {similar ? (
        similar.map((artist) => (
          <WidgetEntry
            title={artist?.name}
            subtitle={artist?.followers?.total + " Followers"}
            image={artist?.images[2]?.url}
          />
        ))
      ) : FeaturedArray ? (
        <WidgetEntry
          title={Fname}
          subtitle={Flength + " Songs"}
          image={FImage}
        />
      ) : PodCastArray ? (
        <WidgetEntry title={Pname} subtitle={""} image={""} />
      ) : null}

      <div className="widget-fade">
        <div className="fade-button">
          <IconContext.Provider value={{ size: "24px", color: "#c4d0e3" }}>
            <FiChevronRight />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default WidgetCard;
