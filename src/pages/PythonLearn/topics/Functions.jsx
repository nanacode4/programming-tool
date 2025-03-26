import { Typography, Paper } from '@mui/material';
import CodeBlock from '../../../components/theme/CodeBlock';
import QuizGroup from '../../../components/QuizGroup';

const Functions = () => {
  return (
    <Paper sx={{ padding: 3 }}>
      <Typography variant="h4" fontWeight="bold" mb={1}>
        Python Functions
      </Typography>
      <Typography>A function is a block of code which only runs when it is called.</Typography>
      <Typography>You can pass data, known as parameters, into a function.</Typography>
      <Typography>A function can return data as a result.</Typography>

      <Typography variant="h5" fontWeight="bold" mt={1} mb={1}>
        Creating a Function
      </Typography>
      <CodeBlock>{`def greet():
    print("Hello, world!")

greet()  # Call the function`}</CodeBlock>

      <Typography variant="h5" fontWeight="bold" mb={1}>
        Arguments
      </Typography>
      <Typography>Information can be passed into functions as arguments.</Typography>
      <Typography>
        Arguments are specified after the function name, inside the parentheses. You can add as many arguments as you want, just separate them with a
        comma.
      </Typography>
      <CodeBlock>{`def greet(name="Guest"):
    print("Hello,", name)

greet()         # Hello, Guest
greet("Bob")    # Hello, Bob`}</CodeBlock>

      <Typography variant="h5" fontWeight="bold" mb={1}>
        Return Values
      </Typography>
      <Typography>To let a function return a value, use the return statement:</Typography>
      <CodeBlock>{`def add(a, b):
    return a + b

result = add(5, 3)
print(result)  # 8`}</CodeBlock>
      {/* quiz part */}
      <QuizGroup category="function" />
    </Paper>
  );
};

export default Functions;
