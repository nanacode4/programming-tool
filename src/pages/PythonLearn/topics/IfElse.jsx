import CodeBlock from '../../../components/ui/CodeBlock';
import PaginationNav from './../../../components/layout/PaginationNav';
import React, { useState } from 'react';
import { Box, Button, Typography, Alert, Paper } from '@mui/material';
import GreyTextField from './../../../components/ui/GreyTextField';

const IfElse = () => {
  const [variable1, setVariable1] = useState('');
  const [variable2, setVariable2] = useState('');
  const [operate, setOperate] = useState('');
  const [output, setOutput] = useState('');
  const [isError, setIsError] = useState(false);

  const handleRun = async () => {
    const code = `
${variable1} = 4
${variable2} = 8
if ${variable1} ${operate} ${variable2}:
    print("Hello")
else:
    print("Hi")
`;

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
      <Typography variant="h4" fontWeight="bold" mb={2}>
        Python If ... Else
      </Typography>
      <Typography>
        These are conditional statements that allow your code to make decisions and execute different blocks depending on conditions.
      </Typography>

      <Typography variant="h5" fontWeight="bold" mb={1} mt={1}>
        The if Statement
      </Typography>
      <Typography>Used to run code only if a condition is True.</Typography>
      <CodeBlock>{`age = 18

if age >= 18:
    print("You can vote!")`}</CodeBlock>

      <Typography variant="h5" fontWeight="bold" mb={1}>
        The elif Statement (else if)
      </Typography>
      <Typography>
        Used to check another condition if the first one is false.Python checks from top to bottom and stops once a condition is True.
      </Typography>
      <CodeBlock>{`score = 75

if score >= 90:
    print("Grade: A")
elif score >= 80:
    print("Grade: B")
elif score >= 70:
    print("Grade: C")`}</CodeBlock>

      <Typography variant="h5" fontWeight="bold" mb={1}>
        The else Statement
      </Typography>
      <Typography>Used if none of the if or elif conditions are True.</Typography>
      <CodeBlock>{`temperature = 10

if temperature > 30:
    print("Hot")
elif temperature > 20:
    print("Warm")
else:
    print("Cold")`}</CodeBlock>

      {/* if else  */}
      <Box mt={6}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Try it Yourself
        </Typography>

        {/* x = 4 */}
        <Box display="flex" alignItems="center" gap={1} sx={{ fontSize: '18px', mb: 1 }}>
          <GreyTextField
            value={variable1}
            onChange={(e) => setVariable1(e.target.value)}
            />
          <Typography>= 4</Typography>
        </Box>

        {/* y = 8 */}
        <Box display="flex" alignItems="center" gap={1} sx={{ fontSize: '18px', mb: 1 }}>
          <GreyTextField
            value={variable2}
            onChange={(e) => setVariable2(e.target.value)}
             />
          <Typography>= 8</Typography>
        </Box>
        {/* if x > y : */}
        <Box display="flex" alignItems="center" gap={1} sx={{ fontSize: '18px', mb: 1 }}>
          <Typography fontWeight="bold">if</Typography>
          <GreyTextField
            value={variable1}
            onChange={(e) => setVariable1(e.target.value)}
             />
          <GreyTextField
            value={operate}
            onChange={(e) => setOperate(e.target.value)}
            />
          <GreyTextField
            value={variable2}
            onChange={(e) => setVariable2(e.target.value)}
             />
          <Typography fontWeight="bold">:</Typography>
        </Box>

        <Box display="flex" alignItems="center" gap={1} mb={2} ml={4}>
          <Typography>print("Hello")</Typography>
        </Box>
        {/* else: print("Hi") */}
        <Box display="flex" alignItems="center" gap={1} sx={{ fontSize: '18px', mb: 1 }}>
          <Typography fontWeight="bold">else:</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap={1} mb={2} ml={4}>
          <Typography>print("Hi")</Typography>
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

      <PaginationNav />
    </Paper>
  );
};

export default IfElse;
