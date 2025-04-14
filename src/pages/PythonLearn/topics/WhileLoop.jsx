import CodeBlock from '../../../components/ui/CodeBlock';
import PaginationNav from './../../../components/layout/PaginationNav';
import React, { useState } from 'react';
import { Box, Button, Typography, Alert, Paper } from '@mui/material';
import GreyTextField from './../../../components/ui/GreyTextField';
import QuizGroup from '../../../components/quiz/QuizGroup';

const WhileLoop = () => {
  const [variable, setVariable] = useState('');
  const [condition, setCondition] = useState('');
  const [printContent, setPrintContent] = useState('');
  const [output, setOutput] = useState('');
  const [isError, setIsError] = useState(false);

  const handleRun = async () => {
    const code = `${variable} = 0\nwhile ${condition}:\n    print(${printContent})\n    ${variable} += 1`;

    const res = await fetch('http://localhost:8000/api/run/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code, language: 'python' }),
    });

    const result = await res.json();
    if (result.error) {
      const lines = result.error.split('\n');
      const lastLine = lines[lines.length - 1];
      setOutput(`${lastLine}`);
      setIsError(true);
    } else {
      setOutput(result.output);
      setIsError(false);
    }
  };

  return (
    <Paper sx={{ padding: 6 }}>
      <Typography variant="h4" fontWeight="bold" mb={1}>
        Python While Loop
      </Typography>
      <Typography>A while loop lets you execute a block of code repeatedly as long as a certain condition is True.</Typography>

      <Typography variant="h5" fontWeight="bold" mt={1} mb={1}>
        Basic Syntax:
      </Typography>
      <Typography>The loop continues until the condition becomes False.</Typography>
      <CodeBlock>{`while condition:
    # code block to run`}</CodeBlock>

      <Typography variant="h5" fontWeight="bold" mb={1}>
        break Statement
      </Typography>
      <Typography>Stops the loop even if the condition is still true.</Typography>
      <CodeBlock>{`i = 1

while i <= 10:
    if i == 5:
        break
    print(i)
    i += 1`}</CodeBlock>

      <Typography variant="h5" fontWeight="bold" mb={1}>
        continue Statement
      </Typography>
      <Typography>Skips the current loop iteration and moves to the next.</Typography>
      <CodeBlock>{`i = 0

while i < 5:
    i += 1
    if i == 3:
        continue
    print(i)`}</CodeBlock>

      {/* while loop */}
      <Box mt={6}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Try it Yourself
        </Typography>

        <Box display="flex" alignItems="center" gap={1} sx={{ fontSize: '18px', mb: 1 }}>
          <GreyTextField value={variable} onChange={(e) => setVariable(e.target.value)} />
          <Typography>= 0</Typography>
        </Box>

        <Box display="flex" alignItems="center" gap={1} sx={{ fontSize: '18px', mb: 1 }}>
          <Typography fontWeight="bold">While</Typography>
          <GreyTextField value={condition} onChange={(e) => setCondition(e.target.value)} />
          <Typography fontWeight="bold">:</Typography>
        </Box>

        {/* print(x)  */}
        <Box display="flex" alignItems="center" gap={1} mb={2} ml={4}>
          <Typography>print(</Typography>
          <GreyTextField value={printContent} onChange={(e) => setPrintContent(e.target.value)} />
          <Typography>)</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap={1} mb={2} ml={4}>
          <GreyTextField value={variable} onChange={(e) => setVariable(e.target.value)} />
          <Typography>+= 1</Typography>
        </Box>

        <Box mb={1}>
          <Button variant="contained" onClick={handleRun}>
            Run
          </Button>
        </Box>

        {output && (
          <Box mt={2}>
            {isError ? (
              <Alert severity="error">{output}</Alert>
            ) : (
              <Box p={2} sx={{ backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
                <Typography variant="body2" sx={{ whiteSpace: 'pre-wrap' }}>
                  {output}
                </Typography>
              </Box>
            )}
          </Box>
        )}
      </Box>
      {/* quiz part */}
      <QuizGroup category="while" />

      <PaginationNav />
    </Paper>
  );
};

export default WhileLoop;
