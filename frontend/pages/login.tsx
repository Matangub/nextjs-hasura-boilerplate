import React, { useEffect } from 'react';
import {} from '@chakra-ui/react';
import { Flex, Center, Button, Box } from '@chakra-ui/react';
import { signIn, signOut, useSession, getSession } from 'next-auth/client';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';

function Login() {
    const [session, loading] = useSession();
    const router = useRouter();
    if (session) {
        router.push('/');
        return false;
    }

    return (
        <Flex color="white" h="100vh">
            <Box w="70vw">
                <img src="/images/login2.png" style={{ height: '100vh' }} />
            </Box>
            <Center w="30vw">
                <Link href="/api/auth/signin/google">
                    <Button
                        onClick={(e) => {
                            e.preventDefault();
                            signIn();
                        }}
                    >
                        Sign In with Google
                    </Button>
                </Link>
            </Center>
        </Flex>
    );
}

export default Login;
