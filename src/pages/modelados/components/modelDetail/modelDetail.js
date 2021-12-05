import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import css from "./styles.module.scss";

function ModelDetail({ title, description, url, linkProceso }) {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector("iframe"),
      {
        opacity: 0,
        y: -180,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "ease",
        scrollTrigger: {
          trigger: element.querySelector(".modelados"),
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
          trigger: element.querySelector(".modelados"),
          toggleActions: "restart none none reset",
        },
      }
    );
  }, []);

  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector(".proceso"),
      {
        opacity: 0,
        y: -180,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "ease",
        scrollTrigger: {
          trigger: element.querySelector(".modelados"),
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
        y: 0,
        duration: 0.5,
        ease: "ease",
        scrollTrigger: {
          trigger: element.querySelector(".modelados"),
          toggleActions: "restart none none reset",
        },
      }
    );
  }, []);

  return (
    <div className={`${css.modelados} modelados`} ref={ref}>
      <iframe
        src={url}
        frameborder="0"
        allowfullscreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        onmousewheel=""
        scrolling="no"
      />
      <div className={css.info}>
        <h2 className="title">{title}</h2>
        <p className="description">{description}</p>
        <a href={linkProceso} className={`${css.proceso} proceso`}>
          ver proceso
        </a>
      </div>
    </div>
  );
}

export default ModelDetail;
