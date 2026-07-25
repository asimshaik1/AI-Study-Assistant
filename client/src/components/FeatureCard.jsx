function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
      <div className="text-5xl">{icon}</div>

      <h3 className="mt-6 text-2xl font-bold text-gray-900">
        {title}
      </h3>

      <p className="mt-3 text-gray-500 leading-7">
        {description}
      </p>
    </div>
  );
}

export default FeatureCard;