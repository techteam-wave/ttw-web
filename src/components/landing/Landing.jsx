import "./landing.scss";
import { motion } from "framer-motion";
import logo from '../../../public/logo.png';


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
          <motion.h1 variants={textVariants}>
            Your Partner in Tech Solutions
          </motion.h1>
          <p>
            At TechTeamWave, we offer comprehensive technology services tailored to your business needs. From IT infrastructure setup, cloud solutions, to software development and cybersecurity, our team of experts are committed to driving your business forward with innovative and reliable tech solutions.
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
            src="/scroll.png"
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
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default Landing;
