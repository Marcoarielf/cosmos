import React, { useState } from "react";
import Modal from "../../../../Modal";
import css from "./styles.module.scss";

function Webs({ data }) {
  const [isOpenModalCC, setIsOpenModalCC] = useState(false);
  const [isOpenModalHD, setIsOpenModalHD] = useState(false);
  const [isOpenModalNI, setIsOpenModalNI] = useState(false);
  const [isOpenModalNII, setIsOpenModalNII] = useState(false);

  const handlerModal = (type) => {
    type === "cc"
      ? setIsOpenModalCC(true)
      : type === "healthy"
      ? setIsOpenModalHD(true)
      : type === "natura1"
      ? setIsOpenModalNI(true)
      : setIsOpenModalNII(true);
  };
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
              onClick={() => handlerModal(web.bg)}
            >
              <button type="button">{web.nombre}</button>
            </div>
          );
        })}
      </div>
      <Modal
        isOpenModal={isOpenModalCC}
        onClose={() => setIsOpenModalCC(false)}
      >
        Para utilizar <i>Cuentas Claras</i> es necesario descargar la
        aplicación. <br />
        La podés encontrar <br />
        <a
          style={{ textDecoration: "underline", color: "white" }}
          target="_blank"
          href="https://drive.google.com/file/d/17wUY6GuXVKNxw4Tli0XdYGEsL5vTYVcw/view"
        >
          en este link
        </a>
      </Modal>
      <Modal
        isOpenModal={isOpenModalHD}
        onClose={() => setIsOpenModalHD(false)}
      >
        Para utilizar <i>Healthy Dog</i> es necesario descargar la aplicación.{" "}
        <br />
        La podés encontrar&nbsp;
        <a
          style={{ textDecoration: "underline", color: "white" }}
          target="_blank"
          href="https://drive.google.com/file/d/1x75KpByaKv6I_z22IbsdgYVfPe3G9sRc/view?usp=sharing"
        >
          en este link
        </a>
      </Modal>
      <Modal
        isOpenModal={isOpenModalNI}
        onClose={() => setIsOpenModalNI(false)}
      >
        Para conocer <i>Natura - Inspirar</i> es necesario descargar la web.{" "}
        <br />
        La podés encontrar&nbsp;
        <a
          style={{ textDecoration: "underline", color: "white" }}
          target="_blank"
          href="https://drive.google.com/drive/folders/1n9ce5oe4-YrREhqHmSIewrVZrZmWXgRz?usp=sharing"
        >
          en este link
        </a>{" "}
        y descargar la carpeta para luego abrir el archivo "index.html"
      </Modal>
      <Modal
        isOpenModal={isOpenModalNII}
        onClose={() => setIsOpenModalNII(false)}
      >
        Para conocer <i>Natura - Involucrar</i> es necesario descargar la web.{" "}
        <br />
        La podés encontrar&nbsp;
        <a
          style={{ textDecoration: "underline", color: "white" }}
          target="_blank"
          href="https://drive.google.com/drive/folders/1LX-iqIr6Y19qvJSZouGihTGszlvRRBf6?usp=sharing"
        >
          en este link
        </a>{" "}
        y descargar la carpeta para luego abrir el archivo "index.html"
      </Modal>
    </>
  );
}

export default Webs;
