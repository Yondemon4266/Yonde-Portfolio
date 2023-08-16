import React, { useEffect } from "react";

const SocialNetwork = () => {

  useEffect(() => {
    const icon = document.querySelector(".social-network a") as HTMLElement;
    
    icon.addEventListener("mouseover", (e: any) => {
      icon.style.transform = `translate(${e.offsetX - 20}px, ${
        e.offsetY - 13
      }px)`;
    });

    icon.addEventListener("mouseleave", () => {
        icon.style.transform = "";
    })
  }, []);

  return (
      <div className="social-network">
        <ul className="content">
          <a
            href="https://github.com/Yondemon4266"
            target="_blank"
            rel="noopener noreferrer"
            className="hover"
          >
            <li>
              <i className="fa-brands fa-github"></i>
            </li>
          </a>
        </ul>
      </div>
  );
};

export default SocialNetwork;
