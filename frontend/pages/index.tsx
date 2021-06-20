import React, { useEffect } from 'react';
import Head from 'next/head';
import Page from 'components//index';
import { NextPage } from 'next';
import { useSession } from 'next-auth/client';
import Router, { useRouter } from 'next/router';

const IndexPage = () => {
    const [session, loading] = useSession();
    const router = useRouter();
    useEffect(() => {
        if (!session) {
            router.push('/login');
        }
    }, [session]);

    return (
        <>
            <Head>
                <title>Index Page</title>
            </Head>
            <Page />
        </>
    );
};

export default IndexPage;
