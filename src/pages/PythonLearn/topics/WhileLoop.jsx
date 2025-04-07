import { Typography, Paper } from '@mui/material';
import CodeBlock from '../../../components/theme/CodeBlock';
import PaginationNav from './../../../components/PaginationNav';

const WhileLoop = () => {
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
    <PaginationNav/>
    </Paper>
  );
};

export default WhileLoop;
