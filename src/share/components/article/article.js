import React, { useEffect, useRef, useState } from "react";
import Modal from "../../../Modal";
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
  link,
  type,
  link_proceso,
  openModal = false,
}) {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  const [isOpenModal1, setIsOpenModal1] = useState(false);

  useEffect(() => {
    console.log("openModal", openModal);
    console.log("isOpenModal1", isOpenModal1);
  }, [isOpenModal1, openModal]);
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
        y: -40,
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

  const handlerModal = () => {
    openModal && setIsOpenModal1(true);
  };

  return (
    <div className="container" ref={ref}>
      <Modal
        width="70%"
        height="80%"
        isOpenModal={isOpenModal1}
        onClose={() => setIsOpenModal1(false)}
      >
        <h2>NUTRIARTE - proyecto</h2>
        <p style={{ paddingLeft: 50, paddingRight: 50 }}>Logo inicial:</p>
        <img
          width="50%"
          style={{ marginRight: 20, marginBottom: 50 }}
          src="/nutriarte/Nutriarte-Logo-viejo.jpg"
          alt="nutriarte logo"
        />
        <p style={{ paddingLeft: 50, paddingRight: 50 }}>
          Para el rebranding se decidió simplificar la marca eliminando toda la
          carga visual que tenía anteriormente y conservando el tenedor en
          reemplazo de la "i" para mantener su escencia. Otro elemento que se
          conservó fueron las hojas, pero de una forma más simplificada y puesta
          sobre la "e" y modificando su color a rojo, remitiendo a una manzana,
          para ilustrar un alimento saludable.
        </p>
        <img
          width="50%"
          style={{ marginRight: 20, marginBottom: 50 }}
          src="/nutriarte/Rebranding-Nutriarte-normal.jpg"
          alt="nutriarte logo"
        />
        <p style={{ paddingLeft: 50, paddingRight: 50 }}>
          También se crearon opciones alternativas para sus distintas
          aplicaciones.
        </p>
        <img
          width="50%"
          style={{ marginRight: 20, marginBottom: 50 }}
          src="/nutriarte/Rebranding-Nutriarte-normal-2.jpg"
          alt="nutriarte"
        />
        <p style={{ paddingLeft: 50, paddingRight: 50 }}>
          Por otro lado la paleta de color se modificó y redujo a 3 colores
          principales, siendo estos de tonos más amigables en su aplicación en
          redes sociales. Adicional al rebranding del logo, se crearon dos
          variantes más de la marca con el objetivo de utilizarla en posteos
          referidos a recetas saludables, o consejos de salud.
        </p>
        <img
          width="50%"
          style={{ marginRight: 20, marginBottom: 50 }}
          src="/nutriarte/Rebranding-Nutriarte-recetas.jpg"
          alt=""
        />
        <img
          width="50%"
          style={{ marginRight: 20, marginBottom: 50 }}
          src="/nutriarte/Rebranding-Nutriarte-salud.jpg"
          alt=""
        />
        <p style={{ paddingLeft: 50, paddingRight: 50 }}>
          Actualmente el emprendimiento cuenta con 340mil seguidores en
          Instagram transformándose en una de las cuentas más populares en el
          rubro de nutrición.
        </p>
        <h2 style={{ marginTop: 50 }}>Aplicaciones</h2>
        <img
          width="50%"
          style={{ marginRight: 20, marginBottom: 50 }}
          src="/nutriarte/nut1.png"
          alt="Nutriarte aplicación"
        />
        <img
          width="50%"
          style={{ marginRight: 20, marginBottom: 50 }}
          src="/nutriarte/nut2.png"
          alt="Nutriarte aplicación"
        />
        <img
          width="50%"
          style={{ marginRight: 20, marginBottom: 50 }}
          src="/nutriarte/nut3.png"
          alt="Nutriarte aplicación"
        />
      </Modal>
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
            {type === "video" ? (
              <iframe
                width="90%"
                height="95%"
                src={link}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            ) : (
              <a
                href={link_proceso}
                onClick={() => handlerModal()}
                target="_blank"
              >
                <img src={image} className="imagen" alt={alt} />
              </a>
            )}
          </div>
        </div>
        <div className={`${css.rightSide} rightSide`} style={{ color: color }}>
          <h2 className={`${!isPar ? css.isPar : null} title`}>{title}</h2>
          <p className="description">
            {description} <br />
            <br />
            <br /> <span>{year}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Article;
