import { useContext } from "react"
import { TaskContext } from "../contexts/tasks"

export const useTask = () => {
  const { createTask, deleteTask, tasks, updateTask } = useContext(TaskContext)
  return {
    createTask,
    deleteTask,
    tasks,
    updateTask
  }
}