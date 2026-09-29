import React from "react";
import "../components/styles/hero.css";

const Hero = () => {
  const data = [
    {
      no: 1,
      employeeName: "Drashtin",
      designation: "React JS",
      experience: "0 To 6 Months",
      dob: "22/03/2004",
      gender: "Male",
      email: "drashtin@gmail.com",
      phoneNumber: 9523697412,
      alternativeNumber: 8963151247,
      address: "Surat",
    },
    {
      no: 2,
      employeeName: "Piyush",
      designation: "React JS",
      experience: "2 YEAR",
      dob: "12/05/2002",
      gender: "Male",
      email: "piyush@gmail.com",
      phoneNumber: 9523697412,
      alternativeNumber: 8963151247,
      address: "Surat",
    },
    {
      no: 3,
      employeeName: "Chintan",
      designation: "React JS",
      experience: "1 YEAR",
      dob: "02/06/2002",
      gender: "Male",
      email: "chintan@gmail.com",
      phoneNumber: 9523697412,
      alternativeNumber: 8963151247,
      address: "Surat",
    },
    {
      no: 4,
      employeeName: "Keshav",
      designation: "React JS",
      experience: "2 YEAR",
      dob: "29/11/2003",
      gender: "Male",
      email: "keshav@gmail.com",
      phoneNumber: 9523697412,
      alternativeNumber: 8963151247,
      address: "Surat",
    },
    {
      no: 5,
      employeeName: "Aditya",
      designation: "React JS",
      experience: "1 YEAR",
      dob: "01/07/2005",
      gender: "Male",
      email: "aditya@gmail.com",
      phoneNumber: 9523697412,
      alternativeNumber: 8963151247,
      address: "Surat",
    },
  ];
  return (
    <>
      <div style={{ marginLeft: "10px", overflow: "auto" }}>
        <div>
          <h2 className="hero-title new-res-des">Employee Details</h2>
        </div>
        <div className="main-content ">
          <table className="employee-table">
            <thead className="table-header">
              <tr>
                <th className="table-cell">NO</th>
                <th className="table-cell">Employee Name</th>
                <th className="table-cell">Designation</th>
                <th className="table-cell">Experience</th>
                <th className="table-cell">Date Of Birth</th>
                <th className="table-cell">Gender</th>
                <th className="table-cell">Email</th>
                <th className="table-cell">Phone Number</th>
                <th className="table-cell">AlterNavtive Number</th>
                <th className="table-cell">Address</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "even-row" : "odd-row"}
                >
                  <td className="table-cell">{row.no}</td>
                  <td className="table-cell">{row.employeeName}</td>
                  <td className="table-cell">{row.designation}</td>
                  <td className="table-cell">{row.experience}</td>
                  <td className="table-cell">{row.dob}</td>
                  <td className="table-cell">{row.gender}</td>
                  <td className="table-cell">{row.email}</td>
                  <td className="table-cell">{row.phoneNumber}</td>
                  <td className="table-cell">{row.alternativeNumber}</td>
                  <td className="table-cell">{row.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default Hero;