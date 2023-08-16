import React, { useEffect } from "react";

const Mouse = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor") as HTMLElement;

    window.addEventListener("mousemove", (e: any) => {
      cursor.style.top = e.y + "px";
      cursor.style.left = e.x + "px";
    });

    const hoverElements = 
      document.querySelectorAll(".hover");

    hoverElements.forEach((link) => {
      link.addEventListener("mouseover", () => {
        cursor.classList.add("hovered");
      });

      link.addEventListener('mouseleave', () => {
        cursor.style.transition = ".3s ease-out";
        cursor.classList.remove('hovered');
      })

    });
  }, []);
  return <span className="cursor"></span>;
};

export default Mouse;
