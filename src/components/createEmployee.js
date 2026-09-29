import React, { useState } from "react";
import "../components/styles/createEmployee.css";

const CreateEmployee = () => {
  const [form, setForm] = useState({
    employee: "",
    Designation: "",
    experience: "",
    dob: "",
    gender: "",
    email: "",
    phoneNumber: "",
    alterNavtive: "",
    address: "",
  });

  const [error, setError] = useState({});

  const handleOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setError({
      ...error,
      [e.target.name]: false,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    let validError = {};
    Object.keys(form).forEach((key) => {
      if (!form[key]) {
        validError[key] = true;
      }
    });
    if (Object.keys(validError).length > 0) {
      setError(validError);
    } else {
      console.log("submit", form);
    }
  };

  const placetext = (name) => {
    if (error[name]) {
      return "please required fill filed";
    }
    return "";
  };
  return (
    <>
      <div>
        <h2 className="employee-title"> Create Employee </h2>
        <form className="create-employee-form" onSubmit={handleOnSubmit}>
          <div className={` employee-field ${error.employee ? "error" : ""}`}>
            <label>Employee Name:</label>
            <input
              type="text"
              name="employee"
              value={form.employee}
              onChange={handleOnChange}
              placeholder={placetext("employee")}
            />
          </div>

          <div
            className={` employee-field ${error.Designation ? "error" : ""}`}
          >
            <label>Designation:</label>
            <select
              name="Designation"
              value={form.Designation}
              onChange={handleOnChange}
            >
              <option value="">---Select Designation---</option>
              <option value="1">JavaScript</option>
              <option value="2">React JS</option>
              <option value="3">Next JS</option>
              <option value="4">Node jS</option>
              <option value="5">Full Stack</option>
            </select>
          </div>

          <div className={` employee-field ${error.experience ? "error" : ""}`}>
            <label>Experience:</label>
            <select
              name="experience"
              value={form.experience}
              onChange={handleOnChange}
            >
              <option value="">---Select Experience---</option>
              <option value="1">0 TO 6 MONTHS</option>
              <option value="2">1 YEAR</option>
              <option value="3">2 YEAR</option>
              <option value="4">3 YEAR</option>
              <option value="5">4 YEAR</option>
              <option value="6">5 YEAR</option>
            </select>
          </div>

          <div className={` employee-field ${error.dob ? "error" : ""}`}>
            <label>Date Of Birth:</label>
            <input
              type="date"
              name="dob"
              value={form.dob}
              onChange={handleOnChange}
              placeholder={placetext("dob")}
            />
          </div>

          <div className={` employee-field ${error.gender ? "error" : ""}`}>
            <label>Gender:</label>
            <select name="gender" value={form.gender} onChange={handleOnChange}>
              <option value="">---Select Gender---</option>
              <option value="1">Male</option>
              <option value="2">Female</option>
              <option value="3">Other</option>
            </select>
          </div>

          <div className={`employee-field ${error.email ? "error" : ""}`}>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleOnChange}
              placeholder={placetext("email")}
            />
          </div>

          <div
            className={` employee-field ${error.phoneNumber ? "error" : ""}`}
          >
            <label>Phone Number:</label>
            <input
              type="number"
              name="phoneNumber"
              value={form.phoneNumber}
              onChange={handleOnChange}
              placeholder={placetext("phoneNumber")}
            />
          </div>

          <div
            className={` employee-field ${error.alterNavtive ? "error" : ""}`}
          >
            <label>AlterNavtive Number</label>
            <input
              type="number"
              name="alterNavtive"
              value={form.alterNavtive}
              onChange={handleOnChange}
              placeholder={placetext("alterNavtive")}
            />
          </div>

          <div className={` employee-field ${error.address ? "error" : ""}`}>
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={form.address}
              onChange={handleOnChange}
              placeholder={placetext("address")}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default CreateEmployee;