import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

function StudyHistorySidebar({ onClose }) {
  const navigate = useNavigate();

  const [studyPacks, setStudyPacks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudyPacks = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await api.get("/studypacks", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setStudyPacks(response.data.studyPacks);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudyPacks();
  }, []);

  return (
    <div
      className="fixed inset-0 bg-black/40 z-50"
      onClick={onClose}
    >
      <div
        className="w-80 h-full bg-white shadow-2xl border-r p-5 overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">
            📚 Study History
          </h2>

          <button
            onClick={onClose}
            className="text-2xl hover:text-red-600"
          >
            ✕
          </button>
        </div>

        {loading ? (
          <p className="text-center mt-10">Loading...</p>
        ) : studyPacks.length === 0 ? (
          <p className="text-gray-500">
            No study packs yet.
          </p>
        ) : (
          <div className="space-y-4">
            {studyPacks.map((pack) => (
              <div
                key={pack._id}
                className="border rounded-lg p-3 hover:shadow-md transition"
              >
                <h3 className="font-semibold text-sm">
                  {pack.title}
                </h3>

                <p className="text-xs text-gray-500 mt-1">
                  {new Date(pack.createdAt).toLocaleDateString()}
                </p>

                <button
                  onClick={() =>
                    navigate("/dashboard", {
                      state: {
                        studyPack: pack,
                      },
                    })
                  }
                  className="mt-3 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
                >
                  Open
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default StudyHistorySidebar;