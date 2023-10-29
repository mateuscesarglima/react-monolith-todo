import { CheckCircle, Trash } from '@phosphor-icons/react';
import { TaskType } from '../../../types';
import { useTask } from '../../../hooks/useTask';

type TaskItemType = TaskType;

export const TaskItem = (item: TaskItemType) => {
  const { deleteTask, updateTask } = useTask()

  const dashedText = item.status === 'done' ? 'line-through text-gray-300' : 'text-white';
  return (
    <div className='flex justify-start items-center w-full min-h-[4.5rem] p-4 bg-gray-500 mt-6 rounded-lg gap-5'>
      <button onClick={() => updateTask(item.id)} className='min-w-[1.2rem] h-[1.2rem] flex items-center'>
        {item.status === 'done' ? <CheckCircle className="text-purple w-full h-full" weight="fill" stroke='white' /> : <div className='w-full h-full border-2 border-blue rounded-full '></div>}
      </button>
      <div className='flex-1'>
        <p className={` ${dashedText}`}>{item.title}</p>
      </div>
      <button>
        <Trash
          className='text-gray-300 hover:text-danger active:translate-y-1'
          size={25}
          onClick={() => deleteTask(item.id)} />
      </button>
    </div>
  );
}