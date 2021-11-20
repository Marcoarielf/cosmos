import React from "react";
import Header from "../../share/components/header/header";
import Article from "../../share/components/article/article";
import PreviewTerraondistas from "./../../images/vfx/terraondistas.png";
import PreviewDark from "./../../images/vfx/dark.png";
import PreviewSexting from "./../../images/vfx/sexting.png";
import PreviewAndroid from "./../../images/vfx/android.png";
import PreviewGalaxia from "./../../images/vfx/space.png";
import css from "./styles.module.scss";

function Vfx() {
  const titleHeader = "vfx";
  const descriptionHeader =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";

  const projects = [
    {
      title: "terraondistas",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      year: "2020",
      bgColor: "#EEA635",
      color: "#EEA635",
      image: PreviewTerraondistas,
    },
    {
      title: "dark",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      year: "2020",
      bgColor: "#3F3F3F",
      color: "silver",
      image: PreviewDark,
    },
    {
      title: "sexting",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      year: "2018",
      bgColor: "#EAC6A6",
      color: "#EAC6A6",
      image: PreviewSexting,
    },
    {
      title: "android",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      year: "2019",
      bgColor: "#C5DFB5",
      color: "#C5DFB5",
      image: PreviewAndroid,
    },
    {
      title: "galaxia",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      year: "2019",
      bgColor: "#6C98B0",
      color: "#6C98B0",
      image: PreviewGalaxia,
    },
  ];

  return (
    <>
      <Header title={titleHeader} description={descriptionHeader} />
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

export default Vfx;
