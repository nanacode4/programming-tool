import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Grid, Button, Box, Typography, Paper, Avatar, LinearProgress, Stack, CircularProgress } from '@mui/material';
import user from './../assets/images/user.jpeg';

const Progress = () => {
  const username = localStorage.getItem('username');
  const [data, setData] = useState([]);
  const userCourses = data.filter((item) => item.username === username);
  const navigate = useNavigate();

  useEffect(() => {
    if (!username) {
      navigate('/login');
    }
  }, [username, navigate]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/learning-path/usercourses/')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      <Box sx={{ maxWidth: 900, mx: 'auto', mt: 4 }}>
        {/* User avatar and name */}
        <Paper sx={{ p: 3, display: 'flex', alignItems: 'center', mb: 4, position: 'relative' }}>
          <Avatar src={user} sx={{ width: 100, height: 100, mr: 3 }} />
          <Box>
            <Typography variant="h4" fontWeight="bold">
              {username}
            </Typography>
            <Typography variant="h6">{username}@gmail.com</Typography>
            <Typography variant="h6">Student at University of Galway~</Typography>
          </Box>
          <Button
            variant="contained"
            color="primary"
            sx={{ position: 'absolute', top: 56, right: 36 }}
            onClick={() => {
              localStorage.removeItem('username');
              navigate('/login');
            }}
          >
            Logout
          </Button>
        </Paper>

        {/* Course Progress */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom>
                Course Progress
              </Typography>
              <Stack spacing={3}>
                {userCourses.map((course, index) => (
                  <Box key={index}>
                    <Typography variant="subtitle1" fontWeight="bold">
                      {course.course} &nbsp;
                    </Typography>
                    <LinearProgress
                      variant="determinate"
                      value={course.level || 0}
                      sx={{
                        height: 10,
                        borderRadius: 5,
                        mt: 1,
                        backgroundColor: '#e0e0e0',
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: '#373d38',
                        },
                      }}
                    />
                    <Typography variant="body2" align="right" mt={0.5}>
                      {course.level}%
                    </Typography>
                  </Box>
                ))}
              </Stack>
              <Box sx={{ display: 'flex', justifyContent: 'left', mt: 2, mb: 2 }}>
                <Button variant="contained" color="primary" onClick={() => navigate('/dashboard')}>
                  Browse Courses
                </Button>
              </Box>
            </Paper>
          </Grid>
          {/* quiz part */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom>
                Quiz
              </Typography>
              <Typography variant="h6">You don't have any saved quiz yet</Typography>
              <Box sx={{ display: 'flex', justifyContent: 'left', mt: 2, mb: 2 }}>
                <Button variant="contained" color="primary" onClick={() => navigate('/dashboard')}>
                  Add new
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Progress;
