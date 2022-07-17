import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollerService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";

export default function Projects(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen != props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollerService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  // implement carousel
  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    autoplayTimeout: 1500,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div>
      <ScreenHeading
        title={"Projects"}
        subHeading={"What projects I have done in a year"}
      />
      <section className="projects-section" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="projects-carousel"
              {...options}
            >
              {/* project 1 : Personal Portfolio*/}
              <div className="col-lg-12">
                <div className="project-item">
                  <div className="project-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      A Personal portfolio to show all of my details
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="project-info">
                    <img src="img/Projects/lady.png" alt="no connection" />
                    <a href="#">
                      <h5>Personal Portfolio</h5>
                    </a>
                    <p>Duration: Jul 2022 - Jul 2022</p>
                    <p>Main Technologies: React</p>
                  </div>
                </div>
              </div>
              {/* project 2 : E-commercial website*/}
              <div className="col-lg-12">
                <div className="project-item">
                  <div className="project-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      A demo about the simple commercial website
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="project-info">
                    <img src="img/Projects/lady.png" alt="no connection" />
                    <a href="#">
                      <h5>E-commercial website</h5>
                    </a>
                    <p>Duration: Apr 2022 - Apr 2022</p>
                    <p>Main Technologies: PHP, SQL, Laravel</p>
                  </div>
                </div>
              </div>
              {/* Project 3 : Restful API for Medicine industry*/}
              <div className="col-lg-12">
                <div className="project-item">
                  <div className="project-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      A resuful API to add, delete, alter and query the data for
                      medicine industry
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="project-info">
                    <img src="img/Projects/lady.png" alt="no connection" />
                    <a href="">
                      <h5>Restful API for Medicine industry</h5>
                    </a>
                    <p>Duration: Mar 2022 - Mar 2022</p>
                    <p>Main Technologies: Django, SQL</p>
                  </div>
                </div>
              </div>
              {/* Project 4 :  Todo List*/}
              <div className="col-lg-12">
                <div className="project-item">
                  <div className="project-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      A tool to manage the whole day's tasks
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="project-info">
                    <img src="img/Projects/lady.png" alt="no connection" />
                    <a href="">
                      <h5>Todo List</h5>
                    </a>
                    <p>Duration: Jan 2022 - Jan 2022</p>
                    <p>Main Technologies: React</p>
                  </div>
                </div>
              </div>
              {/* Project 5 :  Shopping Site*/}
              <div className="col-lg-12">
                <div className="project-item">
                  <div className="project-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      A simple shopping site
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="project-info">
                    <img src="img/Projects/lady.png" alt="no connection" />
                    <a href="">
                      <h5>Shopping Site</h5>
                    </a>
                    <p>Duration: Nov 2021 - Dec 2021</p>
                    <p>
                      Main Technologies: Mongo DB, Express JS, React, Node JS
                    </p>
                  </div>
                </div>
              </div>
              {/* Project 6 :  Capstone: Screen System*/}
              <div className="col-lg-12">
                <div className="project-item">
                  <div className="project-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      An online test system which can rank the players
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="project-info">
                    <img src="img/Projects/lady.png" alt="no connection" />
                    <a href="">
                      <h5>Capstone: Screen System</h5>
                    </a>
                    <p>Duration: Sep 2021 - Nov 2021</p>
                    <p>
                      Main Technologies: Mongo DB, Express JS, React, Node JS
                    </p>
                  </div>
                </div>
              </div>
              {/* Project 7 :  Smart Education*/}
              <div className="col-lg-12">
                <div className="project-item">
                  <div className="project-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      A system that enables attendance recording by face
                      recognition
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="project-info">
                    <img src="img/Projects/lady.png" alt="no connection" />
                    <a href="">
                      <h5>Smart Education</h5>
                    </a>
                    <p>Duration: Nov 2021 - Nov 2021</p>
                    <p>
                      Main Technologies: React, Spring Boot, MySQL, face-api.js,
                      BaiDu Face API, JAVA
                    </p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
    </div>
  );
}
