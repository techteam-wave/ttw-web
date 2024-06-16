import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          We specialize in providing innovative tech solutions
          <br /> to propel your business forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas ?
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>We help You</motion.b> Grow.
          </h1>
          <button>Contact Us</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Tech Services</h2>
          <p>
            We provide comprehensive technology services tailored to your business needs. From IT infrastructure setup, cloud solutions, to software development and cybersecurity, our team of experts are committed to driving your business forward with innovative and reliable tech solutions.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Consulting</h2>
          <p>
            We offer expert consulting services to help your business navigate the complexities of the digital world. Our team of experienced consultants provide strategic insights and practical solutions to help you optimize your operations, improve your digital strategy, and drive business growth.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Cybersecurity</h2>
          <p>
            We offer specialized cybersecurity services to protect your business from digital threats. Our team will help you understand your security posture, identify vulnerabilities, and implement robust security measures. We aim to safeguard data and digital assets, ensuring business continuity and trust.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Talent Management</h2>
          <br/>

          <p>
            We offer comprehensive talent management solutions. Our services include talent acquisition, development, and retention strategies. We aim to help your organization build a high-performing workforce that drives business growth and success.
          </p>
          <br/>
          <br/>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
