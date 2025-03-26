import React, { useState } from 'react';
import { Box } from '@mui/material';
import Sidebar from './Sidebar';
import Variables from './topics/Variable';
import Intro from './topics/Intro';
import DataTypes from './topics/Datatypes';
import Numbers from './topics/Numbers';
import Strings from './topics/Strings';
import Booleans from './topics/Booleans';
import Operators from './topics/Operators';
import Lists from './topics/Lists';
import Tuples from './topics/Tuples';
import Sets from './topics/Sets';
import Dictionaries from './topics/Dictionaries';
import IfElse from './topics/IfElse';
import WhileLoop from './topics/WhileLoop';
import ForLoop from './topics/ForLoop';
import Functions from './topics/Functions';

const topics = {
  'Python Intro': <Intro />,
  'Python Variables': <Variables />,
  'Python Data Types': <DataTypes />,
  'Python Numbers': <Numbers />,
  'Python Strings': <Strings />,
  'Python Booleans': <Booleans />,
  'Python Operators': <Operators />,
  'Python Lists': <Lists />,
  'Python Tuples': <Tuples />,
  'Python Sets': <Sets />,
  'Python Dictionaries': <Dictionaries />,
  'Python If ... Else':<IfElse/>,
  'Python While Loops':<WhileLoop/>,
  'Python For Loops':<ForLoop/>,
  'Python Functions':<Functions/>,
};

const PythonLearn = () => {
  const [selectedTopic, setSelectedTopic] = useState('Python Variables');

  return (
    <>
      <Box sx={{ display: 'flex', pt: 5 }}>
        <Sidebar onSelect={setSelectedTopic} />
        <Box sx={{ flexGrow: 1, p: 3 }}>{topics[selectedTopic]}</Box>
      </Box>
    </>
  );
};

export default PythonLearn;
