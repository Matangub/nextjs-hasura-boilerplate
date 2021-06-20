import { Box, ChakraProvider, theme, VStack } from '@chakra-ui/react';
import Navbar from 'components/Navbar';
import React, { FC } from 'react';
import { signIn, signOut, useSession } from 'next-auth/client';

const Layout: FC = ({ children }) => {
    const [session] = useSession();
    return (
        <ChakraProvider theme={theme}>
            {session && <Navbar />}
            <Box w="full" h="full">
                {children}
            </Box>
        </ChakraProvider>
    );
};

export default Layout;
