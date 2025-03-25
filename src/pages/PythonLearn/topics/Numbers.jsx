import { Typography, Paper, Box } from "@mui/material";

const Number = () => {
  return (
    <Paper sx={{ padding: 3 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Python Number
      </Typography>
      <Typography>
        In Python, numbers are one of the most commonly used data types. There
        are three main types of numeric data:int, float, complex.
      </Typography>
      <Typography variant="h5" fontWeight="bold" gutterBottom mt={1}>
        {" "}
        Int
      </Typography>
      <Typography>
        Int, or integer, is a whole number, positive or negative, without
        decimals, of unlimited length.
      </Typography>
      <Box component="pre" sx={{ background: "#eee", p: 2, borderRadius: 1 }}>
        {`a = 10\nb = -25\nc = 10000000000\nprint(type(a))  # <class 'int'>`}
      </Box>
      <Typography variant="h5" fontWeight="bold" gutterBottom mt={1}>
        Float
      </Typography>
      <Typography>
        Float, or floating point number is a number, positive or negative,
        containing one or more decimals. Float can also be scientific numbers
        with an "e" to indicate the power of 10.
      </Typography>
      <Box component="pre" sx={{ background: "#eee", p: 2, borderRadius: 1 }}>
        {`price = 99.99\npi = 3.14159\nsci = 1.2e3  # 1200.0\nprint(type(price))  # <class 'float'>`}
      </Box>
      <Typography variant="h5" fontWeight="bold" gutterBottom mt={1}>
        Complex
      </Typography>
      <Typography>
        Written as real + imaginary part (e.g. 2 + 3j). j is the imaginary unit
        in Python
      </Typography>
      <Box component="pre" sx={{ background: "#eee", p: 2, borderRadius: 1 }}>
        {`z = 2 + 3j\nprint(type(z))        # <class 'complex'>`}
      </Box>
      <Typography
        variant="h5"
        fontWeight="bold"
        gutterBottom
        mt={1}
      ></Typography>
      <Typography>
        You can convert from one type to another with the int(), float(), and
        complex() methods:
      </Typography>
      <Box component="pre" sx={{ background: "#eee", p: 2, borderRadius: 1 }}>
        {`x = 5        # int\ny = float(x) # 5.0\nz = int(3.9) # 3\n\nprint(type(y))  # <class 'float'>\nprint(z)        # 3`}
      </Box>
      <Typography>
        Note: You cannot convert complex numbers into another number type.
      </Typography>
    </Paper>
  );
};
export default Number;
