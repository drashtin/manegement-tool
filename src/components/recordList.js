import React from "react";
import "../components/styles/recordList.css";

const PayrollTable = () => {
  const data = [
    {
      no: 1,
      EmployeeName: "DRASHTIN",
      Designation: "REACT JS",
      MonthYear: "MAY-2024",
      PayDays: "28",
      BasicDA: "-",
      OT: "-",
      Incentiv: "NO",
      PaidLeave: 0,
      ProvidentFund: 0,
      ESI: 0,
      Loan: 0,
      ProfessionTax: 0,
      TDS: 0,
      AbsentDeduction: 2,
      NETSalary: 15000,
    },
    {
      no: 2,
      EmployeeName: "PIYUSH",
      Designation: "REACT JS",
      MonthYear: "SEPTEMBER-2024",
      PayDays: "26",
      BasicDA: "-",
      OT: "-",
      Incentiv: "NO",
      PaidLeave: 0,
      ProvidentFund: 0,
      ESI: 0,
      Loan: 0,
      ProfessionTax: 0,
      TDS: 0,
      AbsentDeduction: 2,
      NETSalary: 20000,
    },
    {
      no: 3,
      EmployeeName: "CHINTAN",
      Designation: "REACT JS",
      MonthYear: "SEPTEMBER-2024",
      PayDays: "25",
      BasicDA: "-",
      OT: "-",
      Incentiv: "NO",
      PaidLeave: 0,
      ProvidentFund: 0,
      ESI: 0,
      Loan: 0,
      ProfessionTax: 0,
      TDS: 0,
      AbsentDeduction: 3,
      NETSalary: 10000,
    },
    {
      no: 4,
      EmployeeName: "KESHAV",
      Designation: "REACT JS",
      MonthYear: "SEPTEMBER-2024",
      PayDays: "27",
      BasicDA: "-",
      OT: "-",
      Incentiv: "NO",
      PaidLeave: 0,
      ProvidentFund: 0,
      ESI: 0,
      Loan: 0,
      ProfessionTax: 0,
      TDS: 0,
      AbsentDeduction: 0,
      NETSalary: 25000,
    },
    {
      no: 5,
      EmployeeName: "ADITYA",
      Designation: "REACT JS",
      MonthYear: "SEPTEMBER-2024",
      PayDays: "27",
      BasicDA: "-",
      OT: "-",
      Incentiv: "NO",
      PaidLeave: 0,
      ProvidentFund: 0,
      ESI: 0,
      Loan: 0,
      ProfessionTax: 0,
      TDS: 0,
      AbsentDeduction: 0,
      NETSalary: 10000,
    },
  ];

  return (
    <>
    <div style={{ marginLeft: "10px", overflow: "auto" }}>
      <div>
        <h2 className="salary-title">Emplyee Salary Record</h2>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Employee Name</th>
              <th>Designation</th>
              <th>Month & Year</th>
              <th>Pay Days</th>
              <th>Basic & DA</th>
              <th>OT</th>
              <th>Incentiv</th>
              <th>Paid Leave</th>
              <th>Provident Fund</th>
              <th>E.S.I.</th>
              <th>Loan</th>
              <th>Profession Tax</th>
              <th>TDS/IT</th>
              <th>Absent Deduction</th>
              <th>NET Salary</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "even-row" : "odd-row"}
              >
                <td>{row.no}</td>
                <td>{row.EmployeeName}</td>
                <td>{row.Designation}</td>
                <td>{row.MonthYear}</td>
                <td>{row.PayDays}</td>
                <td>{row.BasicDA}</td>
                <td>{row.OT}</td>
                <td>{row.Incentiv}</td>
                <td>{row.PaidLeave}</td>
                <td>{row.ProvidentFund}</td>
                <td>{row.ESI}</td>
                <td>{row.Loan}</td>
                <td>{row.ProfessionTax}</td>
                <td>{row.TDS}</td>
                <td>{row.AbsentDeduction}</td>
                <td>{row.NETSalary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </>
  );
};

export default PayrollTable;