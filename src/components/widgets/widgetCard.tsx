import React from "react";
import "./widgetCard.css";
import { IconContext } from "react-icons";
import { FiChevronRight } from "react-icons/fi";

interface WidgetCardProps {
  title: string;
  similar: Array<any> | any[];
  featured: Object | any[];
  newRelease: Object | any[];
}
const WidgetCard: React.FC<WidgetCardProps> = (props) => {
  const { title, similar, featured, newRelease } = props;

  const FeaturedArray = Object.entries(featured);
  const NewReleaseArray = Object.entries(newRelease);

  const Fname = FeaturedArray[4]?.[1];
  const Flength = FeaturedArray[7]?.[0].length;
  const FImage = FeaturedArray[3]?.[1]?.[0]?.url;

  //   console.log(NewReleaseArray);
  //   console.log(Fname);
  //   console.log(Flength);
  //   console.log(FImage);
  //   console.log(
  //     "Similar:",
  //     similar,
  //     "Featured:",
  //     featured,
  //     "NewRelease:",
  //     newRelease
  //   );

  return (
    <div className="widgetcard-body">
      <p className="widget-title">{title}</p>

      {/* {similar ? (
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
      ) : newRelease ? (
        newRelease.map((album) => (
          <WidgetEntry
            title={album?.name}
            subtitle={album?.artists[0]?.name}
            image={album?.images[2]?.url}
          />
        ))
      ) : null} */}

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
