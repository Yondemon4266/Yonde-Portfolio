import React from "react";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import ContactForm from "../components/ContactForm";
import Buttons from "../components/Buttons";
import { CopyToClipboard } from "react-copy-to-clipboard";
import SocialNetwork from "../components/SocialNetwork";
import { motion } from "framer-motion";

const Contact = () => {
  const handleCopyClick = (e) => {
    const emailCopied = document.getElementById("emailCopied");
    const phoneCopied = document.getElementById("phoneCopied");

    if (e.target.id === "emailText") {
      emailCopied.textContent = "Email copié !";

      setTimeout(() => {
        emailCopied.textContent = "";
      }, 2000);
    }
    if (e.target.id === "phoneText") {
      phoneCopied.textContent = "Téléphone copié !";
      setTimeout(() => {
        phoneCopied.textContent = "";
      }, 2000);
    }
  };

  const pageTransition = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: 300,
    },
  };
  return (
    <main>
      <Mouse />
      <motion.div
        className="contact"
        initial="out"
        animate="in"
        exit="out"
        transition={{ duration: 0.3 }}
        variants={pageTransition}
      >
        <Navigation />
        <Logo />
        <ContactForm />
        <div className="contact-infos">
          <div className="address">
            <div className="content">
              <h4>Adresse</h4>
              <p className="hover">12 rue Laplace</p>
              <p className="hover">69000 Lyon</p>
            </div>
          </div>
          <div className="phone">
            <div className="content">
              <h4>Téléphone</h4>
              <CopyToClipboard text="0683794300" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={(e) => handleCopyClick(e)}
                  id="phoneText"
                >
                  06 83 79 43 00
                </p>
              </CopyToClipboard>
              <p id="phoneCopied" className="clipboard copy"></p>
            </div>
          </div>
          <div className="email">
            <div className="content">
              <h4>Email</h4>
              <CopyToClipboard text="alisan4299@gmail.com" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={(e) => handleCopyClick(e)}
                  id="emailText"
                >
                  alisan4299@gmail.com
                </p>
              </CopyToClipboard>
              <p id="emailCopied" className="copy"></p>
            </div>
          </div>
          <SocialNetwork />
          <div className="credits">
            <p>Yondemon - 2023</p>
          </div>
        </div>
        <Buttons left={"/projet-4"} />
      </motion.div>
    </main>
  );
};

export default Contact;
