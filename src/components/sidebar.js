import { Link } from "react-router-dom";
import React from "react";
import "../components/styles/sidebar.css";

export default function Sidebar() {
  return (
    <>
      <div>
        <div className="sidebar">
          <Link to="/EmployeeHandlerForm" data-replace="NEW RECORD">
            <span>CREATE NEW RECORD</span>
          </Link>
          <Link to="/CreateEmployee" data-replace="NEW COMPANY">
            <span>CREATE COMPANY</span>
          </Link>
          <Link to="/CreateEmployee" data-replace="NEW EMPLOYEE">
            <span>CREATE EMPLOYEE</span>
          </Link>
          <Link to="/PayrollTable" data-replace="VIEW LIST">
            <span>RECORD LIST</span>
          </Link>
          <Link to="/" data-replace="EXIT">
            <span>LOG OUT</span>
          </Link>
        </div>
      </div>
    </>
  );
}