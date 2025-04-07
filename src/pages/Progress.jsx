import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Paper,
  LinearProgress,
  Avatar,
  Box,
  Button,
} from "@mui/material";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { useNavigate } from "react-router-dom";

const Progress = () => {
  const [modules, setModules] = useState([]);
  const [achievements, setAchievements] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/dashboard/")
      .then((response) => response.json())
      .then((data) => {
        setModules(data.modules);
        setAchievements(data.achievements);
      })
      .catch((error) => console.error("Error fetching dashboard data:", error));
  }, []);

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Typography variant="h3" color="primary" gutterBottom>
        Learning Dashboard
      </Typography>

      <Grid container spacing={4}>
        {/* Row 1: Modules Progress & Achievements */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3, textAlign: "left" }}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Your Progress
            </Typography>
            {modules.map((module, index) => (
              <Box key={index} sx={{ mb: 2 }}>
                <Typography variant="subtitle1">{module.name}</Typography>
                <LinearProgress
                  variant="determinate"
                  value={module.progress}
                  sx={{ height: 8, borderRadius: 5 }}
                />
              </Box>
            ))}
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, textAlign: "left" }}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Achievements
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
              {achievements.map((achieve, index) => (
                <Avatar
                  key={index}
                  sx={{ width: 60, height: 60, bgcolor: "gold" }}
                >
                  🏆
                </Avatar>
              ))}
            </Box>
          </Paper>
        </Grid>

        {/* Row 2: Goals & Overall Progress */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3, textAlign: "left" }}>
            <Typography variant="h5" sx={{ mb: 1 }}>
              Goals
            </Typography>
            <Typography variant="body1">
              Complete all modules to earn your certification! 🎓
            </Typography>
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
              View Courses
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, textAlign: "left" }}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Overall Progress
            </Typography>
            <PieChart width={250} height={250}>
              <Pie
                data={modules}
                dataKey="progress"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label
              >
                {modules.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </Paper>
        </Grid>
      </Grid>

      {/* Add button to navigate to Learning Path */}
      <Grid item xs={12}>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/learningPath")}
          >
            Explore Learning Path
          </Button>
        </Box>
      </Grid>
    </Container>
  );
};

export default Progress;
