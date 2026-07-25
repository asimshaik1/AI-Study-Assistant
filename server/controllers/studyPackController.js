import StudyPack from "../models/StudyPack.js";

export const saveStudyPack = async (req, res) => {
  try {
    const { title, summary, flashcards, quiz } = req.body;

    const studyPack = await StudyPack.create({
  title,
  summary,
  flashcards,
  quiz,
});

    res.status(201).json({
      success: true,
      message: "Study Pack saved successfully.",
      studyPack,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
export const getStudyPacks = async (req, res) => {
  try {
    const studyPacks = await StudyPack.find().sort({
  createdAt: -1,
});

    res.status(200).json({
      success: true,
      studyPacks,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};