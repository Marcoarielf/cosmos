import React, {
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
} from "react";
import { Link, useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import css from "./home.module.scss";
import LogoCosmos from "../images/logo.png";

const Circle = forwardRef(({ size, delay }, ref) => {
  const el = useRef();

  useImperativeHandle(
    ref,
    () => {
      // return our API
      return {
        moveTo(x, y) {
          gsap.to(el.current, { x, y, delay });
        },
      };
    },
    [delay]
  );

  return <div className={`${css.circle} circle ${size}`} ref={el}></div>;
});

function Home() {
  const navigate = useNavigate();

  const circleRefs = useRef([]);

  // reset on re-renders
  circleRefs.current = [];

  useEffect(() => {
    circleRefs.current.forEach((ref) =>
      ref.moveTo(window.innerWidth / 2, window.innerHeight / 2)
    );

    const onMove = ({ clientX, clientY }) => {
      circleRefs.current.forEach((ref) => ref.moveTo(clientX, clientY));
    };

    window.addEventListener("pointermove", onMove);

    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  const addCircleRef = (ref) => {
    if (ref) {
      circleRefs.current.push(ref);
    }
  };

  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#fafafa", color: "#141414" });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#141414", color: "#fff" });
  };

  const changePage = (link) => {
    setTimeout(() => {
      navigate(`/${link}`);
    }, 1000);
  };

  return (
    <>
      <Circle size="sm" ref={addCircleRef} delay={0} />
      <Circle size="md" ref={addCircleRef} delay={0.1} />
      <Circle size="lg" ref={addCircleRef} delay={0.2} />
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
          <Link
            to="/desarrollo-web"
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
          >
            <li>desarrollo web</li>
          </Link>
          <Link to="/apps" onMouseEnter={onEnter} onMouseLeave={onLeave}>
            <li>APPS Y JUEGOS</li>
          </Link>
          <Link to="/vfx" onMouseEnter={onEnter} onMouseLeave={onLeave}>
            <li>
              vfx <br />
              animacion
            </li>
          </Link>
          {/* <div onClick={() => changePage("motion")}> */}
          <Link to="/campanias" onMouseEnter={onEnter} onMouseLeave={onLeave}>
            <li>CAMPAÑAS PUBLICITARIAS</li>
          </Link>
          <Link to="/diseno" onMouseEnter={onEnter} onMouseLeave={onLeave}>
            <li>DISEÑO GRÁFICO</li>
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
