import React, { useEffect, useState } from 'react';
import { Box, Button, Typography, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import AnswerFeedback from './AnswerFeedback';

const MultipleQuestion = ({ question, onNext }) => {
  const { options = [], answer = [] } = question;

  const [selected, setSelected] = useState('');
  const [hasAnswered, setHasAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    setSelected('');
    setHasAnswered(false);
    setIsCorrect(false);
  }, [question]);

  const handleSubmit = () => {
    const correct = selected.trim() === answer[0]?.trim();
    setIsCorrect(correct);
    setHasAnswered(true);
  };

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  return (
    <Box mt={2}>
      <Typography variant="subtitle1" gutterBottom>
        {question.question}
      </Typography>

      {!hasAnswered ? (
        <>
          <RadioGroup value={selected} onChange={handleChange}>
            {options.map((opt, index) => (
              <FormControlLabel
                key={index}
                value={opt}
                control={<Radio />}
                label={opt}
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
          correctText={!isCorrect ? `Correct answer: ${answer[0]}` : ''}
          onNext={onNext}
        />
      )}
    </Box>
  );
};

export default MultipleQuestion;
