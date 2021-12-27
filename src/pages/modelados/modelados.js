import React from "react";
import Header from "./../../share/components/header/header";
import ModelDetail from "./components/modelDetail/modelDetail";
import css from "./styles.module.scss";
import { Link } from "react-router-dom";

function Modelados() {
  const titleHeader = "MODELADO 3D";
  const descriptionHeader =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";

  return (
    <>
      <Header
        title={titleHeader}
        description={descriptionHeader}
        bg="header_3d"
      />
      <div className={css.containerModels}>
        <ModelDetail
          url="https://www.artstation.com/embed/37098047"
          linkProceso="https://www.youtube.com/embed/7QmZBZQT5q0"
          title="dragon"
          description="DRAGÓN STEAMPUNK fue un proyecto generado en 2020 con fines académicos. 
          El modelado fue generado a partir de 3D Max en low poly con una cantidad de 115.464 vértices y se utilizó RizomUV y Substance Painter para el texturizado y render. Finalmente para el renderizado se usó V-Ray y Marmoset.
          Este fue un elemento perteneciente a una habitación con objetos que continuaron la misma temática steampunk."
        />
        <ModelDetail
          url="https://www.artstation.com/embed/37032877"
          linkProceso="https://www.youtube.com/embed/XdQ6aM3rCjI"
          title="dron"
          description="DRON fue un proyecto generado en 2019 con fines académicos. 
          El modelado fue hecho en 3dsMax con temática Steampunk. Se utilizó RizomUV y Substance Painter para el texturizado y render. Finalmente para el renderizado se usó V-Ray y Marmoset."
        />
        <ModelDetail
          url="https://www.artstation.com/embed/43957287"
          linkProceso="https://www.youtube.com/embed/bStc8fiGJ4I"
          title="Sorting Hat"
          description="SOMBRERO SELECCIONADOR Harry Potter. Fue un proyecto generado en 2020 con fines académicos. 
          El modelado fue esculpido en zBrush. Se utilizó RizomUV y Substance Painter para el texturizado y render. Finalmente para el renderizado se usó V-Ray y Marmoset."
        />
        <ModelDetail
          url="https://www.artstation.com/embed/37098111"
          linkProceso="#"
          title="war machine"
          description="WAR MACHINE fue un proyecto generado en 2020 con fines académicos. 
          El modelado fue generado a partir de 3D Max en low poly con una cantidad de 89.961 vértices y se utilizó RizomUV y Substance Painter para el texturizado y render. Finalmente para el renderizado se usó V-Ray y Marmoset."
          haveProcess={false}
        />
        <ModelDetail
          url="https://www.artstation.com/embed/43954933"
          linkProceso="#"
          title="GROOUT"
          description="GROOUT. Fue un proyecto generado en 2020 para la materia Animación de Personajes. 
          El modelado fue hecho en 3dsMax y texturizado en Substance Painter. Se utilizó Mixamo para animar. Finalmente para el renderizado se usó V-Ray y Marmoset."
          haveProcess={false}
        />
      </div>
    </>
  );
}

export default Modelados;
