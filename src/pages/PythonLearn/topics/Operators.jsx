import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Box,
    Typography,
  } from "@mui/material";

import CustomTable from "../../../components/CustomTable";
const Operators = () => {

    const columns1 = [
        { label: "Operator", key: "operator" },
        { label: "Name", key: "name" },
        { label: "Example", key: "example", monospace: true },
        { label: "Result", key: "result" }
      ];

      const data1 = [
        { operator: "+", name: "Addition", example: "3 + 2", result: "5" },
        { operator: "−", name: "Subtraction", example: "5 − 2", result: "3" },
        { operator: "∗", name: "Multiplication", example: "4 ∗ 2", result: "8" },
        { operator: "/", name: "Division", example: "6 / 2", result: "3.0" },
        { operator: "//", name: "Floor Division", example: "7 // 2", result: "3" },
        { operator: "%", name: "Modulus (Remainder)", example: "7 % 2", result: "1" },
        { operator: "**", name: "Exponentiation", example: "2 ** 3", result: "8" },
      ];

      const columns2 = [
        { label: "Operator", key: "operator" },
        { label: "Example", key: "example", monospace: true },
        { label: "Same as", key: "same" }
      ];

      const data2 = [
        { operator: "=", example: "x = 5", same: "assign value" },
        { operator: "+=",  example: "x += 3", same: "x = x + 3" },
        { operator: "-=",  example: "x -= 2", same: "x = x - 2" },
        { operator: "*=",  example: "x *= 4", same: "x = x * 4" },
        { operator: "/=",  example: "x /= 2", same: "x = x / 2" },
        { operator: "//=", example: "x //= 2", same: "x = x // 2" },
        { operator: "**=",  example: "x **= 2", same: "x = x ** 2" },
      ];

      const columns3 = [
        { label: "Operator", key: "operator" },
        { label: "Meaning", key: "meaning" },
        { label: "Example", key: "example", monospace: true },
        { label: "Result", key: "result", monospace: true }
      ];
      
      const data3 = [
        { operator: "==", meaning: "Equal to", example: "5 == 5", result: "True" },
        { operator: "!=", meaning: "Not equal", example: "5 != 3", result: "True" },
        { operator: ">", meaning: "Greater than", example: "6 > 3", result: "True" },
        { operator: "<", meaning: "Less than", example: "4 < 2", result: "False" },
        { operator: ">=", meaning: "Greater or equal", example: "5 >= 5", result: "True" },
        { operator: "<=", meaning: "Less or equal", example: "3 <= 2", result: "False" }
      ];
      const columns4 = [
        { label: "Operator", key: "operator" },
        { label: "Description", key: "description" },
        { label: "Example", key: "example", monospace: true },
        { label: "Result", key: "result", monospace: true }
      ];
      
      const data4 = [
        { operator: "and", description: "Both must be True", example: "True and False", result: "False" },
        { operator: "or", description: "One must be True", example: "False or True", result: "True" },
        { operator: "not", description: "Reverse the result", example: "not True", result: "False" }
      ];
      const columns5 = [
        { label: "Operator", key: "operator" },
        { label: "Description", key: "description" },
        { label: "Example", key: "example", monospace: true }
      ];
      
      const data5 = [
        { operator: "is", description: "True if same object", example: "a is b" },
        { operator: "is not", description: "True if not same", example: "a is not b" }
      ];
      
      
      const data6 = [
        { operator: "in", description: "Exists in sequence", example: `"a" in "apple" → True` },
        { operator: "not in", description: "Does not exist", example: `"z" not in "apple" → True` }
      ];
      





  return (
    <Paper sx={{ padding: 3 }}>
      <Typography variant="h4" fontWeight="bold">
        Python Operators 
      </Typography>
      <Typography>
        Operators are symbols or keywords used to perform operations on variables and values.
<Typography>Python has several types of operators:</Typography>

      </Typography>
      <Typography>
        <ul>
          <li>Arithmetic operators</li>
          <li>Assignment operators</li>
          <li>Comparison operators</li>
          <li>Logical operators</li>
          <li>Identity operators</li>
          <li>Membership operators</li>
        </ul>
      </Typography>
      <Typography variant="h5" fontWeight="bold" mt={1}>Arithmetic operators</Typography>
      <Typography>Arithmetic operators are used with numeric values to perform common mathematical operations:</Typography>
      <CustomTable columns={columns1} rows={data1} />
      <Typography variant="h6" fontWeight="bold" mt={1}>Example</Typography>
      <Box component="pre" sx={{ background: "#eee", p: 2, borderRadius: 1 }}>
        {`a = 10\nb = 3\nprint(a + b)  # 13\nprint(a % b)  # 1`}
      </Box>
      <Typography variant="h5" fontWeight="bold" mt={1}>
      Assignment Operators
      </Typography>
      <Typography>Assignment operators are used to assign values to variables:</Typography>
      <CustomTable columns={columns2} rows={data2} />
      <Typography variant="h6" fontWeight="bold" mt={1}>Example</Typography>
      <Box component="pre" sx={{ background: "#eee", p: 2, borderRadius: 1 }}>
        {`x = 10\nx += 5  # x = 15`}
      </Box>

      <Typography variant="h5" fontWeight="bold" mt={1}>
      Comparison Operators
      </Typography>
      <Typography>Comparison operators are used to compare two values:</Typography>
      <CustomTable columns={columns3} rows={data3} />
      <Typography variant="h6" fontWeight="bold" mt={1}>Example</Typography>
      <Box component="pre" sx={{ background: "#eee", p: 2, borderRadius: 1 }}>
        {`age = 18\nprint(age >= 18)  # True`}
      </Box>

      <Typography variant="h5" fontWeight="bold" mt={1}>
      Logical Operators
      </Typography>
      <Typography>Logical operators are used to combine conditional statements:</Typography>
      <CustomTable columns={columns4} rows={data4} />
      <Typography variant="h6" fontWeight="bold" mt={1}>Example</Typography>
      <Box component="pre" sx={{ background: "#eee", p: 2, borderRadius: 1 }}>
        {`x = 5\nprint(x > 3 and x < 10)  # True`}
      </Box>

      <Typography variant="h5" fontWeight="bold" mt={1}>
      Identity Operators
      </Typography>
      <Typography>Identity operators are used to compare the objects, not if they are equal, but if they are actually the same object, with the same memory location:</Typography>
      <CustomTable columns={columns5} rows={data5} />
      <Typography variant="h6" fontWeight="bold" mt={1}>Example</Typography>
      <Box component="pre" sx={{ background: "#eee", p: 2, borderRadius: 1 }}>
        {`a = [1, 2]\nb = a\nprint(a is b)  # True (same memory)`}
      </Box>


      <Typography variant="h5" fontWeight="bold" mt={1}>
      Membership Operators
      </Typography>
      <Typography>Membership operators are used to test if a sequence is presented in an object:</Typography>
      <CustomTable columns={columns5} rows={data6} />
      <Typography variant="h6" fontWeight="bold" mt={1}>Example</Typography>
      <Box component="pre" sx={{ background: "#eee", p: 2, borderRadius: 1 }}>
        {`colors = ["red", "blue"]\nprint("red" in colors)  # True`}
      </Box>






      
      <Typography></Typography>
    </Paper>
  );
};
export default Operators;
