import React from "react";
import Header from "../../share/components/header/header";
import Article from "../../share/components/article/article";
import LogoGiordano from "./../../images/logoGiordano.png";
import LogoFrosi from "./../../images/logoFrosi.png";
import LogoJoystuk from "./../../images/joystuk.jpg";
import LogoIlustracion from "./../../images/ilustracion.jpg";
import css from "./styles.module.scss";
import { Link } from "react-router-dom";

function Diseno() {
  const titleHeader = "DISEÑO E ILUSTRACIONES";
  const descriptionHeader =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";

  const projects = [
    {
      title: "Giordano",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      year: "2020",
      bgColor: "#473049",
      color: "silver",
      image: LogoGiordano,
    },
    {
      title: "julia frosi",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      year: "2020",
      bgColor: "#3F3F3F",
      color: "silver",
      image: LogoFrosi,
    },
    {
      title: "ilustracion",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      year: "2018",
      bgColor: "#D1D1D2",
      color: "#8DAAAB",
      image: LogoIlustracion,
    },
    {
      title: "joystuk",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      year: "2019",
      bgColor: "#D1D1D2",
      color: "#8D5A95",
      image: LogoJoystuk,
    },
  ];

  return (
    <>
      <Header
        title={titleHeader}
        description={descriptionHeader}
        bg="header_diseno"
      />
      <div className={css.containerArticles}>
        {projects.map((project, i) => {
          return (
            <Article
              key={i}
              image={project.image}
              alt={project.title}
              title={project.title}
              description={project.description}
              year={project.year}
              bgColor={project.bgColor}
              color={project.color}
              isPar={i % 2 === 0}
            />
          );
        })}
      </div>
    </>
  );
}

export default Diseno;
