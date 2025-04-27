import React from 'react';
import { Paper, Typography, Button } from '@mui/material';

const AnswerFeedback = ({ isCorrect, correctText, onNext, onTryAgain, onAddToReview }) => {
  return (
    <Paper
      sx={{
        backgroundColor: isCorrect ? '#2e7d31' : '#c62828',
        color: '#fff',
        p: 5,
        borderRadius: 3,
        mt: 2,
        textAlign: 'center',
        maxWidth: '600px',
      }}
    >
      <Typography variant="h4" gutterBottom>
        {isCorrect ? 'Correct Answer!' : 'Wrong Answer!'}
      </Typography>

      {!isCorrect && correctText && (
        <Typography
          sx={{
            mt: 1,
            fontFamily: 'monospace',
            whiteSpace: 'pre-wrap',
          }}
        >
          {correctText}
        </Typography>
      )}

      {/* Primary button: Next question / Redo*/}
      <Button
        variant="contained"
        sx={{ mt: 2, backgroundColor: '#263238' }}
        onClick={isCorrect ? onNext : onTryAgain}
      >
        {isCorrect ? 'Next Question' : 'Try Again'}
      </Button>

      {/* Wrong button: only displayed when the answer is wrong */}
      {!isCorrect && onAddToReview && (
        <Button variant="outlined" color="inherit" sx={{ mt: 2, ml: 2 }} onClick={onAddToReview}>
          Add to review
        </Button>
      )}
    </Paper>
  );
};

export default AnswerFeedback;
