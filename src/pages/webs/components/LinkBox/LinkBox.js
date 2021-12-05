import React from "react";
import css from "./styles.module.scss";

function Webs({ data }) {
  return (
    <div className={css.container}>
      {data.map((web) => (
        <a target="_blank" href={web.link}>
          {web.nombre}
        </a>
      ))}
    </div>
  );
}

export default Webs;
