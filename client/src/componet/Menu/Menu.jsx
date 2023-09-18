import React from "react";
import "./Menu.css";
import {
  FcHome,
  FcAbout,
  FcReadingEbook,
  FcBiotech,
  FcVideoProjector,
  FcBusinessContact,
} from "react-icons/fc";
import photo from "../../assets/images/My profile.jpeg";
import * as Scroll from 'react-scroll';

import { Link } from "react-scroll";

const Menu = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <div className="navbar-profile-pic ">
            <img
              // src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
              src={photo}
              alt="profile pic"
            />
          </div>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="Home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcHome></FcHome>Home
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                {" "}
                <Link
                  to="About"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                <FcAbout />
                About
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                {" "}
                <Link
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                <FcReadingEbook />
                Education
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                {" "}
                <Link
                  to="techstack"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                <FcBiotech />
                TechStack
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                {" "}
                <Link
                  to="project"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >

                <FcVideoProjector />
                Project
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                {" "}
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >

                <FcBusinessContact />
                Contact
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
              <Link
                  to="Home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                <FcHome title="Home" />
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                {" "}
                <Link
                  to="About"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                <FcAbout title="About" />
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                {" "}
                <Link
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                <FcReadingEbook title="Education" />
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                {" "}
                <Link
                  to="techstack"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                <FcBiotech title="TechStack" />
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                {" "}
                <Link
                  to="project"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                <FcVideoProjector title="Project" />
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                {" "}
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                <FcBusinessContact title="Contact" />
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menu;
