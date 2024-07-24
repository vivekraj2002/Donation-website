import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBitcoin, FaLinkedin, FaPaypal, FaYoutube } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <nav className={show ? "navbar show_navbar" : "navbar"}>
        <div className="logo">
          <img src="/logo2.png" alt="logo" />
        </div>
        <div className="links">
          <ul>
            <li>
              <Link to={"/"}>HOME</Link>
            </li>
            <li>
              <Link to={"/donate"}>DONATE US</Link>
            </li>
            <li>
              <Link to={"/about"}>ABOUT</Link>
            </li>
            <li>
              <Link to={"/contact"}>CONTACT</Link>
            </li>
          </ul>
          <ul>
            <li>
            <Link to="https://www.linkedin.com/company/keenable/mycompany/" target="_blank" rel="noopener noreferrer">
              
              <FaLinkedin/>
              </Link >
            </li>
            <li>
              <FaYoutube />
            </li>
            <li>
            <Link to="https://github.com/vivekraj2002" target="_blank" rel="noopener noreferrer">
              <FaGithubSquare />
              </Link>
            </li>
            <li>
            <Link to="https://www.instagram.com/_vivek_raj4005/" target="_blank" rel="noopener noreferrer">
              <BsInstagram />
              </Link>
            </li>
            
          </ul>
        </div>
        <GiHamburgerMenu className="hamburger" onClick={() => setShow(!show)} />
      </nav>
    </>
  );
};

export default Navbar;
