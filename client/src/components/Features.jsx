import FeatureCard from "./FeatureCard";

function Features() {
  return (
    <section className="max-w-6xl mx-auto mt-28 grid md:grid-cols-3 gap-8 px-6">

      <FeatureCard
        icon="📚"
        title="AI Flashcards"
        description="Generate interactive flashcards from your study notes instantly."
      />

      <FeatureCard
        icon="🧠"
        title="Smart Quiz"
        description="Practice with AI-generated multiple-choice questions."
      />

      <FeatureCard
        icon="📈"
        title="Track Progress"
        description="Monitor your learning journey and improve over time."
      />

    </section>
  );
}

export default Features;