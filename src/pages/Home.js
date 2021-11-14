import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import css from "./home.module.scss";
import LogoCosmos from "../images/logo.png";

function Home() {
  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#fafafa", color: "#141414" });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#141414", color: "#fff" });
  };

  return (
    <>
      <div className={css.header}>
        <div className={css.logo}>
          <img src={LogoCosmos} alt="logo cosmos" />
        </div>
      </div>
      <div className={css.containerNav}>
        <ul>
          <Link to="/modelados" onMouseEnter={onEnter} onMouseLeave={onLeave}>
            <li>
              modelado <br />
              3d
            </li>
          </Link>
          <Link to="/webs" onMouseEnter={onEnter} onMouseLeave={onLeave}>
            <li>
              desarrollo web <br />y apps
            </li>
          </Link>
          <Link to="/vfx" onMouseEnter={onEnter} onMouseLeave={onLeave}>
            <li>
              vfx <br />
              animacion
            </li>
          </Link>
          <Link to="/motion" onMouseEnter={onEnter} onMouseLeave={onLeave}>
            <li>MOTION GRAPHICS</li>
          </Link>
          <Link to="/ilustracion" onMouseEnter={onEnter} onMouseLeave={onLeave}>
            <li>ilustracion</li>
          </Link>
          <Link to="/diseno" onMouseEnter={onEnter} onMouseLeave={onLeave}>
            <li>diseño</li>
          </Link>
        </ul>
      </div>
      <div className={css.experiencia}>
        <div className={css.containerText}>
          <h2>viví la experiencia de un viaje perfecto</h2>
        </div>
      </div>
    </>
  );
}

export default Home;
