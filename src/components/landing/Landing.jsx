import "./landing.scss";
import { motion } from "framer-motion";
import logo from '../../../public/logo.png';
import { ReactTyped } from "react-typed";
import scroll from '../../../public/scroll.png';

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const words = ["Tech Solutions", "Consulting", "Software Development", "Cybersecurity", "Cloud Solutions", "IT Infrastructure Setup"];


const Landing = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Welcome</motion.h2>
          <motion.h1 variants={textVariants}
            style={{ overflow: 'hidden !important' }}
          >
            Your Partner in &nbsp; <br />
            <ReactTyped
              strings={words}
              typeSpeed={90}
              loop
              backSpeed={20}
              cursorChar="_"
              showCursor={true}
            />

          </motion.h1>
          <p>
            TechTeamWave provides tailored IT services, including infrastructure setup, cloud solutions, software development, and cybersecurity, to drive your business forward.
          </p>
          <motion.div variants={textVariants} className="buttons">
            {/* <motion.button variants={textVariants}>
              Get Services
            </motion.button> */}
            <motion.button variants={textVariants}>Contact Us</motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src={scroll}
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Tech Consulting
      </motion.div>
      <div className="imageContainer">
        <img className="animatedImage" src={logo} alt="" />
      </div>
    </div>
  );
};

export default Landing;
