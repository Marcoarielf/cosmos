import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import css from "./styles.module.scss";

function Nav() {
  const [showNavMobile, setShowNavMobile] = React.useState(false);
  const rotate45 = useRef();
  const rotate90 = useRef();
  const hide = useRef();
  const overlay = useRef();

  /* eslint-disable */
  if (showNavMobile) {
    gsap.to(rotate45.current, {
      rotation: "+=45",
      transformOrigin: "50px 40px",
    }),
      gsap.to(rotate90.current, {
        rotation: "-=45",
        transformOrigin: "50px 40px",
      }),
      gsap.to(overlay.current, {
        top: "100%",
      });
  } else {
    gsap.to(rotate45.current, {
      rotation: "-=45",
    }),
      gsap.to(rotate90.current, {
        rotation: "+=45",
      });
  }

  const doNavigate = () => {
    gsap.to(overlay.current, {
      top: "-100%",
    });
    // gsap.to(q("li"), { opacity: "0" });
  };
  // useEffect(() => {
  //   gsap.to(rotate45.current, {
  //     rotation: "+=45",
  //     transformOrigin: "50px 40px",
  //   });
  //   gsap.to(rotate90.current, {
  //     rotation: "-=45",
  //     transformOrigin: "50px 40px",
  //   });
  //   // gsap.to(hide.current, { display: "none" });
  // }, [showNavMobile]);

  return (
    <>
      {showNavMobile && (
        <>
          <div className={css.overlay} ref={overlay} />
          <ul className={css.listOfLinks}>
            <li>
              <Link to="/modelados" onClick={() => doNavigate()}>
                MODELADOS 3D
              </Link>
            </li>
            <li>
              <Link to="/webs">DESARROLLO WEBS Y APPS</Link>
            </li>
            <li>
              <Link to="/vfx">VFX / ANIMACIÓN</Link>
            </li>
            <li>
              <Link to="/motion">MOTION GRAPHICS</Link>
            </li>
            <li>
              <Link to="/ilustracion">ILUSTRACIÓN</Link>
            </li>
            <li>
              <Link to="/diseno">DISEÑO</Link>
            </li>
          </ul>
        </>
      )}
      <div
        onClick={() => setShowNavMobile(!showNavMobile)}
        onKeyDown={() => setShowNavMobile(!showNavMobile)}
        role="button"
        tabIndex={0}
        className={css.buttonNav}
      >
        <svg
          style={{ fill: "white" }}
          viewBox="0 0 100 80"
          width="40"
          height="40"
        >
          <rect ref={rotate45} width="100" height="20" />
          <rect ref={rotate90} y="30" width="100" height="20" />
          <rect ref={hide} y="60" width="100" height="20" />
        </svg>
      </div>
    </>
  );
}

export default Nav;
