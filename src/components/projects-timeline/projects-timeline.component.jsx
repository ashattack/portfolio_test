import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

// projects
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import L_BATTLENODES from "../../assets/img/projects/BATTLENODES.png";
import L_BURGER from "../../assets/img/projects/BURGER.png";
import L_NOTETAKER from "../../assets/img/projects/NOTETAKER.png";
import L_TEXTADVENTURE from "../../assets/img/projects/TEXTADVENTURE.png"
import L_WORKOUTTRACKER from "../../assets/img/projects/WORKOUTTRACKER.png"

// skills
import L_REACT from "../../assets/img/skills/react.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import L_MONGODB from "../../assets/img/skills/mongodb.svg";
import Image from "react-bootstrap/Image";
import L_DOCKER from "../../assets/img/skills/docker.svg";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
import L_GIT from "../../assets/img/skills/github-api.svg";
import L_MATERIALUI from "../../assets/img/skills/material-ui-1.svg";
import L_HEROKU from "../../assets/img/skills/heroku.svg";
import L_REACT_ROUTER from "../../assets/img/skills/react-router.svg";
import L_MYSQL from "../../assets/img/skills/MySQL.jpeg";
import L_PYTHON from "../../assets/img/skills/python.svg";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";

import "./projects-timeline.styles.css";

const TimeLine = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>
          {/* Project: ezlife */}
          <ImageEvent
            date="03/30/2021"
            className="text-center"
            text="battleNodes"
            src={L_BATTLENODES}
            alt="battleNodes"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Almost anyone can agree that getting your life organized can be a daunting task! There are so many things we are supposed to do and accomplish to be successful! Our app allows you to work towards your best self by tracking the things that matter to you, and making your life easier. Input your workouts, water intake, personal goals, and even write out your to-do list! And for some motivation, we provided you with some random quotes to boost your moral and get you going. The opportunities to become a better version of yourself are endless with ezlife.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Allows users to customize their very own personalized dashbaord</li>
                          <li>Utilizes express sessions and mongoose noSQL database to store the users custom data</li>
                          <li>Powered by React and Material UI</li>
                          <li>Respoisive Design</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <div class="row">
                          <div class="column">
                            <ul>
                              <li>
                                <span className="p-2">
                                  <Image
                                    src={L_HTML5}
                                    alt="HTML 5"
                                    rounded
                                    className="image-style m-1"
                                  ></Image>{" "}
                              HTML5
                            </span>
                              </li>
                              <li>
                                <span className="p-2">
                                  <Image
                                    src={L_CSS3}
                                    alt="CSS 3"
                                    rounded
                                    className="image-style m-1"
                                  ></Image>{" "}
                              CSS3
                            </span>
                              </li>
                              <li>
                                <span className="p-2">
                                  <Image
                                    src={L_REACT}
                                    alt="React"
                                    rounded
                                    className="image-style1 m-1"
                                  ></Image>{" "}
                              React
                            </span>
                              </li>
                              <li>
                                <span className="p-2">
                                  <Image
                                    src={L_MATERIALUI}
                                    alt="Material-UI"
                                    rounded
                                    className="image-style1 m-1"
                                  ></Image>{" "}
                              Material-UI
                            </span>
                              </li>

                            </ul>
                          </div>
                          <div class="column">
                            <ul>
                              <li>
                                <span className="p-2">
                                  <Image
                                    src={L_MONGODB}
                                    alt="MongoDB"
                                    rounded
                                    className="image-style m-1"
                                  ></Image>{" "}
                              MongoDB
                            </span>
                              </li>
                              <li>
                                <span className="p-2">
                                  <Image
                                    src={L_REACT_ROUTER}
                                    alt="React Router"
                                    rounded
                                    className="image-style m-1"
                                  ></Image>{" "}
                              React Router
                            </span>
                              </li>
                              <li>
                                <span className="p-2">
                                  <Image
                                    src={L_NODE_JS}
                                    alt="Node.js"
                                    rounded
                                    className="image-style m-1"
                                  ></Image>{" "}
                              Node.js
                            </span>
                              </li>
                              <li>
                                <span className="p-2">
                                  <Image
                                    src={L_EXPRESS}
                                    alt="Express"
                                    rounded
                                    className="image-style m-1"
                                  ></Image>{" "}
                              Express
                            </span>
                              </li>
                              <li>
                                <span className="p-2">
                                  <Image
                                    src={L_HEROKU}
                                    alt="Heroku"
                                    rounded
                                    className="image-style m-1"
                                  ></Image>{" "}
                              Heroku
                            </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://protected-beach-35913.herokuapp.com/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/ashattack/whos-your-data"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: MERN App */}
          <ImageEvent
            date="02/20/2021"
            className="text-center"
            text="Burger Logger"
            src={L_BURGER}
            alt="Burger Logger"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is a CRUD App created with React and Material UI that allows users to post games with images and descriptions that are all kept in the database.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Allows users to post games and leave likes on different post</li>
                          <li>Powered by React and Material UI</li>
                          <li>Respoisive Design</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <div class="row">
                          <div class="column">
                            <ul>
                              <li>
                                <span className="p-2">
                                  <Image
                                    src={L_HTML5}
                                    alt="HTML 5"
                                    rounded
                                    className="image-style m-1"
                                  ></Image>{" "}
                              HTML5
                            </span>
                              </li>
                              <li>
                                <span className="p-2">
                                  <Image
                                    src={L_CSS3}
                                    alt="CSS 3"
                                    rounded
                                    className="image-style m-1"
                                  ></Image>{" "}
                              CSS3
                            </span>
                              </li>
                              <li>
                                <span className="p-2">
                                  <Image
                                    src={L_REACT}
                                    alt="React"
                                    rounded
                                    className="image-style1 m-1"
                                  ></Image>{" "}
                              React
                            </span>
                              </li>
                              <li>
                                <span className="p-2">
                                  <Image
                                    src={L_MATERIALUI}
                                    alt="Material-UI"
                                    rounded
                                    className="image-style1 m-1"
                                  ></Image>{" "}
                              Material-UI
                            </span>
                              </li>

                            </ul>
                          </div>
                          <div class="column">
                            <ul>
                              <li>
                                <span className="p-2">
                                  <Image
                                    src={L_MONGODB}
                                    alt="MongoDB"
                                    rounded
                                    className="image-style m-1"
                                  ></Image>{" "}
                              MongoDB
                            </span>
                              </li>
                              <li>
                                <span className="p-2">
                                  <Image
                                    src={L_REACT_ROUTER}
                                    alt="React Router"
                                    rounded
                                    className="image-style m-1"
                                  ></Image>{" "}
                              React Router
                            </span>
                              </li>
                              <li>
                                <span className="p-2">
                                  <Image
                                    src={L_NODE_JS}
                                    alt="Node.js"
                                    rounded
                                    className="image-style m-1"
                                  ></Image>{" "}
                              Node.js
                            </span>
                              </li>
                              <li>
                                <span className="p-2">
                                  <Image
                                    src={L_EXPRESS}
                                    alt="Express"
                                    rounded
                                    className="image-style m-1"
                                  ></Image>{" "}
                              Express
                            </span>
                              </li>
                              <li>
                                <span className="p-2">
                                  <Image
                                    src={L_REDUX}
                                    alt="Redux"
                                    rounded
                                    className="image-style m-1"
                                  ></Image>{" "}
                              Redux
                            </span>
                              </li>
                              <li>
                                <span className="p-2">
                                  <Image
                                    src={L_HEROKU}
                                    alt="Heroku"
                                    rounded
                                    className="image-style m-1"
                                  ></Image>{" "}
                              Heroku
                            </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://eat-da-burgel.herokuapp.com/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/ashattack/Eat-Da-Burger"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Employee Directory */}
          <ImageEvent
            date="02/24/2021"
            className="text-center"
            text="Note Taker"
            src={L_NOTETAKER}
            alt="NoteTaker"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div >
                <Accordion >
                  <Card  >
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong>
This web application pulls from a random user API to generate an employee directory with immediate filters based on user input, using react.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Utilizes javascript tools and react to generate searchable employee data</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="Node.js"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Node.js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://ancient-depths-17492.herokuapp.com/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/ashattack/Note_Taker"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>


          {/* Project: Oh My gift*/}
          <ImageEvent
            date="01/24/2021"
            className="text-center"
            text="Text Adventure Game"
            src={L_TEXTADVENTURE}
            alt="Text Adventure Game"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Oh My Gift is a "find a gift" application that assist Users to find the perfect gift for that special someone for that special something.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Enter different search parameters</li>
                          <li>API call to database with over 30,000 records imported via CSV</li>
                          <li>Styled with bootstrap and backend is built using handlebars</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="Node.js"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Node.js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_EXPRESS}
                                alt="Express"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Express
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP4}
                                alt="Bootstrap"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Bootstrap
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MYSQL}
                                alt="MySQL"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              MySQL
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href=" https://escape-dungeon.herokuapp.com/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/Escape-The-Dungeon/Escape-The-Dungeon"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Beach'In It */}
          <ImageEvent
            date="01/07/2021"
            className="text-center"
            text="Workout Tracker"
            src={L_WORKOUTTRACKER}
            alt="Workout Tracker"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This application is designed to simplify finding a relaxing beach anywhere in florida!
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Filtered search to return desired data on a specific area</li>
                          <li>Uses multiple APIs to return data such as whether, tide data, and nearby locations</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP4}
                                alt="Bootstrap"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Bootstrap
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVASCRIPT}
                                alt="JavaScript"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              JavaScript
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/ashattack/Workout-Tracker"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/ashattack/Workout-Tracker"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
        </Events>
      </Timeline>
    </div>
  );
};

export default TimeLine;