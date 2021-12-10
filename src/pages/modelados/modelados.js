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
          linkProceso="#"
          title="dragon"
          description="Modelado 3D. Estilo steampunk."
        />
        <ModelDetail
          url="https://www.artstation.com/embed/37032877"
          linkProceso="#"
          title="dron"
          description="Modelado 3D. Estilo steampunk."
        />
        <ModelDetail
          url="https://www.artstation.com/embed/43957287"
          linkProceso="#"
          title="gorro HP"
          description="Modelado y esculpido en zBrush"
        />
        <ModelDetail
          url="https://www.artstation.com/embed/37098111"
          linkProceso="#"
          title="war machine"
          description="Modelado 3D."
        />
        <ModelDetail
          url="https://www.artstation.com/embed/43954933"
          linkProceso="#"
          title="GROOUT"
          description="Modelado 3D. Estilo steampunk."
        />
      </div>
    </>
  );
}

export default Modelados;
