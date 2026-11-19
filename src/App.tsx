import { 
  Center,
  ChakraProvider,
  Input,
  Box,
  Button,
  Flex
} from '@chakra-ui/react'
import { login } from './services/login';
import { Layout } from './components/Layout';
import { Provider } from './components/ui/provider';
import { Header } from './components/Header/Header';
import { LoginForm } from './components/LoginForm/LoginForm';

function App() {
  return (
    <Flex   
      minHeight='100vh'
      bgImage='url(/background-login.svg)'
      bgSize='cover'
      backgroundPosition='center'
      bgRepeat='no-repeat'
      direction='column'
    >
      <Header />

      <Center flex='1'>
        <LoginForm />
      </Center>
    </Flex >
  );
}

export default App;
