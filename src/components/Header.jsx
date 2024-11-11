import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/danny_logo1.png";
import { Link } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";

const Header = () => {
  const [index, setIndex] = useState(0);
  const texts = [
    "....taste it!! Feel it",
    "Discover amazing tastes of pizza",
    "Order your favorite pizza here",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Variants for container animations
  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  // Variants for text animations
  const textVariants = {
    initial: { y: 20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    exit: {
      y: -20,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  const [menu, setMenu] = useState();
  const handleMenu = () => {
    setMenu(!menu);
  };
  return (
    <div id="Header">
      <div id="cover"></div>
      {menu ? (
        <div id="menubar">
          <ul>
            <Link to="/">
              <li onClick={handleMenu}>HOME</li>
            </Link>
            <hr />
            <Link to="/menu">
              {" "}
              <li onClick={handleMenu}>MENU</li>
            </Link>
            <hr />
            <Link to="/contact">
              {" "}
              <li onClick={handleMenu}>CONTACT</li>
            </Link>
            <hr />
          </ul>
        </div>
      ) : (
        <></>
      )}
      <div id="on-top">
        <div id="logo__nav">
          <div id="logo__area">
            <Link to="/">
              {" "}
              <img src={logo} alt="" />
            </Link>
          </div>
          <div id="nav__area">
            <IoMenuSharp id="menu" onClick={handleMenu} />

            <ul>
              <Link to="/">
                <li>HOME</li>
              </Link>
              <Link to="/menu">
                <li>MENU</li>
              </Link>
              <Link to="/contact">
                <li>CONTACT</li>
              </Link>
            </ul>
          </div>
        </div>
        {/* Rotating Text Animation */}
        <div className="h-16 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              variants={containerVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute w-full"
            >
              <motion.h2 variants={textVariants} className="text-2xl font-bold">
                {texts[index]}
              </motion.h2>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Header;
