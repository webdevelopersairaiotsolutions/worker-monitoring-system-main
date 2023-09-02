import React from "react";
import { motion } from "framer-motion";

const CardThree = () => {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative rounded-lg bg-gradient-to-br from-green-400 via-green-500 to-green-600 p-6 shadow-lg overflow-hidden"
      style={{
        backdropFilter: "blur(10px)",
      }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          
          <div>
            <h1 className="text-white text-xl font-semibold">Anomaly Detection</h1>
            <span className="text-sm font-medium text-gray-300">Occurrences: 10</span>
          </div>
        </div>
        <div className="w-14 h-14 bg-green-700 rounded-full flex items-center justify-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-2xl font-bold text-white"
          >
            15%
          </motion.span>
        </div>
      </div>
      <div className="relative w-full h-2 rounded-full bg-gradient-to-r from-green-400 via-green-500 to-green-600">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "15%" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-0 left-0 h-2 rounded-full bg-white"
        />
      </div>
    </motion.div>
  );
};

export default CardThree;
