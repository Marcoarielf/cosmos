import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import css from "./styles.module.scss";

function Header({ title, description, bg }) {
  return (
    <div
      style={{
        backgroundImage: `url("/${bg}.jpg")`,
        backgroundPosition: "50% 20%",
        backgroundSize: "cover",
      }}
      className={css.containerHeader}
    >
      <div className={css.leftSide}>
        <h2>{title}</h2>
      </div>
      {/* <div className={css.rightSide}>
        <p>{description}</p>
      </div> */}
    </div>
  );
}

export default Header;
