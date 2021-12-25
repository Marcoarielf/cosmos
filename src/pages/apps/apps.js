import React from "react";
import Header from "../../share/components/header/header";
import LinkBox from "../webs/components/LinkBox/LinkBox";
import css from "./styles.module.scss";

function Apps() {
  const titleHeader = " APPS y Juegos";
  const descriptionHeader =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";

  const data = [
    {
      nombre: "cuentasClaras",
      type: "juego",
      link: "#",
      bg: "cc",
      extension: "png",
    },
    {
      nombre: "absolut",
      type: "web",
      link: "https://absolut-construct.netlify.app/",
      bg: "absolutt",
      extension: "jpg",
    },
    {
      nombre: "sherlock",
      type: "web",
      link: "https://sherlock-holmes-construct.netlify.app/",
      bg: "lettos",
      extension: "jpg",
    },
    {
      nombre: "Gana o pierde",
      type: "web",
      link: "https://elastic-kowalevski-9231ef.netlify.app/",
      bg: "winorhold",
      extension: "jpg",
    },
    {
      nombre: "HealthyDog",
      type: "juego",
      link: "#",
      bg: "lettos",
      extension: "jpg",
    },
  ];
  return (
    <>
      <Header
        title={titleHeader}
        description={descriptionHeader}
        bg="portada_apps"
      />
      <div className={css.container}>
        <LinkBox data={data} />
      </div>
    </>
  );
}

export default Apps;
