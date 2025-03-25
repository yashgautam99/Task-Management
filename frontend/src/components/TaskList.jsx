import { useState, useEffect } from "react";
import { getTasks, deleteTask } from "../services/api";
import TaskItem from "./TaskItem";
import TaskForm from "./TaskForm";
import { Button, Typography, Box } from "@mui/material";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const { data } = await getTasks();
      setTasks(data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      fetchTasks();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <Box sx={{ maxWidth: 800, margin: "auto", p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Task Manager
      </Typography>
      <TaskForm
        editingTask={editingTask}
        setEditingTask={setEditingTask}
        fetchTasks={fetchTasks}
      />
      {tasks.map((task) => (
        <TaskItem
          key={task._id}
          task={task}
          onDelete={handleDelete}
          setEditingTask={setEditingTask}
          fetchTasks={fetchTasks}
        />
      ))}
    </Box>
  );
};

export default TaskList;
