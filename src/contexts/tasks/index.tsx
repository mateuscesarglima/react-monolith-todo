import { createContext, useState } from 'react';
import { InputFormType } from '../../components/molecules/InputContainer';
import { TaskType } from '../../types';


type TaskProviderType = {
  children: React.ReactNode;
}

type TaskContextType = {
  tasks: TaskType[];
  createTask: (task: InputFormType) => void;
  updateTask: (id: string) => void;
  deleteTask: (id: string) => void;
}

export const TaskContext = createContext({} as TaskContextType)


export const TaskProvider = ({ children }: TaskProviderType) => {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const createTask = (task: InputFormType) => {
    const taskAlreadyExists = tasks.find(obj => obj.title === task.title);
    if (taskAlreadyExists) {
      return;
    }
    setTasks(prev => [...prev, {
      id: crypto.randomUUID(),
      title: task.title,
      status: 'open'
    }])
  }

  const updateTask = (id: string) => {
    const newTasks = tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          status: task.status === 'open' ? 'done' : 'open' as TaskType['status']
        }
      }
      return task;
    }).filter(task => task !== undefined)
    setTasks(newTasks)
  }

  const deleteTask = (id: string) => {
    const newTasks = tasks.filter(task => task.id !== id)
    setTasks(newTasks)
  }

  return (
    <TaskContext.Provider value={{ tasks, createTask, updateTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  )
}

