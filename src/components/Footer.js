import React from "react";
import "./Footer.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaFileDownload } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="icons">
          <div className="c">
            <a href="https://github.com/">
              <AiFillGithub className="sI1" />
            </a>
          </div>
          <div className="c">
            <a href="https://www.linkedin.com/feed/">
              <AiFillLinkedin className="sI2" />
            </a>
          </div>

          <div className="c">
            <a href="">
              <FaFileDownload className="sI3" />
            </a>
          </div>
          <div className="c">
            <a href="tel:9133392000">
              <FiPhoneCall className="sI4" />
            </a>
          </div>
          <div className="c">
            <a href="">
              <MdEmail className="sI5" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
