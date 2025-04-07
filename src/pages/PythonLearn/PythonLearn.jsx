import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableRow, TableHead, Paper } from '@mui/material';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { useNavigate } from 'react-router-dom';

const menuItems = [
  { label: 'Python Introduction', path: 'intro' },
  { label: 'Python Variables', path: 'variables' },
  { label: 'Python Data Types', path: 'datatypes' },
  { label: 'Python Numbers', path: 'numbers' },
  { label: 'Python Strings', path: 'strings' },
  { label: 'Python Booleans', path: 'booleans' },
  { label: 'Python Operators', path: 'operators' },
  { label: 'Python Lists', path: 'lists' },
  { label: 'Python Tuples', path: 'tuples' },
  { label: 'Python Sets', path: 'sets' },
  { label: 'Python Dictionaries', path: 'dictionaries' },
  { label: 'Python If ... Else', path: 'ifelse' },
  { label: 'Python While Loops', path: 'while' },
  { label: 'Python For Loops', path: 'for' },
  { label: 'Python Functions', path: 'functions' },
];

const PythonLearn = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ maxWidth: '1200px', mx: 'auto', py: 7 }}>
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 4 }}>
        Introduction to Python
      </Typography>
      <Paper elevation={2}>
        <Table>
          <TableBody>
            {menuItems.map((item, index) => (
              <TableRow hover key={index} onClick={() => navigate(item.path)} sx={{ cursor: 'pointer' }}>
                <TableCell sx={{ py: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <InsertDriveFileIcon sx={{ color: 'gray', fontSize: 22, mr: 4 }} />
                    <Typography sx={{ fontSize: '1.5rem', fontWeight: 500 }}>{item.label}</Typography>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
};

export default PythonLearn;
