import React from "react";
import "../components/styles/header.css";

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="header__logo">
          <h1 className="header__title">Management Tool</h1>
        </div>
        <nav>
          <ul className="nav-links">
            <Link className="nav__item" to="/">
              Home Page
            </Link>
            <Link className="nav__item" to="/EmployeeHandlerForm">
              Create New Record
            </Link>
            <Link className="nav__item" to="/CreateEmployee">
              Create Employee
            </Link>
            <Link className="nav__item" to="/PayrollTable">
              Record List
            </Link>
            <Link className="nav__item" to="/About">
              About
            </Link>
          </ul>
        </nav>
        <div className="btn-group">
          <button className="btn">LOG OUT</button>
        </div>
      </header>
    </>
  );
}





// import React from 'react';
// import './App.css';

// function Home() {
//   return (
//     <div className="container">
//       <nav className="navbar">
//         <div className="logo">Logo</div>
//         <div className="menu">
//           <a href="/">Create New Record</a>
//           <a href="/">Record List</a>
//           <a href="/">Create Company</a>
//           <a href="/">Create Employee</a>
//           <a href="/">Logout</a>
//         </div>
//       </nav>

//       <div className="sidebar">
//         <a href="/">CREATE NEW RECORD</a>
//         <a href="/">RECORD LIST</a>
//         <a href="/">CREATE COMPANY</a>
//         <a href="/">CREATE EMPLOYEE</a>
//         <a href="/">LOGOUT</a>
//       </div>

//   <div className="main-content">
//     <div className="welcome-section">
//       <h1>Welcome to Our Management Tool!</h1>
//       <p>Here is the solutions of the handle employees of the different companies and salary Management as well</p>
//     </div>

//     <div className="cards">
//       <div className="card">
//         <h2>Employee Management</h2>
//         <p>Track Recods of the employes.</p>
//       </div>
//       <div className="card">
//         <h2>Salary Management</h2>
//         <p>Join our community and start your journey towards success.</p>
//       </div>
//       <div className="card">
//         <h2>About Us</h2>
//         <p>Benefit from our expertise and elevate your experience to new heights.</p>
//       </div>
//     </div>
//   </div>
//     </div>
//   );
// }

// export default Home;
