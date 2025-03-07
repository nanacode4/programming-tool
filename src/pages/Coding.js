import React, { useState } from "react";
import { Container, Typography, Button, Box, Paper, MenuItem, Select } from "@mui/material";
import Editor from "@monaco-editor/react";

const Coding = () => {
  const [code, setCode] = useState(`print("Hello, world!")`);  // 默认 Python 代码
  const [output, setOutput] = useState("");
  const [language, setLanguage] = useState("python");  // 默认 Python

  const handleRunCode = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/run/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ code, language })  
      });

      const result = await response.json();
      
      if (result.error) {
        setOutput(`Error:\n${result.error}`);  // show wrong code
      } else {
        setOutput(`Output:\n${result.output}`);  // show correct output
      }
    } catch (error) {
      console.error("Error running code:", error);
      setOutput("Failed to connect to server");
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Typography variant="h3" color="secondary" gutterBottom>
        Coding Page
      </Typography>
      
      {/* Choose a programming language */}
      <Select
        value={language}
        onChange={(e) => {
          setLanguage(e.target.value);
          if (e.target.value === "java") {
            setCode(`class Code {\n  public static void main(String[] args) {\n    System.out.println("Hello, world!");\n  }\n}`);
          } else if (e.target.value === "python") {
            setCode(`print("Hello, world!")`);
          } else {
            setCode(`#include <iostream>\nusing namespace std;\nint main() {\n    cout << "Hello, world!" << endl;\n    return 0;\n}`);
          }
        }}
        sx={{ mb: 2 }}
      >
        <MenuItem value="java">Java</MenuItem>
        <MenuItem value="python">Python</MenuItem>
        <MenuItem value="cpp">C++</MenuItem>
      </Select>

      {/* Code Editor */}
      <Box sx={{ border: "1px solid #ccc", borderRadius: "5px", overflow: "hidden" }}>
        <Editor
          height="400px"
          language={language === "cpp" ? "cpp" : language}
          value={code}
          onChange={(newCode) => setCode(newCode)}
          theme="vs-dark"
        />
      </Box>

      {/* Run Button */}
      <Button 
        variant="contained" 
        color="primary" 
        sx={{ mt: 2 }}
        onClick={handleRunCode}
      >
        Run Code
      </Button>

      {/* Output Box*/}
      <Paper elevation={3} sx={{ mt: 3, p: 2, backgroundColor: "#f5f5f5" }}>
        {/* <Typography variant="h6">Output:</Typography> */}
        <Typography 
          variant="body1" 
          sx={{ whiteSpace: "pre-wrap", color: output.startsWith("Error:") ? "red" : "black" }}
        >
          {output}
        </Typography>
      </Paper>
    </Container>
  );
};

export default Coding;
