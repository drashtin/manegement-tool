import "./App.css";
import Hero from "./components/hero";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployeeHandlerForm from "./components/employeeHandlerForm";
import PayrollTable from "./components/recordList";
import CreateEmployee from "./components/createEmployee";
import About from "./components/about";
import Layout from "./components/layout";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Hero />} />
            <Route
              path="/EmployeeHandlerForm"
              element={<EmployeeHandlerForm />}
            />
            <Route path="/PayrollTable" element={<PayrollTable />} />
            <Route path="/CreateEmployee" element={<CreateEmployee />} />
            <Route path="/About" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;