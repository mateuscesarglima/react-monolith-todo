
import { Button } from '../../atoms/Button';
import { Input } from '../../atoms/Input';

export const InputContainer = () => {
  return (
    <div className='
    absolute 
    flex 
    items-center 
    justify-center 
    gap-2 
    h-[3.375rem]
    w-full
    px-2
    bottom-0
    input-container
    '>
      <Input placeholder='Adicione uma nova tarefa' />
      <Button />
    </div>
  );
}