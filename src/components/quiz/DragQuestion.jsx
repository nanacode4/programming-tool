import React, { useEffect, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import AnswerFeedback from './AnswerFeedback';
import shuffle from 'lodash.shuffle';

const DragQuestion = ({ question, onNext }) => {
  const correctAnswers = Array.isArray(question.answer) ? question.answer : [];
  const codeParts = Array.isArray(question.codeParts) ? question.codeParts : [];
  const options = Array.isArray(question.options) ? question.options : [];

  const allOptions = shuffle([...new Set([...correctAnswers, ...options])]);

  const [selected, setSelected] = useState([]);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    setSelected([]);
    setHasAnswered(false);
    setIsCorrect(false);
  }, [question]);

  const handleChoiceClick = (choice) => {
    if (selected.length < correctAnswers.length) {
      setSelected((prev) => [...prev, choice]);
    }
  };

  const handleSubmit = () => {
    const correct = selected.every((val, i) => val === correctAnswers[i]);
    setIsCorrect(correct);
    setHasAnswered(true);
  };

  const handleTryAgain = () => {
    setSelected([]);
    setHasAnswered(false);
    setIsCorrect(false);
  };

  const renderCodeWithAnswers = () => {
    const result = [];

    for (let i = 0; i < codeParts.length; i++) {
      result.push(<span key={`code-${i}`}>{codeParts[i]}</span>);
      if (i < correctAnswers.length) {
        result.push(
          <Box
            key={`input-${i}`}
            component="span"
            sx={{
              display: 'inline-block',
              minWidth: '60px',
              backgroundColor: '#334',
              color: '#fff',
              mx: '4px',
              px: 1,
              borderBottom: '2px solid #fff',
              textAlign: 'center',
            }}
          >
            {selected[i] || ' '}
          </Box>
        );
      }
    }

    return result;
  };

  const correctText = codeParts
    .map((part, idx) => {
      return part + (correctAnswers[idx] !== undefined ? correctAnswers[idx] : '');
    })
    .join('');

  return (
    <Box mt={2}>
      <Typography variant="subtitle1" gutterBottom>
        {question.question}
      </Typography>

      {!hasAnswered ? (
        <>
          {/* Code preview with selected answers */}
          <Box
            component="pre"
            sx={{
              background: '#2e3440',
              color: '#eceff4',
              p: 2,
              borderRadius: 2,
              mt: 1,
              fontFamily: 'monospace',
              fontSize: '1rem',
              lineHeight: '1.4',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '4px',
              maxWidth: '100%',
            }}
          >
            {renderCodeWithAnswers()}
          </Box>

          {/* Option buttons */}
          <Box sx={{ mt: 2 }}>
            {allOptions
              .filter((opt) => !selected.includes(opt))
              .map((opt, i) => (
                <Button key={i} variant="outlined" onClick={() => handleChoiceClick(opt)} sx={{ m: 1 }}>
                  {opt}
                </Button>
              ))}
          </Box>

          <Button variant="contained" color="success" sx={{ mt: 2 }} disabled={selected.length !== correctAnswers.length} onClick={handleSubmit}>
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

export default DragQuestion;
