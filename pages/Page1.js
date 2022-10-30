import React from "react";
import Meta from "../Component/meta";
import style from "../styles/Home.module.css";

export default function Page1() {
  return (
    <div>
      <Meta title="about" />
      <h1>About</h1>
      {/* <div>
                   <label>Ssample</label>
                   <input placeholder='Enter Username' className={style.input_sam} type='text' ></input>
                   </div> */}
    </div>
  );
}
