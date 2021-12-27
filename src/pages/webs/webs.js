import React from "react";
import Header from "../../share/components/header/header";
import LinkBox from "./components/LinkBox/LinkBox";
import css from "./styles.module.scss";

function Webs() {
  const titleHeader = "DESARROLLO WEB";
  const descriptionHeader =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";

  const data = [
    {
      nombre: "promujer",
      link: "https://emprende-frontend.azurewebsites.net/",
      bg: "promu",
      extension: "jpg",
      type: "web",
    },
    {
      nombre: "utopía",
      link: "https://utopia.fundacionbyb.org/",
      bg: "utopia",
      extension: "jpg",
      type: "web",
    },
    {
      nombre: "ecommerce",
      link: "https://lettosecommerce.surge.sh/",
      bg: "lettos",
      extension: "jpg",
      type: "web",
    },
    {
      nombre: "Natura Inspirar",
      link: "https://drive.google.com/drive/u/0/folders/1kF07Cpgg4gRysOSAESkn5Kas5X-NRFqr",
      bg: "natura1",
      extension: "png",
      type: "naturaI",
    },
    {
      nombre: "Natura Involucrar",
      link: "https://drive.google.com/drive/u/0/folders/13EsU54n-N2y518dkW46uAE9Qt_CSmGC1",
      bg: "natura2",
      extension: "png",
      type: "naturaII",
    },
  ];
  return (
    <>
      <Header
        title={titleHeader}
        description={descriptionHeader}
        bg="header_webs"
      />
      <div className={css.container}>
        <LinkBox data={data} />
      </div>
    </>
  );
}

export default Webs;
