import React from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareSnapchat } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";
const Footer = () => {
  return (
    <div id="footer">
      <p>Follow us :</p>
      <div className="socials">
        <a href="https://x.com/JayCodes27?t=k513f8YOjzAOnOifSdw3mA&s=09">
          {" "}
          <FaSquareXTwitter />
        </a>
        <a href="https://www.instagram.com/kenkeyvylla/?hl=en">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com/jay-jnr.395">
          {" "}
          <FaFacebook />
        </a>
        <FaSquareSnapchat />
      </div>
      <p>
        <FaRegCopyright /> Copyright Danny's Pizza
      </p>
    </div>
  );
};

export default Footer;
