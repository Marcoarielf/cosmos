import React, { useState } from "react";
import Modal from "../../../../Modal";
import css from "./styles.module.scss";

function Webs({ data }) {
  const [isOpenModal1, setIsOpenModal1] = useState(false);
  return (
    <>
      <div className={css.container}>
        {data.map((web) => {
          return web.type === "web" ? (
            <div
              className={css.containerCard}
              style={{
                backgroundImage: `linear-gradient(
                  to bottom,
                  rgba(56, 0, 66, 0.045),
                  rgb(0, 0, 0)
                ), url("/${web.bg}.${web.extension}")`,
                backgroundSize: "cover",
                backgroundPositionX: "50%",
              }}
            >
              <a target="_blank" href={web.link}>
                {web.nombre}
              </a>
            </div>
          ) : (
            <div
              className={css.containerCard}
              style={{
                backgroundImage: `linear-gradient(
                to bottom,
                rgba(56, 0, 66, 0.045),
                rgb(0, 0, 0)
              ), url("/${web.bg}.${web.extension}")`,
                backgroundSize: "cover",
                backgroundPositionX: "50%",
              }}
              onClick={() => setIsOpenModal1(true)}
            >
              <button type="button">{web.nombre}</button>
            </div>
          );
        })}
      </div>
      <Modal isOpenModal={isOpenModal1} onClose={() => setIsOpenModal1(false)}>
        Es necesario abrir este archivo desde la carpeta que previamente
        descargaste!
      </Modal>
    </>
  );
}

export default Webs;
