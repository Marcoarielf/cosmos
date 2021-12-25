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
  const el = useRef();
  const q = gsap.utils.selector(el);

  /* eslint-disable */
  if (showNavMobile) {
    gsap.to(rotate45.current, {
      rotation: "+=45",
      transformOrigin: "0% 20%",
      x: "18%",
      y: "-4%",
    }),
      gsap.to(rotate90.current, {
        rotation: "-=45",
        transformOrigin: "50% 50%",
      }),
      gsap.to(overlay.current, {
        top: "0%",
      }),
      gsap.to(hide.current, {
        opacity: "0",
      }),
      gsap.fromTo(
        q(".listOfLinks li"),
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
          stagger: 0.2,
        }
      );
  } else {
    gsap.to(rotate45.current, {
      rotation: "0",
      x: "0%",
    }),
      gsap.to(rotate90.current, {
        rotation: "0",
      }),
      gsap.to(hide.current, {
        opacity: "1",
      }),
      gsap.to(overlay.current, {
        top: "-100%",
      });
  }

  const doNavigate = () => {
    setShowNavMobile(false);
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
      <div className={css.overlay} ref={overlay}>
        <ul className={css.listOfLinks} useRef={el}>
          <li>
            <Link to="/" onClick={() => doNavigate()}>
              INICIO
            </Link>
          </li>
          <li>
            <Link to="/modelados" onClick={() => doNavigate()}>
              MODELADOS 3D
            </Link>
          </li>
          <li>
            <Link to="/desarrollo-web" onClick={() => doNavigate()}>
              DESARROLLO WEB
            </Link>
          </li>
          <li>
            <Link to="/apps" onClick={() => doNavigate()}>
              apps y juegos
            </Link>
          </li>
          <li>
            <Link to="/vfx" onClick={() => doNavigate()}>
              VFX / ANIMACIÓN
            </Link>
          </li>
          <li>
            <Link to="/campanias" onClick={() => doNavigate()}>
              CAMPAÑAS PUBLICITARIAS
            </Link>
          </li>
          <li>
            <Link to="/diseno" onClick={() => doNavigate()}>
              DISEÑO GRÁFICO
            </Link>
          </li>
        </ul>
      </div>
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
