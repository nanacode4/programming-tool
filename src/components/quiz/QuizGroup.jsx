import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Typography, Paper } from '@mui/material';
import MultipleQuestion from './MultipleQuestion';
import FillBlankQuestion from './FillBlankQuestion';
import DragQuestion from './DragQuestion';

const ensureArray = (v) => {
  if (Array.isArray(v)) return v;
  if (v === null || v === undefined) return [];
  if (typeof v === 'string') {
    try {
      const parsed = JSON.parse(v);
      return Array.isArray(parsed) ? parsed : [parsed];
    } catch {
      return [v];
    }
  }
  return [v];
};

const normalizeQuestion = (item) => {
  const q = item.data;

  return {
    id: item.id,
    kind: item.kind,
    category: q.category || '',
    question: q.question || '',
    codeParts: Array.isArray(q.codeParts || q.code_parts) ? q.codeParts || q.code_parts : [],
    answer: Array.isArray(q.answer) ? q.answer : [q.answer],
    options: Array.isArray(q.options) ? q.options : [],
  };
};

const QuizGroup = ({ category }) => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await axios.get('http://localhost:8000/api/quiz/');
        const all = res.data.map(normalizeQuestion);
        // console.log("all question：", all);
        const filtered = all.filter((q) => q.category === category);
        setQuestions(filtered);
      } catch (err) {
        console.error('error:', err);
      }
    };
    fetchQuestions();
  }, [category]);

  const handleNext = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCompleted(true);
    }
  };

  const renderQuestionComponent = (question) => {
    switch (question.kind) {
      case 'multiple':
        return <MultipleQuestion question={question} onNext={handleNext} />;
      case 'fill':
        return <FillBlankQuestion question={question} onNext={handleNext} />;
      case 'drag':
        return <DragQuestion question={question} onNext={handleNext} />;
      default:
        return <Typography color="error">null: {question.kind}</Typography>;
    }
  };

  return (
    <Box mt={4}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Practice Quiz: {category.charAt(0).toUpperCase() + category.slice(1)}
      </Typography>

      {questions.length === 0 ? (
        <Typography>Loading questions...</Typography>
      ) : completed ? (
        <Paper
          sx={{
            backgroundColor: '#2e7d31',
            color: '#fff',
            p: 5,
            mt: 2,
            borderRadius: 2,
            textAlign: 'center',
            maxWidth: '600px',
          }}
        >
          <Typography variant="h4">🎉 Well done!</Typography>
          <Typography variant="h6">You completed all {category} questions!</Typography>
        </Paper>
      ) : (
        renderQuestionComponent(questions[currentIndex])
      )}
    </Box>
  );
};

export default QuizGroup;
