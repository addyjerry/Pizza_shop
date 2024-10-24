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
        <FaSquareXTwitter />
        <FaInstagram />
        <FaFacebook />
        <FaSquareSnapchat />
      </div>
      <p>
        <FaRegCopyright /> Copyright Danny's Pizza
      </p>
    </div>
  );
};

export default Footer;
