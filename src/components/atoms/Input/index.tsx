import { InputHTMLAttributes } from 'react';

type InputType = {
  error: string | undefined;
} & InputHTMLAttributes<HTMLInputElement>



export const Input = ({ error, ...rest }: InputType) => {
  console.log(error)
  return (
    <input className={`bg-gray-500 text-white flex-1 rounded-lg h-full max-w-[39.875rem] px-2 outline-none border-2 ${error ? 'border-red-400' : 'border-transparent'} focus:${error ? 'border-red-400' : 'border-purple'} `} {...rest} />
  );
}