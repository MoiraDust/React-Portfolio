import React, { useState } from "react";
import Typical from "react-typical";
import imgBack from "../../../src/images/mail.jpeg";
import load1 from "../../../src/images/load2.gif";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollerService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./ContactMe.css";

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen != props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollerService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const handelName = (e) => {
    setName(e.target.value);
  };
  const handelEmail = (e) => {
    setEmail(e.target.value);
  };
  const handelMessage = (e) => {
    setMessage(e.target.value);
  };
  //   console.log(name);
  //   console.log(email);
  //   console.log(message);

  return (
    <div className="main-container" id={props.id || ""}>
      <ScreenHeading subHeading={"Lets keep in touch"} title={"Contact Me"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            <Typical loop={Infinity} steps={["Cet In Touch 📨", 1000]} />
          </h2>
          <a href="#">
            <i className="fa fa-facebook-square"></i>
          </a>
          <a href="#">
            <i className="fa fa-linkedin-square"></i>
          </a>
          <a href="#">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fa fa-youtube-square"></i>
          </a>
          <a href="#">
            <i className="fa fa-github-square"></i>
          </a>
        </div>
        <div className="back-form">
          <div className="img-back">
            <h4>Send Your Email Here</h4>
            <img src={imgBack} alt="image not found" />
          </div>
          <form action="">
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input type="text" onChange={handelName} value={name} />

            <label htmlFor="email">Email</label>
            <input type="email" onChange={handelEmail} value={email} />

            <label htmlFor="message">Message</label>
            <textarea type="text" onChange={handelMessage} value={message} />

            <div className="send-btn">
              <button type="submit">
                SEND <i className="fa fa-paper-plane"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
