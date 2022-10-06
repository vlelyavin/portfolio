import { useEffect } from "react";
import "./Cursor.scss";

export const Cursor = ({ visible, cursor }) => {
  useEffect(() => {
    const navButtons = document.querySelectorAll(".details__nav__button");
    const hovers = document.querySelectorAll(".hovereffect");
    const cursor = document.querySelector(".cursor");
    const projectsAppHeader = document.querySelector(".projects__app__header");
    const cross = document.querySelector(".details__button");
    const emailLink = document.querySelector("#email");
    const menuButtons = document.querySelectorAll(".menu__nav__button");
    hovers.forEach((hover) => {
      hover.addEventListener("mouseover", () => {
        cursor.style.transform = "scale(1.1) rotate(135deg)";
      });
      hover.addEventListener("mouseout", () => {
        cursor.style.transform = "scale(1) rotate(45deg)";
      });
    });

    if (menuButtons) {
      menuButtons.forEach((button) => {
        button.addEventListener("mouseover", () => {
          cursor.style.transform = "scale(1.1) rotate(135deg)";
        });
        button.addEventListener("mouseout", () => {
          cursor.style.transform = "scale(1) rotate(45deg)";
        });
      });
    }

    if (navButtons) {
      navButtons.forEach((button) => {
        button.addEventListener("mouseover", () => {
          cursor.style.transform = "scale(1.1) rotate(135deg)";
        });
        button.addEventListener("mouseout", () => {
          cursor.style.transform = "scale(1) rotate(45deg)";
        });
      });
    }

    if (cross) {
      cross.addEventListener("mouseover", () => {
        cursor.style.transform = "scale(1.1) rotate(135deg)";
      });
      cross.addEventListener("mouseout", () => {
        cursor.style.transform = "scale(1) rotate(45deg)";
      });
    }

    emailLink.addEventListener("mouseover", () => {
      cursor.style.transform = "scale(1.1) rotate(135deg)";
    });
    emailLink.addEventListener("mouseout", () => {
      cursor.style.transform = "scale(1) rotate(45deg)";
    });

    projectsAppHeader.addEventListener("mouseover", () => {
      cursor.style.filter = `invert()`;
    });
    projectsAppHeader.addEventListener("mouseout", () => {
      cursor.style.filter = ``;
    });
  }, [visible]);
  return (
    <div className="cursor" ref={cursor}>
      <div className="cursor__left"></div>
      <div className="cursor__right"></div>
    </div>
  );
};
