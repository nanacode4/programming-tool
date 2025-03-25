import React, { useState } from "react";
import { Box, Typography, Paper } from "@mui/material";
import FillBlankQuestion from "./FillBlankQuestion";
import { quizQuestions } from "../data/quizQuestions";
import MultipleQuestion from "./MultipleQuestion";
import DragQuestion from "./DragQuestion";

const QuizGroup = ({ category }) => {
  const questions = quizQuestions.filter((q) => q.category === category);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [completed, setCompleted] = useState(false);

  const handleNext = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCompleted(true);
    }
  };

  const renderQuestionComponent = (question) => {
    switch (question.kind) {
      case "multiple":
        return <MultipleQuestion question={question} onNext={handleNext} />;
      case "fill":
        return <FillBlankQuestion question={question} onNext={handleNext} />;
      case "drag":
        return <DragQuestion question={question} onNext={handleNext} />;
      default:
        return (
          <Typography>Unsupported question type: {question.kind}</Typography>
        );
    }
  };

  return (
    <Box mt={4}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Practice Quiz: {category.charAt(0).toUpperCase() + category.slice(1)}
      </Typography>

      {completed ? (
        <Paper
          sx={{
            backgroundColor: "#4caf50",
            color: "#fff",
            p: 5,
            mt: 2,
            borderRadius: 2,
            textAlign: "center",
            maxWidth: "600px",
          }}
        >
          <Typography variant="h4">🎉 Great job!</Typography>
          <Typography variant="h6">
            You completed all {category} questions!
          </Typography>
        </Paper>
      ) : (
        renderQuestionComponent(questions[currentIndex])
      )}
    </Box>
  );
};

export default QuizGroup;
