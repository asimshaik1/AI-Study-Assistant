import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TextInput from "../components/TextInput";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Footer from "../components/Footer";
import StudyHistorySidebar from "../components/StudyHistorySidebar";

function Home() {
  const [showHistory, setShowHistory] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-indigo-100">
      <Navbar />

      {/* History Button */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-end">
        <button
          onClick={() => setShowHistory(true)}
          className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          📚 History
        </button>
      </div>

      {/* History Drawer */}
      {showHistory && (
        <StudyHistorySidebar
          onClose={() => setShowHistory(false)}
        />
      )}

      <Hero />

      <TextInput />

      <Features />

      <HowItWorks />

      <Footer />
    </div>
  );
}

export default Home;