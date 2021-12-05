import React from "react";
import Header from "../../share/components/header/header";
import LinkBox from "./components/LinkBox/LinkBox";
import css from "./styles.module.scss";

function Webs() {
  const titleHeader = "DESARROLLO WEB Y APPS";
  const descriptionHeader =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";

  const dataWebs = [
    {
      nombre: "promujer",
      link: "https://emprende-frontend.azurewebsites.net/",
    },
    {
      nombre: "utopía",
      link: "https://utopia.fundacionbyb.org/",
    },
    {
      nombre: "ecommerce",
      link: "https://lettosecommerce.surge.sh/",
    },
  ];

  const dataJuegos = [
    {
      nombre: "cuentasClaras",
      link: "#",
    },
    {
      nombre: "absolut",
      link: "#",
    },
    {
      nombre: "sherlock",
      link: "#",
    },
  ];
  return (
    <>
      <Header title={titleHeader} description={descriptionHeader} />
      <div className={css.container}>
        <h1>WEBS</h1>
        <LinkBox data={dataWebs} />
      </div>
      <div className={css.container}>
        <h1>APPS & JUEGOS</h1>
        <LinkBox data={dataJuegos} />
      </div>
    </>
  );
}

export default Webs;
