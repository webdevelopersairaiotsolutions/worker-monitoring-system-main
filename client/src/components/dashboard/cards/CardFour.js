import React from "react";
import { motion } from "framer-motion";

const CardFour = () => {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative rounded-lg bg-gradient-to-br from-yellow-500 via-yellow-400 to-orange-500 p-6 shadow-lg overflow-hidden"
      style={{
        backdropFilter: "blur(10px)",
      }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          
          <div>
            <h1 className="text-white text-xl font-semibold">Equipment Status</h1>
            <span className="text-sm font-medium text-white">Available: 20</span>
          </div>
        </div>
        <div className="w-14 h-14 bg-teal-700 rounded-full flex items-center justify-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-2xl font-bold text-gray-200"
          >
            80%
          </motion.span>
        </div>
      </div>
      <div className="relative w-full h-2 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-500">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "80%" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-0 left-0 h-2 rounded-full bg-white"
        />
      </div>
    </motion.div>
  );
};

export default CardFour;
