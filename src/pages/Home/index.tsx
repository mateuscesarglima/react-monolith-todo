import { Header } from '../../components/organisms/Header';
import { Task } from '../../components/organisms/Tasks';
import { useTask } from '../../hooks/useTask';



export const Home = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { tasks } = useTask()


  return (
    <section className='flex flex-col h-full'>
      <Header />
      <Task tasks={tasks} />
    </section>
  );
}