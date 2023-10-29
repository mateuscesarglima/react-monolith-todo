
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import * as zod from 'zod';
import { Button } from '../../atoms/Button';
import { Input } from '../../atoms/Input';
import { FingerprintSimple } from '@phosphor-icons/react';

const schema = zod.object({
  title: zod.string().min(1, { message: 'O título da task não pode ser vazio' }).max(50, { message: 'O título da task não pode ter mais de 50 caracteres' })
})

export type InputFormType = zod.infer<typeof schema>

type InputContainerType = {
  createTask: (task: InputFormType) => void;
}

export const InputContainer = ({ createTask }: InputContainerType) => {
  const { handleSubmit, control, formState: { errors } } = useForm<InputFormType>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: ''
    }
  });



  return (
    <form className='absolute h-[3.375rem] w-full px-2 bottom-0 input-container flex flex-col' onSubmit={handleSubmit(createTask)}>
      <div className='w-full h-full flex items-center justify-center gap-2'>
        <Controller
          name='title'
          control={control}
          render={({ field }) => <Input type="text" placeholder='Adicione uma nova tarefa' {...field} error={errors.title?.message} />}
        />
        <Button type='submit' />
      </div>
    </form>
  );
}