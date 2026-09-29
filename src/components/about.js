import React from "react";
import "./styles/about.css";
import img from "../components/img.jpg";
import { Link } from "react-router-dom";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import Footer from './footer'

const teamMembers = [
  {
    name: "Drashtin Navadiya",
    role: "React JS Developer",
    image: img,
    socials: {
      facebook: "https://www.facebook.com/login.php/",
      twitter: "https://x.com/",
      instagram: "https://www.instagram.com/accounts/login/?hl=en",
      linkedin: "https://www.linkedin.com/login",
    },
  },
  {
    name: "Piyush Pethani",
    role: "React JS Developer",
    image: img,
    socials: {
      facebook: "https://www.facebook.com/login.php/",
      twitter: "https://x.com/",
      instagram: "https://www.instagram.com/accounts/login/?hl=en",
      linkedin: "https://www.linkedin.com/login",
    },
  },
  {
    name: "Chintan Gabani",
    role: "React JS Developer",
    image: img,
    socials: {
      facebook: "https://www.facebook.com/login.php/",
      twitter: "https://x.com/",
      instagram: "https://www.instagram.com/accounts/login/?hl=en",
      linkedin: "https://www.linkedin.com/login",
    },
  },
  {
    name: "Keshav K",
    role: "React JS Developer",
    image: img,
    socials: {
      facebook: "https://www.facebook.com/login.php/",
      twitter: "https://x.com/",
      instagram: "https://www.instagram.com/accounts/login/?hl=en",
      linkedin: "https://www.linkedin.com/login",
    },
  },
  {
    name: "Aditya Goswami",
    role: "React JS Developer",
    image: img,
    socials: {
      facebook: "https://www.facebook.com/login.php/",
      twitter: "https://x.com/",
      instagram: "https://www.instagram.com/accounts/login/?hl=en",
      linkedin: "https://www.linkedin.com/login",
    },
  },
  {
    name: "Lindsay Watson",
    role: "React JS Developer",
    image: img,
    socials: {
      facebook: "https://www.facebook.com/login.php/",
      twitter: "https://x.com/",
      instagram: "https://www.instagram.com/accounts/login/?hl=en",
      linkedin: "https://www.linkedin.com/login",
    },
  },
];

const SocialIcons = ({ socials }) => (
  <div className="social-icons">
    <Link to={socials.facebook}>
      <BiLogoFacebookSquare />
    </Link>
    <Link to={socials.twitter}>
      <FaSquareXTwitter />
    </Link>
    <Link to={socials.instagram}>
      <FaInstagramSquare />
    </Link>
    <Link to={socials.linkedin}>
      <FaLinkedin />
    </Link>
  </div>
);

const Member = ({ member }) => (
  <div className="member">
    <div
      className="member-image"
      style={{ backgroundImage: `url(${member.image})` }}
    ></div>
    <h3>{member.name}</h3>
    <h4>{member.role}</h4>
    <p>
      React developers often praise the framework for its ease of learning and
      use. Many developers have shared their positive experiences with React,
      citing its simplicity and flexibility as major advantages.
    </p>
    <SocialIcons socials={member.socials} />
  </div>
);

const Team = () => (
  <section className="team-section">
    <h2 className="header-title">Meet The Our Employee</h2>
    <div className="team-grid">
      {teamMembers.map((member) => (
        <Member key={member.name} member={member} />
      ))}
    </div>
  </section>
);

const About = () => (
  <div className="App">
    <Team />
    <Footer/>
  </div>
);

export default About;
