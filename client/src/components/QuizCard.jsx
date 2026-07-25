import { useState } from "react";

function QuizCard({ question, index, onAnswer }) {
  const [selected, setSelected] = useState("");
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    if (!selected || checked) return;

    setChecked(true);

    onAnswer(selected === question.correctAnswer);
  };

  return (
    <div className="border rounded-2xl p-6">

      <h3 className="text-xl font-bold">
        {index + 1}. {question.question}
      </h3>

      <div className="mt-6 space-y-3">

        {question.options.map((option, i) => {

          const isCorrect = option === question.correctAnswer;
          const isSelected = selected === option;

          let bg = "bg-slate-100";

          if (checked) {
            if (isCorrect) bg = "bg-green-200";
            else if (isSelected) bg = "bg-red-200";
          }

          return (
            <label
              key={i}
              className={`${bg} flex items-center gap-3 rounded-xl px-4 py-3 cursor-pointer transition`}
            >
              <input
                type="radio"
                disabled={checked}
                checked={selected === option}
                onChange={() => setSelected(option)}
              />

              {option}
            </label>
          );
        })}

      </div>

      {!checked ? (
        <button
          onClick={handleCheck}
          disabled={!selected}
          className="mt-6 bg-indigo-600 text-white px-5 py-3 rounded-xl disabled:opacity-50"
        >
          Check Answer
        </button>
      ) : (
        <p className="mt-6 font-semibold">
          {selected === question.correctAnswer
            ? "✅ Correct!"
            : `❌ Correct Answer: ${question.correctAnswer}`}
        </p>
      )}

    </div>
  );
}

export default QuizCard;