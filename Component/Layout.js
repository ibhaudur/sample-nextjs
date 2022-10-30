import React from "react";
import Nav from "./Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import style from '../styles/Home.module.css'

import Sidebar from "./Sidebar";

function Layout({ children }) {
  return (
    <div>
      <Nav />
      <div>
        <Sidebar />
      </div>
      <div className={style.child}>{children}</div>
      </div>
  );
}

export default Layout;
