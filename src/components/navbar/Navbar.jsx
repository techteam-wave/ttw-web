import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{ display: 'inline-flex', alignItems: 'center',overflow: 'hidden' }}
        >
          TechTeam &nbsp;
          {"Wave".split("").map((char, index) => (
            <motion.span
              key={index}
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2
                }
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
        {/* <div className="social">
          <a href="#">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="#">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="#">
            <img src="/youtube.png" alt="" />
          </a>
          <a href="#">
            <img src="/dribbble.png" alt="" />
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
