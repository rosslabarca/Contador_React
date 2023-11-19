import React from 'react';
import { Heading, Flex, Link, Image } from '@chakra-ui/react';


const Header = () => {
  return (
    <Flex justifyContent= {'space-between'} alignItems={'center'} bg={'lightgray'}>

      <Heading size={'lg'} fontSize={'50px'} textAlign={'center'}  padding={'20px'}>
        C o n t a d o r
      </Heading>

      <Flex alignItems={'center'}>

        <Link href="https://www.instagram.com/" isExternal>
          <Image src={'./images/instagram.png'} alt="Instagram Logo" boxSize={'40px'}/>
        </Link>
        <Link href="https://github.com/rosslabarca" isExternal>
          <Image src={'./images/github.png'} alt="Github Logo" boxSize={'50px'} />
        </Link>

      </Flex>

    </Flex>
  );
};

export default Header;
