import logo from '../../../assets/logo.png';
import { InputContainer, InputFormType } from '../../molecules/InputContainer';


type HeaderType = {
  createTask: (task: InputFormType) => void;
}

export const Header = ({ createTask }: HeaderType) => {
  return (
    <header className='relative flex items-center justify-center h-52 bg-gray-700'>
      <img src={logo} alt="todo logo image" />
      <InputContainer createTask={createTask} />
    </header>
  );
}