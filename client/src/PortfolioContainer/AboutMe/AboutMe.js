import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollerService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen != props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollerService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  // create data
  const SCREEN_CONSTANTS = {
    description:
      "Hi, I am Moira and I want to find an ICT-related job. I am a master of IT & Master of ITM who graduated from the University of Sydney in December 2021, My specialization is software development, and I am interested in web application development. I am a frequent user of React.js, javascript, HTML, CSS, MongoDB etc. Apart from that, I've been learning new things like PHP, Wordpress, Python and Django. In addition to my project experience in the resume, I also put some of my little interesting projects in LinkedIn featured. If you are interested, you can check them out by browsing my LinkedIn.",
    highlights: {
      heading: "Here are few highlights",
      bullets: [
        "MREN stack Developer",
        "JavaScript Developer",
        "Building REST API",
        "Query SQL and non-SQL database",
      ],
    },
    learning: {
      heading: "Here are the skills I still learning and improving",
      skills: ["AWS", "Wordpress", "CSS", "etc"],
    },
  };
  // display data
  const renderHighlights = () => {};
  return (
    <div className="about-me-container screen-container" id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me"} />
      </div>
    </div>
  );
}
