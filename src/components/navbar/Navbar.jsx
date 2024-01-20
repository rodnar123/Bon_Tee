import { motion } from "framer-motion";
import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Bon Tee Sales
        </motion.span>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1.5, scale: 1.5 }}
          transition={{ duration: 0.5 }}
          className="social"
        >
          <a href="#">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="#">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="#">
            <img src="/youtube.png" alt="" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
