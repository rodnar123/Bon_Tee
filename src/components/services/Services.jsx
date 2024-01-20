import "./services.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const variants = {
  initial: {
    x: -500,
    opacity: 0,
    y: 100,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
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
      //   animate="animate"
      whileInView="animate"

      // ref={ref}
      // animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          We service you with <br />
          pride and passion
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/bp.png" alt="" />

          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Deals.
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Our</motion.b>{" "}
            Customers.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
        >
          <h2>Printing</h2>
          <p>
            We print designs to with perfections. What you see is what you get
          </p>
          <motion.button
            whileHover={{ backgroundColor: "black", color: "white" }}
          >
            Trigger
          </motion.button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
        >
          <h2>Labelling</h2>
          <p>We lable designs with perfections. What you see is what you get</p>
          <motion.button
            whileHover={{ backgroundColor: "black", color: "white" }}
          >
            Touch
          </motion.button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
        >
          <h2>Graphic Design</h2>
          <p>
            We design graphics with perfections. What you see is what you get
          </p>
          <motion.button
            whileHover={{ backgroundColor: "black", color: "white" }}
          >
            Spray
          </motion.button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
        >
          <h2>Much More</h2>
          <p>
            We style designs/patterns with perfections. What you see is what you
            get
          </p>
          <motion.button
            whileHover={{ backgroundColor: "black", color: "white" }}
          >
            Color
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
