import { CssBaseline, Container } from "@mui/material";
import TaskList from "./components/TaskList.jsx";

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <TaskList />
      </Container>
    </>
  );
}

export default App;
