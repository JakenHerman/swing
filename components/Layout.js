import React from 'react';

const Layout = (props) => (
    <div style= {{ backgroundColor: '#F1F1F0', height: '100vh' }}>
        {props.children}
    </div>
);

export default Layout;
