import { TaskProvider } from "./contexts/tasks";
import { Home } from "./pages/Home";

function App() {
  return (
    <TaskProvider>
      <Home />
    </TaskProvider>
  )
}

export default App
