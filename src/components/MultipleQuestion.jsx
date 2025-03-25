import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Typography,
  Paper,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import AnswerFeedback from "./AnswerFeedback";

const MultipleQuestion = ({ question, onNext }) => {
  const [selected, setSelected] = useState("");
  const [hasAnswered, setHasAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    setSelected("");
    setHasAnswered(false);
    setIsCorrect(false);
  }, [question]);

  const handleSubmit = () => {
    setIsCorrect(selected === question.answer);
    setHasAnswered(true);
  };

  const handleTryAgain = () => {
    setSelected("");
    setHasAnswered(false);
    setIsCorrect(false);
  };

  return (
    <Box mt={2}>
      <Typography variant="subtitle1" gutterBottom>
        {question.question}
      </Typography>

      {!hasAnswered ? (
        <>
          <RadioGroup
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            sx={{ mt: 2, maxWidth: "600px" }}
          >
            {question.options.map((opt, i) => (
              <FormControlLabel
                key={i}
                value={opt}
                control={<Radio />}
                label={opt}
                sx={{
                  backgroundColor: "#444",
                  color: "#fff",
                  borderRadius: 1,
                  my: 1,
                  px: 2,
                }}
              />
            ))}
          </RadioGroup>

          <Button
            variant="contained"
            color="success"
            onClick={handleSubmit}
            disabled={!selected}
            sx={{ mt: 2 }}
          >
            Submit Answer
          </Button>
        </>
      ) : (
        <AnswerFeedback
          isCorrect={isCorrect}
          correctText={!isCorrect ? `Correct answer:\n${question.answer}` : ""}
          onNext={onNext}
          onTryAgain={handleTryAgain}
        />
      )}
    </Box>
  );
};

export default MultipleQuestion;
