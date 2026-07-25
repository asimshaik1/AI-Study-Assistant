import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white">
            <Sparkles size={20} />
          </div>

          <h1 className="text-2xl font-bold tracking-tight">
            AI Study Assistant
          </h1>
        </div>

        <div className="hidden md:flex gap-10 text-gray-600 font-medium">
          <a href="#features" className="hover:text-indigo-600">
            Features
          </a>

          <a href="#how" className="hover:text-indigo-600">
            How it Works
          </a>

          <a href="#about" className="hover:text-indigo-600">
            About
          </a>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;