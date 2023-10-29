import { createContext, useState } from 'react';
import { InputFormType } from '../../components/molecules/InputContainer';
import { TaskType } from '../../types';


type TaskProviderType = {
  children: React.ReactNode;
}

type TaskContextType = {
  tasks: TaskType[];
  createTask: (task: InputFormType) => void;
  updateTask: (task: TaskType) => void;
  deleteTask: (id: string) => void;
}

export const TaskContext = createContext({} as TaskContextType)


export const TaskProvider = ({ children }: TaskProviderType) => {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [tasks, setTasks] = useState<TaskType[]>([{
    id: crypto.randomUUID(),
    title: 'Criar um novo projeto',
    status: 'done'
  },
  ]);

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

  const updateTask = () => { }

  const deleteTask = () => { }

  return (
    <TaskContext.Provider value={{ tasks, createTask, updateTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  )
}

