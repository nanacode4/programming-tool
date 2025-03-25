import { Typography, Paper, Box, Link } from "@mui/material";

const Booleans = () => {
  return (
    <Paper sx={{ padding: 3 }}>
      <Typography variant="h4" fontWeight="bold">
        Python Booleans
      </Typography>
      <Typography>
        A Boolean is a data type that can only have one of two values:
      </Typography>
      <Typography>
        <ul>
          <li>True</li>
          <li>False</li>
        </ul>
      </Typography>
      <Typography>
        You often get Boolean values as a result of comparison or logical
        operations:
      </Typography>
      <Box component="pre" sx={{ background: "#eee", p: 2, borderRadius: 1 }}>
        {`print(5 > 3)     # True\nprint(5 == 3)    # False`}
      </Box>
      <Typography>
        Booleans are super important in conditions, loops, comparisons, and
        decision-making in Python.
      </Typography>
      <Typography variant="h5" fontWeight="bold" mt={1}>
        Most Values are True
      </Typography>
      <Typography>
        Almost any value is evaluated to True if it has some sort of content.
      </Typography>
      <Typography>Any string is True, except empty strings.</Typography>
      <Typography>Any number is True, except 0.</Typography>
      <Typography>
        Any list, tuple, set, and dictionary are True, except empty ones.
      </Typography>
      <Box component="pre" sx={{ background: "#eee", p: 2, borderRadius: 1 }}>
        {`bool("abc")\nbool(123)\nbool(["apple", "cherry", "banana"])`}
      </Box>
      <Typography variant="h5" fontWeight="bold" mt={1}>
        Some Values are False
      </Typography>
      <Typography>
        In fact, there are not many values that evaluate to False, except empty
        values, such as (), [], {}, "", the number 0, and the value None. And of
        course the value False evaluates to False.
      </Typography>
      <Box component="pre" sx={{ background: "#eee", p: 2, borderRadius: 1 }}>
        {`bool(False)\nbool(None)\nbool(0)`}
      </Box>
      <Typography></Typography>
    </Paper>
  );
};
export default Booleans;
