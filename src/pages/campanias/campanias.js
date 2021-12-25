import React, { useEffect } from "react";
import Header from "../../share/components/header/header";
import css from "./styles.module.scss";

function Campanias() {
  return (
    <>
      <Header
        title="campañas publicitarias"
        description="El bullying en los videojuegos afecta a muchas personas, por eso Naguará team desea hacer una campaña de concientización. Teniendo en cuenta que los juegos Battle Royale cada vez son más populares, nos centramos en qué los diferencia, y es la existencia de un área segura y una insegura. El último en quedar en pie, GANA. Pero alguna vez, ¿te pusiste a pensar que significa esto para una persona que sufre bullying? ¿Existe un área segura/insegura en la vida real?"
        bg="header_camps"
      />
      <a
        className={`${css.video_thumb_cont} video_thumb_cont myBtn modalVideo`}
        id="1"
      >
        <div className={`${css.out_of_box} out_of_box`}>
          <iframe
            width="90%"
            height="90%"
            src="https://www.youtube.com/embed/MYc0xzfvnt8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </a>
    </>
  );
}

export default Campanias;
