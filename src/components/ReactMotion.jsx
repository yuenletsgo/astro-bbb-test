import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";

const ReactMotion = () => {
  return (
    <>
    <motion.div
      whileHover={{ scale: 1.2 }}
    >ReactMotion</motion.div>
    <motion.div
      initial={{
        opacity: "0",
        y: "16px"
      }}
      animate={{
        opacity: "1",
        y: "0"
      }}
      transition={{ delay: 0.5, duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
    >
        Animation2
      </motion.div></>
  )
}

export default ReactMotion