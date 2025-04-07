import React, { useEffect, useState } from 'react';
import { Box, Button, Typography, TextField } from '@mui/material';
import AnswerFeedback from './AnswerFeedback';

const FillBlankQuestion = ({ question, onNext }) => {
  const { codeParts, answer = [] } = question;

  const [inputs, setInputs] = useState([]);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    setInputs(Array(answer.length).fill(''));
    setHasAnswered(false);
    setIsCorrect(false);
  }, [question]);

  const handleSubmit = () => {
    const correct = answer.every(
      (ans, i) => (inputs[i] || '').trim() === ans.trim()
    );
    setIsCorrect(correct);
    setHasAnswered(true);
  };

  const handleTryAgain = () => {
    setInputs(Array(answer.length).fill(''));
    setHasAnswered(false);
    setIsCorrect(false);
  };

  const correctText = codeParts.map((part, idx) => `${part}${answer[idx] ?? ''}`).join('');

  return (
    <Box mt={2}>
      <Typography variant="subtitle1" gutterBottom>
        {question.question}
      </Typography>

      {!hasAnswered ? (
        <>
          <Box
            component="pre"
            sx={{
              background: '#2e3440',
              color: '#eceff4',
              p: 2,
              borderRadius: 2,
              mt: 1,
              whiteSpace: 'pre-wrap',
              fontFamily: 'monospace',
              fontSize: '1rem',
              lineHeight: '1.4',
              maxWidth: '600px',
            }}
          >
            {codeParts.map((part, index) => (
              <React.Fragment key={index}>
                {part}
                {index < answer.length && (
                  <TextField
                    variant="standard"
                    value={inputs[index]}
                    onChange={(e) => {
                      const updated = [...inputs];
                      updated[index] = e.target.value;
                      setInputs(updated);
                    }}
                    autoComplete="off"
                    inputProps={{
                      style: {
                        padding: 0,
                        fontSize: '1rem',
                        fontFamily: 'monospace',
                        color: '#fff',
                      },
                      spellCheck: 'false',
                    }}
                    sx={{
                      bgcolor: '#2c3e50',
                      borderRadius: '4px',
                      mx: '4px',
                      width: '100px',
                    }}
                  />
                )}
              </React.Fragment>
            ))}
          </Box>

          <Button variant="contained" color="success" onClick={handleSubmit} sx={{ mt: 2 }}>
            Submit Answer
          </Button>
        </>
      ) : (
        <AnswerFeedback
          isCorrect={isCorrect}
          correctText={!isCorrect ? `Correct answer:\n${correctText}` : ''}
          onNext={onNext}
          onTryAgain={handleTryAgain}
        />
      )}
    </Box>
  );
};

export default FillBlankQuestion;
