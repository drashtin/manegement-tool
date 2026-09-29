import React from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import { Outlet } from "react-router-dom";
// import Footer from './footer'

const Layout = () => {
  return (
    <div>
      <Header />
      <div>
        <Sidebar />
        <div style={{ marginLeft: "250px", marginTop: "95px" }}>
          <Outlet />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
