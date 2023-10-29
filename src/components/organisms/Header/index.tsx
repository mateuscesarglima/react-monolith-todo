import logo from '../../../assets/logo.png';
import { InputContainer } from '../../molecules/InputContainer';




export const Header = () => {
  return (
    <header className='relative flex items-center justify-center h-52 bg-gray-700'>
      <img src={logo} alt="todo logo image" />
      <InputContainer />
    </header>
  );
}