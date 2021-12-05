import React, { useEffect } from "react";
import Header from "../../share/components/header/header";
import Campaña from "./poster-pelv4.jpg";
import css from "./styles.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Campanias() {
  useEffect(() => {
    const boxVideos = document.querySelectorAll(`.img_v_1`);
    //convert boxVideos to an array
    const boxVideosArray = Array.prototype.slice.call(boxVideos);

    console.log(boxVideos, boxVideosArray);

    boxVideosArray.map((video) => {
      if (video) {
        // 1. Set the function and variables
        function parallaxIt(e, target, movement = 1) {
          const boundingRect = video.getBoundingClientRect();
          const relX = e.clientX - boundingRect.left;
          const relY = e.clientY - boundingRect.top;
          const scrollTop =
            window.pageYOffset || document.documentElement.scrollTop;

          gsap.to(target, {
            x: (relX - boundingRect.width / 2) * movement,
            y: (relY - boundingRect.height / 2 - scrollTop) * movement,
            ease: "power1",
            duration: 0.9,
          });
        }

        // 2. Call the function
        function callParallax(e) {
          parallaxIt(e, `.btn_1`);
        }

        video.addEventListener("mousemove", function (e) {
          callParallax(e);
        });

        video.addEventListener("mouseleave", function (e) {
          gsap.to(".button_play", {
            scale: 1,
            x: 0,
            y: 0,
            ease: "power3",
            duration: 1.1,
          });
        });
      }
    });
    // end animate cursor
  }, []);

  return (
    <>
      <Header
        title="campañas publicitarias"
        description="El bullying en los videojuegos afecta a muchas personas, por eso Naguará team desea hacer una campaña de concientización. Teniendo en cuenta que los juegos Battle Royale cada vez son más populares, nos centramos en qué los diferencia, y es la existencia de un área segura y una insegura. El último en quedar en pie, GANA. Pero alguna vez, ¿te pusiste a pensar que significa esto para una persona que sufre bullying? ¿Existe un área segura/insegura en la vida real?"
      />
      <a
        className={`${css.video_thumb_cont} video_thumb_cont myBtn modalVideo`}
        id="1"
      >
        <div className={`${css.out_of_box} out_of_box`}>
          <span className={`${css.button_play} button_play btn_1}`}>Play</span>
          <img src={Campaña} className={`${css.img_video} img_video img_v_1`} />
        </div>
      </a>
    </>
  );
}

export default Campanias;
