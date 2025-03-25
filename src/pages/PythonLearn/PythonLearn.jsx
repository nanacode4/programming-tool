import React, { useState } from "react";
import { Box } from "@mui/material";
import Sidebar from "./Sidebar";
import Variables from "./topics/Varibales";
import Intro from "./topics/Intro";
import DataTypes  from "./topics/Datatypes";
import Numbers from "./topics/Numbers";
import Strings from "./topics/Strings";
import Booleans from "./topics/Booleans";
import Operators from "./topics/Operators";

const topics = {
  "Python Intro":<Intro/>,
  "Python Variables": <Variables/>,
  "Python Data Types": <DataTypes/>,
  "Python Numbers": <Numbers/>,
  "Python Strings": <Strings/>,
  "Python Booleans": <Booleans/>,
  "Python Operators": <Operators />,
};

const PythonLearn = () => {
  const [selectedTopic, setSelectedTopic] = useState("Python Variables");

  return (
    <>
    <Box sx={{ display: "flex",pt: 5 }}>
      <Sidebar onSelect={setSelectedTopic} />
      <Box sx={{ flexGrow: 1, p: 3 }}>{topics[selectedTopic]}</Box>
    </Box>
    </>
  );
};

export default PythonLearn;
