import { TaskType } from "../../../types";
import { TaskItem } from "../../molecules/TaskItem";


type TaskTypeProps = {
  tasks: TaskType[];
}

export const Task = ({ tasks }: TaskTypeProps) => {

  return (
    <section className="w-full max-w-[46rem] m-auto px-2">
      <header className="flex items-center justify-between mt-24 border-b-[1px] border-gray-300 pb-6">
        <div className="flex gap-2">
          <p className="text-blue font-bold">Tarefas criadas</p>
          <span className="bg-gray-400 w-6 rounded-full flex items-center justify-center text-white font-bold">0</span>
        </div>
        <div className="flex gap-2">
          <p className="text-purple font-bold">Concluídas</p>
          <span className="bg-gray-400 w-6 rounded-full flex items-center justify-center text-white font-bold">0</span>
        </div>
      </header>
      <section>
        <ul>
          {tasks.map((task) => {
            return <TaskItem key={task.id} {...task} />
          })}
        </ul>
      </section>
    </section>
  );
}