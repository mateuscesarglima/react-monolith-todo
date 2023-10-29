import { Header } from '../../components/organisms/Header';
import { Task } from '../../components/organisms/Tasks';
import { useTask } from '../../hooks/useTask';



export const Home = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { tasks, createTask, deleteTask, updateTask } = useTask()


  return (
    <section className='flex flex-col h-full'>
      <Header createTask={createTask} />
      <Task tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} />
    </section>
  );
}