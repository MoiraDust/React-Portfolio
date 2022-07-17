import React, { useState } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollerService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOfSetStyle, setCarousalOfSetStyle] = useState({});

  //   Resuable component
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + " - " + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
        {/* <div className="resume-heading-link">
            <span>{props.link ? props.link : ""}</span>
          </div> */}
      </div>
    );
  };
  // constant data
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Latest Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillDetails = [
    { skill: "React", ratingPercentage: 70 },
    { skill: "SQL", ratingPercentage: 70 },
    { skill: "JavaScript", ratingPercentage: 65 },
    { skill: "Mongo DB", ratingPercentage: 65 },
    { skill: "Java", ratingPercentage: 60 },
    { skill: "Node JS", ratingPercentage: 60 },
    { skill: "Express JS", ratingPercentage: 60 },
    { skill: "HTML & CSS", ratingPercentage: 60 },
    // { skill: "CSS", ratingPercentage: 60 },
  ];

  const projectDetails = [
    {
      title: "Personal Portfolio",
      duration: { fromDate: "Jul 2022", toDate: "Jul 2022" },
      description: "A Personal portfolio to show all of my details",
      subHeading: "Main technologies used: React",
      link: "",
    },
    {
      title: "E-commercial website",
      duration: { fromDate: "Apr 2022", toDate: "Apr 2022" },
      description: "A demo about the simple commercial website",
      subHeading: "Main technologies used: PHP, SQL, Laravel",
      link: "",
    },
    {
      title: "Restful API for Medicine industry",
      duration: { fromDate: "Mar 2022", toDate: "Mar 2022" },
      description:
        "A resuful API to add, delete, alter and query the data for medicine industry",
      subHeading: "Main technologies used: Django, SQL",
      link: "",
    },
    // {
    //   title: "Todo List",
    //   duration: { fromDate: "Jan 2022", toDate: "Jan 2022" },
    //   description: "A tool to manage the whole day's tasks",
    //   subHeading: "Main technologies used: React",
    //   link: "",
    // },
    // {
    //   title: "Shopping Site",
    //   duration: { fromDate: "Nov 2021", toDate: "Dec 2021" },
    //   description: "A simple shopping site",
    //   subHeading:
    //     "Main technologies used: Mongo DB, Express JS, React, Node JS",
    //   link: "",
    // },
    // {
    //   title: "Capstone: Screen System",
    //   duration: { fromDate: "Sep 2022", toDate: "Nov 2022" },
    //   description: "An online test system which can rank the players",
    //   subHeading:
    //     "Main technologies used: Mongo DB, Express JS, React, Node JS",
    //   link: "",
    // },
    // {
    //   title: "Smart Education",
    //   duration: { fromDate: "Nov 2021", toDate: "Nov 2021" },
    //   description:
    //     "A system that enables attendance recording by face recognition",
    //   subHeading:
    //     "Main technologies used: React, Spring Boot, MySQL, face-api.js, BaiDu Face API, JAVA",
    // },
  ];

  const resumeDetails = [
    // EDUCATION
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"University of Sydney, Sydney Australia"}
        subHeading={
          "Master of Information Technology & Information Technology Management"
        }
        fromDate={"Feb 2020"}
        toDate={"Dec 2021"}
      />
      <ResumeHeading
        heading={"Nanchang Institute of Science & Technology, Nanchang China"}
        subHeading={"Bachelor of Networking Engineering"}
        fromDate={"Feb 2017"}
        toDate={"Jun 2019"}
      />
    </div>,

    // WORKING EXPERIENCE
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"None"}
          subHeading={"None"}
          fromDate={"None"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Currently I do not have any real industry experience.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">- none</span>
          <br />
          <span className="resume-description-text">- none</span>
          <br />
          <span className="resume-description-text">- none</span>
          <br />
        </div>
      </div>
    </div>,

    // PROGRAMMING SKILLS
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillDetails.map((skill, i) => (
        <div className="skill-parent" key={i}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    // Projects
    <div className="resume-screen-container" key="projects">
      {projectDetails.map((projectDetails, i) => (
        <ResumeHeading
          key={i}
          heading={projectDetails.title}
          subHeading={projectDetails.subHeading}
          description={projectDetails.description}
          fromDate={projectDetails.duration.fromDate}
          toDate={projectDetails.duration.toDate}
          //   link={projectDetails.link}
        />
      ))}
    </div>,

    // Interests
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Music"
        subHeading="I like listening to the music especially the classical music"
      />
      <ResumeHeading
        heading="Vedio Game"
        subHeading="When I have free time I like to play games to pass the time"
      />
      <ResumeHeading
        heading="Movie"
        subHeading="I also like to watch films to increase my knowledge"
      />
    </div>,
  ];

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen != props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollerService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const handelCarousal = (index) => {
    let offsetHeight = 360;
    let newCarousalOffst = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };
    setCarousalOfSetStyle(newCarousalOffst);
    setSelectedBulletIndex(index);
  };
  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handelCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="no connection"
          className="bullet-logo"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };
  const getResumeScreen = () => {
    return (
      <div style={carousalOfSetStyle.style} className="resume-details-carousal">
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };
  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  );
}
