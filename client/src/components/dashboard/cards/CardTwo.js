import React from "react";
import { motion } from "framer-motion";

const CardTwo = () => {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative rounded-lg bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 p-6 shadow-lg overflow-hidden"
      style={{
        backdropFilter: "blur(10px)",
      }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <div>
            <h1 className="text-white text-xl font-semibold">Attendance</h1>
            <p className="text-sm font-medium text-white">Yesterday: 85%</p>
            <p className="text-sm font-medium text-white">Today: 90%</p>
          </div>
        </div>
        <div className="w-14 h-14 bg-pink-600 rounded-full flex items-center justify-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-2xl font-bold text-yellow-400"
          >
            +5%
          </motion.span>
        </div>
      </div>
      <div className="relative w-full h-2 rounded-full bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "75%" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-0 left-0 h-2 rounded-full bg-white"
        />
      </div>
    </motion.div>
  );
};

export default CardTwo;
