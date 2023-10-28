import { useState } from 'react';
import { Header } from '../../components/organisms/Header';
import { Task } from '../../components/organisms/Tasks';
import { TaskType } from '../../types';


export const Home = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [tasks, setTasks] = useState<TaskType[]>([{
    id: crypto.randomUUID(),
    title: 'Criar um novo projeto',
    status: 'done'
  }]);


  return (
    <section className='flex flex-col h-full'>
      <Header />
      <Task tasks={tasks} />
    </section>
  );
}