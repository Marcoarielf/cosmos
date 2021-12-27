import React from "react";
import Header from "../../share/components/header/header";
import Article from "../../share/components/article/article";
import PreviewTerraondistas from "./../../images/vfx/krypto.jpg";
import PreviewDark from "./../../images/vfx/dark_m.jpg";
import PreviewBranca from "./../../images/vfx/branca_m.jpg";
import PreviewTHT from "./../../images/vfx/tht.jpg";
import PreviewGalaxia from "./../../images/vfx/space.png";
import css from "./styles.module.scss";

function Vfx() {
  const titleHeader = "vfx";
  const descriptionHeader =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";

  const projects = [
    {
      title: "BRANCA",
      description: `El videocaso Branca Menta fue creado a fines del 2021 para participar en los premios Diente 2021 en la categoría diseño. El objetivo del caso es principalmente dar a conocer el rebranding que tuvo la marca en las redes, conectando con su público con colores colores caramelo y una paleta de colores con sutiles toques de menta de la nueva receta del producto. \n Fue expuesto en los premios Diente 2021 en la categoría diseño como un trabajo realizado por la agencia DON`,
      year: "2021",
      bgColor: "#141414",
      color: "gray",
      image: PreviewBranca,
      link_proceso: "https://www.youtube.com/embed/5UlMj83KEP4",
    },
    {
      title: "dark",
      description:
        "DARK surgió en el año 2019 con fines académicos. Su propósito fue utilizar distintas técnicas vistas en clase para ser presentadas en un proyecto final utilizando After effects como software principal, Photoshop para mapping, softwares de tracking, entre otros.",
      year: "2019",
      bgColor: "#141414",
      color: "silver",
      image: PreviewDark,
      link_proceso: "https://www.youtube.com/embed/fbUrRFiIe4k",
    },

    {
      title: "THT",
      description:
        "THE HANDMAID'S TALE surgió en el año 2020 con fines académicos. Su propósito fue utilizar la técnica Parallax, en dónde a partir de imágenes 2D se puede llegar a hacer un efecto de profundidad ilusoria al 3D. Se recolectaron imágenes de la serie en alta definición para armar una pieza artística que se podría utilizar como intro de la misma.",
      year: "2020",
      bgColor: "#141414",
      color: "gray",
      image: PreviewTHT,
      link_proceso: "https://www.youtube.com/embed/Fwu9ZmCMxYU",
    },
    {
      title: "KRYZPO WAVY",
      description:
        "Kryzpo es una marca de snacks que se comercializan en Chile, a fines del 2021 decidieron lanzar un nuevo producto “Kryzpo wavy”, por lo tanto en la Agencia Don hizo un pitch obteniendo como resultados las piezas que se muestran a continuación. La idea es jugar con el concepto de la forma con ondas de las papas, que es lo que lo diferencia del resto de sus productos, y con esto como claim de la campaña usar “Pruébalas y ponle onda”.",
      year: "2021",
      bgColor: "#141414",
      color: "gray",
      image: PreviewTerraondistas,
      link_proceso: "https://www.youtube.com/embed/HJ5ck2yfls4",
    },
    {
      title: "Starwars",
      description:
        "Starwars fue un proyecto académico del 2020, para la materia Posproducción y Efectos Visuales 2, en donde tomó un plano aéreo de la facultad de derecho, se realizó un trackeo del video, y se integraron diferentes naves pertenecientes al imperio, y se realizó un matte painting para generar una integración total en la escena.",
      year: "2020",
      bgColor: "#141414",
      color: "gray",
      image: PreviewGalaxia,
      link_proceso: "https://www.youtube.com/embed/R7rTITwgnuE",
    },
  ];

  return (
    <>
      <Header
        bg="header_vfx"
        title={titleHeader}
        description={descriptionHeader}
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
              link_proceso={project.link_proceso}
            />
          );
        })}
      </div>
    </>
  );
}

export default Vfx;
