function TabButton({ active, icon, title, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center gap-2
        px-6 py-3 rounded-xl
        font-semibold transition-all
        ${
          active
            ? "bg-indigo-600 text-white shadow-lg"
            : "bg-white hover:bg-indigo-50 text-gray-700"
        }
      `}
    >
      {icon}
      {title}
    </button>
  );
}

export default TabButton;