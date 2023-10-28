import { Header } from '../../components/organisms/Header';
import { Task } from '../../components/organisms/Tasks';




export const Home = () => {
  return (
    <section className='flex flex-col h-full'>
      <Header />
      <Task />
    </section>
  );
}