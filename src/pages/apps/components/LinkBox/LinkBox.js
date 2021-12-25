import React, { useState } from "react";
import Modal from "../../../../Modal";
import css from "./styles.module.scss";

function Webs({ data, juego = "" }) {
  const [isOpenModal1, setIsOpenModal1] = useState(false);
  const [isOpenModal2, setIsOpenModal2] = useState(false);
  return (
    <>
      <div className={css.container}>
        {data.map((web) => {
          return web.type === "web" ? (
            <div>
              <a target="_blank" href={web.link}>
                {web.nombre}
              </a>
            </div>
          ) : (
            <div>
              {web.nombre === "cuentasClaras" ? (
                <button onClick={() => setIsOpenModal2(true)}>
                  {web.nombre}
                </button>
              ) : (
                <button onClick={() => setIsOpenModal1(true)}>
                  {web.nombre}
                </button>
              )}
            </div>
          );
        })}
      </div>
      <Modal isOpenModal={isOpenModal1} onClose={() => setIsOpenModal1(false)}>
        Podés jugar esto ingresando a la carpeta que te enviamos previamente por
        whatsapp.
      </Modal>
      <Modal isOpenModal={isOpenModal2} onClose={() => setIsOpenModal2(false)}>
        Podés probar la aplicación <strong>Cuentas claras</strong> desde tu
        celular, si previamente instalaste el <i>.apk</i> que enviamos por
        whatsapp!
      </Modal>
    </>
  );
}

export default Webs;
