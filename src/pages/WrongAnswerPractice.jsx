import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Box, Typography, Button } from '@mui/material';
import MultipleQuestion from './../components/quiz/MultipleQuestion';
import FillBlankQuestion from './../components/quiz/FillBlankQuestion';
import DragQuestion from './../components/quiz/DragQuestion';



const normalizeQuestion = (item) => {
  const q = item.quiz;
  const data = q.data;

  return {
    id: q.id,
    kind: q.kind || '',
    category: data.category || '',
    question: data.question || '',
    codeParts: Array.isArray(data.codeParts || data.code_parts) ? data.codeParts || data.code_parts : [],
    answer: Array.isArray(data.answer) ? data.answer : [data.answer],
    options: Array.isArray(data.options) ? data.options : [],
  };
};


const WrongAnswerPractice = () => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestions = async () => {
      const token = localStorage.getItem('access_token');
      try {
        const res = await axios.get('http://127.0.0.1:8000/api/quiz/get_wrong_answers/', {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
        const normalized = res.data.map(normalizeQuestion);
        console.log(res.data);

        setQuestions(normalized);
      } catch (err) {
        console.error('Failed to fetch wrong answers:', err);
      }
    };
    fetchQuestions();
  }, []);

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      alert('You have finished all wrong questions!');
      navigate('/progress');
    }
  };

  const handleAddToReview = async () => {
    const username = localStorage.getItem('username');
    const token = localStorage.getItem('access_token');
    if (!username) {
      alert('Please login first.');
      return;
    }

    try {
      await axios.post(
        'http://localhost:8000/api/quiz/wrong_answers/',
        {
          quiz: questions[currentIndex].id,
          username: username,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (err) {
      console.error('Failed to add to review:', err);
    }
  };

  const renderQuestionComponent = () => {
    const question = questions[currentIndex];
    if (!question) return <Typography>Loading...</Typography>;

    const commonProps = {
      question,
      onNext: handleNext,
      onAddToReview: handleAddToReview,
    };

    switch (question.kind) {
      case 'multiple':
        return <MultipleQuestion {...commonProps} />;
      case 'fill':
        return <FillBlankQuestion {...commonProps} />;
      case 'drag':
        return <DragQuestion {...commonProps} />;
      default:
        return <Typography color="error">Unsupported question type: {question.kind}</Typography>;
    }
  };

  return (
    <Box mt={4}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Practice Your Wrong Answers
      </Typography>
      {renderQuestionComponent()}
    </Box>
  );
};

export default WrongAnswerPractice;
