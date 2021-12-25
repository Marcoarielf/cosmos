import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Modal from "../../../../Modal";
import css from "./styles.module.scss";

function ModelDetail({
  title,
  description,
  url,
  linkProceso,
  haveProcess = true,
}) {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  const [isOpenModal1, setIsOpenModal1] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(linkProceso);

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

  const handlerClick = () => {
    setCurrentVideo(linkProceso);
    setIsOpenModal1(true);
  };

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
        {haveProcess && (
          <button
            target="_blank"
            href={linkProceso}
            className={`${css.proceso} proceso`}
            onClick={() => handlerClick()}
            type="button"
          >
            ver proceso
          </button>
        )}
      </div>
      <Modal
        width="80%"
        height="80%"
        isOpenModal={isOpenModal1}
        onClose={() => setIsOpenModal1(false)}
      >
        <div style={{ width: "100%", height: "100%" }}>
          <iframe
            width="100%"
            height="100%"
            src={currentVideo}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </Modal>
    </div>
  );
}

export default ModelDetail;
