import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box
      position={'fixed'}
      bottom={'0'}
      width={'100%'}
      bg={'lightgray'}
      color={'black'}
      py={4}
      textAlign={'center'}
      fontSize={20}
    >
      <Text>&copy; 2023 Contador by Ross Labarca</Text>
   
    </Box>
  );
};

export default Footer;
