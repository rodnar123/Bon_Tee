import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "Printing",
    img: "./printing.png",
    description:
      "Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add.",
  },
  {
    id: 2,
    title: "Labelling",
    img: "./labelling.png",
    description:
      "Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add.",
  },
  {
    id: 3,
    title: "Graphic/Desgin",
    img: "./design.png",
    description:
      "Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add.",
  },
  {
    id: 4,
    title: "Much More",
    img: "./more.png",
    description:
      "Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>

          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button>See Testimonials</button>
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
        <motion.div className="progressBar" style={{ scaleX }}></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
