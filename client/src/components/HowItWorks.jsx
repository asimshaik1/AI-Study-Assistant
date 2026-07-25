function HowItWorks() {
  return (
    <section className="max-w-6xl mx-auto mt-32 px-6 text-center">

      <h2 className="text-5xl font-bold text-gray-900">
        How It Works
      </h2>

      <div className="grid md:grid-cols-3 gap-10 mt-16">

        <div>
          <div className="text-5xl">📝</div>
          <h3 className="mt-5 text-2xl font-semibold">
            Paste Notes
          </h3>
          <p className="mt-3 text-gray-500">
            Add your lecture notes or textbook content.
          </p>
        </div>

        <div>
          <div className="text-5xl">✨</div>
          <h3 className="mt-5 text-2xl font-semibold">
            AI Generates
          </h3>
          <p className="mt-3 text-gray-500">
            AI creates summaries, flashcards and quizzes.
          </p>
        </div>

        <div>
          <div className="text-5xl">🎯</div>
          <h3 className="mt-5 text-2xl font-semibold">
            Study Smarter
          </h3>
          <p className="mt-3 text-gray-500">
            Learn faster with interactive practice.
          </p>
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;