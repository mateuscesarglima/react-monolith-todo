import { PlusCircle } from '@phosphor-icons/react';
import { ButtonHTMLAttributes } from 'react';

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ ...rest }: ButtonType) => {
  return (
    <button className='bg-blue-dark text-white flex items-center gap-1 px-2 h-full hover:bg-blue rounded-lg active:translate-y-1' {...rest} >
      Criar <PlusCircle color="#FFF" size={25} />
    </button>
  );
}