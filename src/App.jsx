import React from 'react';
import { ChakraProvider,} from '@chakra-ui/react';
import Contador from './components/Contador/Contador';
import './App.css'


const App = () => {
  
  return (
    <ChakraProvider>
        <Contador/>
    </ChakraProvider>
  );
};

export default App;
