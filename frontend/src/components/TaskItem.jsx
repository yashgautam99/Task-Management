import { updateTask } from "../services/api";
import {
  Card,
  CardContent,
  Typography,
  Checkbox,
  IconButton,
  Box,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

const TaskItem = ({ task, onDelete, setEditingTask, fetchTasks }) => {
  const handleToggleComplete = async () => {
    try {
      await updateTask(task._id, { ...task, completed: !task.completed });
      fetchTasks();
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  return (
    <Card sx={{ mb: 2, backgroundColor: task.completed ? "#f5f5f5" : "white" }}>
      <CardContent>
        <Box display="flex" alignItems="center">
          <Checkbox
            checked={task.completed}
            onChange={handleToggleComplete}
            color="primary"
          />
          <Box flexGrow={1}>
            <Typography
              variant="h6"
              sx={{
                textDecoration: task.completed ? "line-through" : "none",
                color: task.completed ? "text.secondary" : "text.primary",
              }}
            >
              {task.title}
            </Typography>
            {task.description && (
              <Typography variant="body2" color="text.secondary">
                {task.description}
              </Typography>
            )}
          </Box>
          <IconButton onClick={() => setEditingTask(task)}>
            <Edit color="primary" />
          </IconButton>
          <IconButton onClick={() => onDelete(task._id)}>
            <Delete color="error" />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TaskItem;
