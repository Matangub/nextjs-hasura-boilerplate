import { Box, Button, Heading, Stack, Text } from '@chakra-ui/react';
import { signIn, signOut, useSession } from 'next-auth/client';
import Link from 'next/link';
import React from 'react';
import { Flex, Spacer, Center, Square } from '@chakra-ui/react';
import { Container } from '@chakra-ui/react';

const IndexPageComponent = () => {
    const [session] = useSession();

    return (
        <Flex color="white" h="93vh">
            <Container maxW="20vw" bg="green.500">
                <Text>Box 1</Text>
            </Container>
            <Container flex="1" bg="tomato" maxW="80wh">
                <Text>Box 3</Text>
            </Container>
        </Flex>
    );
};

export default IndexPageComponent;
