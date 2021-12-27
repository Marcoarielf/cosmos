import React from "react";
import Header from "../../share/components/header/header";
import Article from "../../share/components/article/article";
import LogoGiordano from "./../../images/giordano.png";
import LogoFrosi from "./../../images/frosi2.png";
import LogoJoystuk from "./../../images/joystuk.png";
import Nutriarte from "./../../images/nutriarte.png";
import css from "./styles.module.scss";
import { Link } from "react-router-dom";

function Diseno() {
  const titleHeader = "DISEÑO GRÁFICO";
  const descriptionHeader =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";

  const projects = [
    {
      title: "Giordano",
      description:
        "Vino Giordano surgió en el año 2019 a pedido de un vinicultor italiano para la etiqueta de un nuevo vino que sacaría a la venta. El cliente quería reflejar en el isotipo solicitado la inicial del nombre del vino de una manera elegante y fina, y al mismo tiempo las sierras de Alba (lugar en donde se cosecha el mismo.",
      year: "2019",
      bgColor: "#473049",
      color: "#e6aeeb",
      image: LogoGiordano,
      link_proceso: "https://www.youtube.com/watch?v=UlHy_ezqhgw",
    },
    {
      title: "julia frosi",
      description:
        "La creación del imagotipo para Julia Frosi surgió en el año 2019. La clienta solicitó un branding para la apertura de su estudio de canto. El mismo debía reflejar el concepto de onda sonora al mismo tiempo que equilibrio. Como extra se buscó incorporar las iniciales de su nombre, el cual es el mismo nombre de su estudio. ",
      year: "2019",
      bgColor: "#3F3F3F",
      color: "silver",
      image: LogoFrosi,
      link_proceso: "https://www.youtube.com/watch?v=tVntte_bqeQ",
    },
    {
      title: "joystuk",
      description:
        "Joystusk es un proyecto académico creado en el año 2019 en la materia Diseño Gráfico Publicitario I, el mismo consistió en la creación de un imagotipo en donde había que combinar un animal con un producto. Y para esta combinación se eligió una morsa y joysticks. Acompañado a esto, se generó toda la identidad corporativa de la marca para darte mayor soporte a la marca.",
      year: "2019",
      bgColor: "#D1D1D2",
      color: "#8D5A95",
      image: LogoJoystuk,
      link_proceso: "https://www.youtube.com/watch?v=iRBREOZhyJk",
    },
    {
      title: "NUTRIARTE",
      description:
        "Nutriarte es la identidad corporativa perteneciente a la nutricionista Vanina Minniti. Su emprendimiento originalmente tenía un imagotipo con demasiados colores y muy cargado visualmente, de está forma no funcionaba bien en reducciones y no era fácilmente reconocible.",
      year: "2018",
      bgColor: "#D1D1D2",
      color: "#8DAAAB",
      image: Nutriarte,
      haveProcess: false,
      openModal: true,
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
              haveProcess={project.haveProcess}
              link_proceso={project.link_proceso}
              type="image"
              openModal={project.openModal}
            />
          );
        })}
      </div>
    </>
  );
}

export default Diseno;
