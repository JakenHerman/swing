import React from 'react';
import Head from './head';
import Nav from './nav';
import Footer from './footer';

const Layout = (props) => (
    <>
        <div style= {{ backgroundColor: '#F1F1F0', minHeight: 'calc(100vh - 100px)' }}>
            <Head title={props.title} />
            <Nav />
            {props.children}
        </div>
        <Footer />
    </>
);

export default Layout;
