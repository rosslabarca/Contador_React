import React, { useState } from 'react';
import { Box, Button, Container, Text, useBreakpointValue, } from '@chakra-ui/react';

const Contador = ({valorInicial = 0 }) => {

    const [contador, setContador] = useState(valorInicial);

    const incrementar = (valor = 1 ) => {
        setContador( contador + valor);
    };

    const decrementar = (valor = 1, negativo) => {
        if(!negativo && contador <1) return
        setContador( contador - valor);
    };

    const resetear = () => {
        setContador(0)
    };

    const textSize = useBreakpointValue({ base: 'xl', md: '2xl', lg: '3xl' });


    return (
        <Container
            maxW={'500'}
            padding={10}
            alignItems={'center'}
            marginTop={0}
            border={'solid'}
            borderRadius={10}
            textAlign={'center'}
            mx={'auto'}
            my={'auto'}
            bgColor={'lightgray'}
        >

            <Box textAlign={'center'} >
                <Text fontSize={textSize} paddingBottom={10}>Contador: {contador}</Text>
                <Button onClick={ () =>incrementar()} ml={2} size={{ base: 'sm', md: 'md' }} mt={4}>
                    Incrementar
                </Button>
                <Button onClick={() => resetear()} ml={2} size={{ base: 'sm', md: 'md' }} mt={4}>
                   Resetear
                </Button>
                <Button onClick={() =>decrementar( 1, false)} ml={2} size={{ base: 'sm', md: 'md' }} mt={4}>
                    Decrementar
                </Button>
            </Box>
            
        </Container>

    );
};

export default Contador;