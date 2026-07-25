import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="text-center pt-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span className="inline-flex items-center rounded-full bg-indigo-100 text-indigo-700 px-4 py-2 text-sm font-semibold">
          ✨ Powered by Gemini AI
        </span>

        <h1 className="mt-8 text-6xl md:text-7xl font-black tracking-tight text-gray-900 leading-tight">
          Study Smarter
          <br />
          with AI
        </h1>

        <p className="mt-8 max-w-3xl mx-auto text-xl text-gray-500 leading-9">
          Turn lecture notes, PDFs and textbooks into AI-generated summaries,
          flashcards and quizzes in seconds.
        </p>
      </motion.div>
    </section>
  );
}

export default Hero;