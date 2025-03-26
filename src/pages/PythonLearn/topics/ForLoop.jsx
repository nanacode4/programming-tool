import { Typography, Paper } from '@mui/material';
import CodeBlock from '../../../components/theme/CodeBlock';

const ForLoop = () => {
  return (
    <Paper sx={{ padding: 3 }}>
      <Typography variant="h4" fontWeight="bold" mb={1}>
        Python For Loop
      </Typography>
      <Typography>A for loop is used for iterating over a sequence (that is either a list, a tuple, a dictionary, a set, or a string).</Typography>
      <Typography>This is less like the for keyword in other programming languages, and works more like an iterator method as found in other object-orientated programming languages.</Typography>
      <Typography>With the for loop we can execute a set of statements, once for each item in a list, tuple, set etc.</Typography>

      <Typography variant="h5" fontWeight="bold" mt={1} mb={1}>
      Basic Syntax:
      </Typography>
      <CodeBlock>{`for item in sequence:
    # do something with item`}</CodeBlock>
    <Typography>
        <ul>
            <li>item is a temporary variable that takes the value of each element.</li>
            <li>sequence is anything iterable (list, tuple, string, range, etc.)</li>
        </ul>
    </Typography>

      <Typography variant="h5" fontWeight="bold" mb={1}>
      The break Statement
      </Typography>
      <Typography>With the break statement we can stop the loop before it has looped through all the items:</Typography>
      <CodeBlock>{`for num in range(5):
    if num == 3:
        break
    print(num)`}</CodeBlock>

      <Typography variant="h5" fontWeight="bold" mb={1}>
      The continue Statement
      </Typography>
      <Typography>With the continue statement we can stop the current iteration of the loop, and continue with the next.</Typography>
      <CodeBlock>{`for num in range(5):
    if num == 2:
        continue
    print(num)`}</CodeBlock>

      <Typography variant="h5" fontWeight="bold" mb={1}>
      The range( ) Function
      </Typography>
      <Typography>The range( ) function returns a sequence of numbers, starting from 0 by default, and increments by 1 (by default), and ends at a specified number.</Typography>
      <CodeBlock>{`for i in range(5):  # 0 to 4
    print(i)`}</CodeBlock>
    </Paper>
  );
};

export default ForLoop;
