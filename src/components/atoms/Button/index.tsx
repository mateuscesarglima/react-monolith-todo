import { PlusCircle } from '@phosphor-icons/react';



export const Button = () => {
  return (
    <button className='bg-blue-dark text-white flex items-center gap-1 px-2 h-full hover:bg-blue rounded-r-lg'>
      Criar <PlusCircle color="#FFF" size={25} />
    </button>
  );
}