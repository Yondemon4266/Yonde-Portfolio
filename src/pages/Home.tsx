import React from "react";
import Navigation from "../components/Navigation";
import Mouse from "../components/Mouse";
import SocialNetwork from "../components/SocialNetwork";
import DynamicText from "../components/DynamicText";
import Buttons from "../components/Buttons";
import { motion } from "framer-motion";

const Home = () => {
  const variants = {
    initial: {
      opacity: 0,
      transition: {duration: 1},
      x: 200,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {duration: 0.3}
    },
    exit: {
      opacity: 0,
      transition: {duration: 0.3},
      x:-200
    }
  }
  return (
    <div>
      <Mouse />
      <div className="home">
        <Navigation />
        <SocialNetwork />
        <motion.div  className="home-main" initial="initial" animate="visible" exit="exit" variants={variants}>
          <div className="main-content">
            <motion.h1 drag dragConstraints={{left: -250,
            right: 950,
            top:-200,
            bottom: 250}}>Yondemon's agency</motion.h1>
            <motion.h2 drag dragConstraints={{left: -250,
            right: 950,
            top:-200,
            bottom: 250}}><DynamicText /></motion.h2>
            
          </div>
        </motion.div>
      </div>
      <Buttons right={"/projet-1"}/>
    </div>
  );
};

export default Home;
