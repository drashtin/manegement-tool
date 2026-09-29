import React, { useState } from "react";
import "../components/styles/employeeHandlerForm.css";

const EmployeeHandlerForm = () => {
  const [formData, setFormData] = useState({
    company: "",
    employee: "",
    Designation: "",
    PayDays: "",
    Basic: "",
    year: "2024",
    month: "",
    Ot: "",
    Incentive: "",
    PaidLeave: "",
    ProvidentFund: "",
    Esi: "",
    Loan: "",
    ProfessionTax: "",
    tds: "",
    Absent: "",
    NETSalary: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    const maxLength = {
      PayDays: 2,
      Ot: 1,
      Incentive: 4,
      PaidLeave: 2,
      ProvidentFund: 4,
      Esi: 5,
      ProfessionTax: 3,
      tds: 3,
      Absent: 2,
      NETSalary: 5,
    };

    if (maxLength[name] && value.length > maxLength[name]) {
      return;
    }

    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: false,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let validationErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        validationErrors[key] = true;
      }
    });

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Form Data Submitted:", formData);
    }
  };

  const getPlaceholderText = (name) => {
    if (errors[name]) {
      return "Please fill this field";
    }
    return "";
  };

  return (
    <>
      <h2 className="title">Employee Handler Form</h2>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className={`form-group ${errors.company ? "error" : ""}`}>
          <label>Company:</label>
          <select
            name="company"
            value={formData.company}
            onChange={handleChange}
          >
            <option value="">--- Select Company ---</option>
            <option value="Sharnam Info">Sharnam Info</option>
            <option value="Tata">Tata</option>
          </select>
        </div>

        <div className={`form-group ${errors.employee ? "error" : ""}`}>
          <label>Staff Name:</label>
          <select
            name="employee"
            value={formData.employee}
            onChange={handleChange}
          >
            <option value="">--- Select Employee ---</option>
            <option value="Drashtin">Drashtin</option>
            <option value="Piyush">Piyush</option>
            <option value="Keshav">Keshav</option>
            <option value="Chintan">Chintan</option>
            <option value="Aditya">Aditya</option>
          </select>
        </div>

        <div className={`form-group ${errors.Designation ? "error" : ""}`}>
          <label>Designation:</label>
          <select
            name="Designation"
            value={formData.Designation}
            onChange={handleChange}
          >
            <option value="">---Select Designation---</option>
            <option value="1">JavaScript</option>
            <option value="2">React JS</option>
            <option value="3">Next JS</option>
            <option value="4">Node JS</option>
            <option value="5">Full Stack</option>
          </select>
        </div>

        <div className={`form-group ${errors.PayDays ? "error" : ""}`}>
          <label>Pay Days:</label>
          <input
            type="text"
            name="PayDays"
            value={formData.PayDays}
            onChange={handleChange}
            placeholder={getPlaceholderText("PayDays")}
          />
        </div>

        <div className={`form-group ${errors.Basic ? "error" : ""}`}>
          <label>Basic & DA:</label>
          <input
            type="text"
            name="Basic"
            value={formData.Basic}
            onChange={handleChange}
            placeholder={getPlaceholderText("Basic")}
          />
        </div>

        <div className={`form-group ${errors.year ? "error" : ""}`}>
          <label>Year:</label>
          <select name="year" value={formData.year} onChange={handleChange}>
            <option value="2024">2024</option>
          </select>
        </div>

        <div className={`form-group ${errors.month ? "error" : ""}`}>
          <label>Month:</label>
          <select name="month" value={formData.month} onChange={handleChange}>
            <option value="">--- Select Month ---</option>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
        </div>

        <div className={`form-group ${errors.Ot ? "error" : ""}`}>
          <label>OT:</label>
          <input
            type="number"
            name="Ot"
            value={formData.Ot}
            onChange={handleChange}
            placeholder={getPlaceholderText("Ot")}
          />
        </div>

        <div className={`form-group ${errors.Incentive ? "error" : ""}`}>
          <label>Incentive:</label>
          <input
            type="number"
            name="Incentive"
            value={formData.Incentive}
            onChange={handleChange}
            placeholder={getPlaceholderText("Incentive")}
          />
        </div>

        <div className={`form-group ${errors.PaidLeave ? "error" : ""}`}>
          <label>Paid Leave:</label>
          <input
            type="number"
            name="PaidLeave"
            value={formData.PaidLeave}
            onChange={handleChange}
            placeholder={getPlaceholderText("PaidLeave")}
          />
        </div>

        <div className={`form-group ${errors.ProvidentFund ? "error" : ""}`}>
          <label>Provident Fund:</label>
          <input
            type="number"
            name="ProvidentFund"
            value={formData.ProvidentFund}
            onChange={handleChange}
            placeholder={getPlaceholderText("ProvidentFund")}
          />
        </div>

        <div className={`form-group ${errors.Esi ? "error" : ""}`}>
          <label>E.S.I:</label>
          <input
            type="number"
            name="Esi"
            value={formData.Esi}
            onChange={handleChange}
            placeholder={getPlaceholderText("Esi")}
          />
        </div>

        <div className={`form-group ${errors.Loan ? "error" : ""}`}>
          <label>Loan:</label>
          <input
            type="number"
            name="Loan"
            value={formData.Loan}
            onChange={handleChange}
            placeholder={getPlaceholderText("Loan")}
          />
        </div>

        <div className={`form-group ${errors.ProfessionTax ? "error" : ""}`}>
          <label>Profession Tax:</label>
          <input
            type="number"
            name="ProfessionTax"
            value={formData.ProfessionTax}
            onChange={handleChange}
            placeholder={getPlaceholderText("ProfessionTax")}
          />
        </div>

        <div className={`form-group ${errors.tds ? "error" : ""}`}>
          <label>TDS/IT:</label>
          <input
            type="number"
            name="tds"
            value={formData.tds}
            onChange={handleChange}
            placeholder={getPlaceholderText("tds")}
          />
        </div>

        <div className={`form-group ${errors.Absent ? "error" : ""}`}>
          <label>Absent Deduction:</label>
          <input
            type="number"
            name="Absent"
            value={formData.Absent}
            onChange={handleChange}
            placeholder={getPlaceholderText("Absent")}
          />
        </div>
        <div className={`form-group ${errors.NETSalary ? "error" : ""}`}>
          <label>NET Salary:</label>
          <input
            type="number"
            name="NETSalary"
            value={formData.NETSalary}
            onChange={handleChange}
            placeholder={getPlaceholderText("NETSalary")}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default EmployeeHandlerForm;