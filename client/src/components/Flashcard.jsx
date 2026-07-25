import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Flashcard({ question, answer }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <AnimatePresence mode="wait">
        {!flipped ? (
          <motion.div
            key="front"
            initial={{ opacity: 0, rotateY: -90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: 90 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-md border p-8 min-h-[220px] flex flex-col justify-center"
          >
            <h3 className="text-xl font-bold text-indigo-600">
              Question
            </h3>

            <p className="mt-6 text-lg">
              {question}
            </p>

            <p className="mt-8 text-sm text-gray-400">
              Click to reveal answer
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="back"
            initial={{ opacity: 0, rotateY: -90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: 90 }}
            transition={{ duration: 0.3 }}
            className="bg-indigo-600 text-white rounded-2xl shadow-md p-8 min-h-[220px] flex flex-col justify-center"
          >
            <h3 className="text-xl font-bold">
              Answer
            </h3>

            <p className="mt-6 text-lg">
              {answer}
            </p>

            <p className="mt-8 text-sm text-indigo-200">
              Click to go back
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Flashcard;