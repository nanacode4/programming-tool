import { Typography, Paper, Box, Link } from "@mui/material";

const Strings = () => {
  return (
    <Paper sx={{ padding: 3 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Python Strings
      </Typography>
      <Typography>
        A string is a sequence of characters (letters, numbers, symbols)
        enclosed in: Single quotes '...', Double quotes "...".
      </Typography>
      <Box component="pre" sx={{ background: "#eee", p: 2, borderRadius: 1 }}>
        {`name = "Alice"\nmessage = 'Hello, world!'`}
      </Box>
      <Typography mt={1}>
        Python also supports triple quotes for multi-line strings:
      </Typography>
      <Box component="pre" sx={{ background: "#eee", p: 2, borderRadius: 1 }}>
        {`text = """This is\nma multi-line\nstring."""`}
      </Box>
      <Typography variant="h5" fontWeight="bold" gutterBottom mt={1}>
        {" "}
        String Data Type
      </Typography>
      <Typography>All strings are of type str in Python.</Typography>
      <Box component="pre" sx={{ background: "#eee", p: 2, borderRadius: 1 }}>
        {`x = "Hello"\nprint(type(x))  # <class 'str'>`}
      </Box>
      <Typography variant="h5" fontWeight="bold" gutterBottom mt={1}>
        String Formatting
      </Typography>
      <Typography variant="h6">f-Strings</Typography>
      <Box component="pre" sx={{ background: "#eee", p: 2, borderRadius: 1 }}>
        {`name = "Alice"\nage = 25\nprint(f"My name is {name} and I am {age} years old.")`}
      </Box>
      <Typography variant="h6">.format() method</Typography>
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
        {`print("My name is {} and I am {}.".format(name, age))`}
      </Box>
      <Typography>
        Note: You cannot change a string once it’s created.
      </Typography>
    </Paper>
  );
};
export default Strings;
