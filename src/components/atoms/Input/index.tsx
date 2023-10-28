import { HtmlHTMLAttributes } from 'react';

type InputType = HtmlHTMLAttributes<HTMLInputElement>

export const Input = ({ ...rest }: InputType) => {
  return (
    <input className='bg-gray-500 text-white flex-1 rounded-lg h-full max-w-[39.875rem] px-2 outline-none border-2 border-transparent focus:border-purple' {...rest} />
  );
}