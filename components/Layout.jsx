import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <React.Fragment>
      <Head>
        <title> Property Zen</title>
      </Head>
      <Box maxWidth="1200px" m="auto">
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <Footer />
      </Box>
    </React.Fragment>
  );
}

export default Layout;
