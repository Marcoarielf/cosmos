import React, { useEffect, useRef } from "react";
import css from "./styles.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Article({
  image,
  alt,
  title,
  description,
  year,
  bgColor,
  color,
  isPar,
  haveProcess = true,
}) {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector(".imagen"),
      {
        opacity: 0,
        y: -180,
      },
      {
        opacity: 1,
        y: -50,
        duration: 0.5,
        ease: "ease",
        scrollTrigger: {
          trigger: element.querySelector(".containerArticle"),
          toggleActions: "restart none none reset",
        },
      }
    );
  }, []);

  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector(".title"),
      {
        opacity: 0,
        y: -80,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "ease",
        scrollTrigger: {
          trigger: element.querySelector(".containerArticle"),
          toggleActions: "restart none none reset",
        },
      }
    );
  }, []);

  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector(".description"),
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: -100,
        duration: 0.5,
        ease: "ease",
        scrollTrigger: {
          trigger: element.querySelector(".containerArticle"),
          toggleActions: "restart none none reset",
        },
      }
    );
  }, []);

  return (
    <div className="container" ref={ref}>
      <div
        className={`${css.containerArticle} containerArticle ${
          isPar && css.par
        }`}
      >
        <div className={css.leftSide}>
          <div
            className={css.containerImage}
            style={{ backgroundColor: bgColor }}
          >
            <img src={image} className="imagen" alt={alt} />
          </div>
        </div>
        <div className={`${css.rightSide} rightSide`} style={{ color: color }}>
          <h2 className={`${!isPar ? css.isPar : null} title`}>{title}</h2>
          <p className="description">
            {description} <br />
            <br />
            <br /> <span>{year}</span>
          </p>

          {haveProcess && <a href="">ver proceso</a>}
        </div>
      </div>
    </div>
  );
}

export default Article;
