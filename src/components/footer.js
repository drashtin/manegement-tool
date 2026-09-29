import React from "react";
import "../components/styles/footer.css";
import { Link } from "react-router-dom";
import logo from "./logo1.png";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <img src={logo} alt="Levi's Logo" className="footer-logo" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>

        <div className="footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="#">About Us</Link>
            </li>
            <li>
              <Link to="#">Gallery</Link>
            </li>
            <li>
              <Link to="#">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <ul>
            <li>
              <Link to="#">
                <i className="fab fa-facebook-f"></i>
                <BiLogoFacebookSquare /> Facebook
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="fab fa-instagram"></i> <FaInstagramSquare />{" "}
                Instagram
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="fab fa-linkedin-in"></i> <FaLinkedin /> LinkedIn
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-address">
          <h4>Address</h4>
          <p>Amby Valley Heights,Mota Varachha, Surat.</p>
          <p>394105</p>
          <p>
            <i className="fas fa-phone"></i> +91 90904500112
          </p>
          <p>
            <i className="fas fa-envelope"></i> management@tool.com
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Management Tool © 2024 Powered By Our Team</p>
      </div>
    </footer>
  );
};

export default Footer;