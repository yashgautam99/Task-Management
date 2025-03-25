import { useState, useEffect } from "react";
import { createTask, updateTask } from "../services/api";
import { TextField, Button, Box, Typography } from "@mui/material";

const TaskForm = ({ editingTask, setEditingTask, fetchTasks }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    completed: false,
  });

  useEffect(() => {
    if (editingTask) {
      setTask(editingTask);
    }
  }, [editingTask]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingTask) {
        await updateTask(editingTask._id, task);
        setEditingTask(null);
      } else {
        await createTask(task);
      }
      setTask({ title: "", description: "", completed: false });
      fetchTasks();
    } catch (error) {
      console.error("Error saving task:", error);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 3 }}>
      <Typography variant="h6" gutterBottom>
        {editingTask ? "Edit Task" : "Add New Task"}
      </Typography>
      <TextField
        fullWidth
        label="Title"
        name="title"
        value={task.title}
        onChange={handleChange}
        required
        margin="normal"
      />
      <TextField
        fullWidth
        label="Description"
        name="description"
        value={task.description}
        onChange={handleChange}
        margin="normal"
        multiline
        rows={3}
      />
      <Box sx={{ mt: 2 }}>
        <Button type="submit" variant="contained" color="primary">
          {editingTask ? "Update" : "Add"} Task
        </Button>
        {editingTask && (
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => setEditingTask(null)}
            sx={{ ml: 2 }}
          >
            Cancel
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default TaskForm;
