import { Typography, Paper } from '@mui/material';
import CodeBlock from '../../../components/theme/CodeBlock';

const IfElse = () => {
  return (
    <Paper sx={{ padding: 3 }}>
      <Typography variant="h4" fontWeight="bold"  mb={2}>
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
    </Paper>
  );
};

export default IfElse;
