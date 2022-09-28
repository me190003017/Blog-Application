import React from "react";
import Logo from "../img/logo.png";

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="" />
      <span>
        Made with ♥️ and <b>React.js</b> and By <b>Bhupendra Singh</b>.
      </span>
    </footer>
  );
};

export default Footer;