import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Car Rental App",
    img: "https://th.bing.com/th/id/OIP.xXU47TFOTQAXUJT3-C0j4AHaFj?rs=1&pid=ImgDetMain",
    desc: "Streamline your car rental experience with our innovative app, designed to provide seamless booking and management solutions for both customers and rental companies.",
  },
  {
    id: 2,
    title: "Agile Training",
    img: "https://i0.wp.com/jordanjob.me/wp-content/uploads/2015/12/Scrum-Diagram-JordanJob.me_.png?fit=3000%2C2250&ssl=1",
    desc: "Unlock your team's full potential with our expert-led agile training sessions, tailored to enhance collaboration, adaptability, and efficiency in fast-paced environments.",
  },
  {
    id: 3,
    title: "Portfolio Website",
    img: "https://th.bing.com/th/id/OIP.EC17zW2qcjx1N-iAX9izfwHaFj?rs=1&pid=ImgDetMain",
    desc: "Showcase your skills and achievements with a professional portfolio website, carefully crafted to highlight your expertise and attract potential clients. ",
  },
  {
    id: 4,
    title: "Music App",
    img: "https://cdn.dribbble.com/users/4603219/screenshots/12209810/dribbble_shot_hd_-_1_4x.png",
    desc: "Revolutionize the music industry with our cutting-edge app, offering intuitive discovery, personalized playlists, and seamless streaming for a new generation of music lovers.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
