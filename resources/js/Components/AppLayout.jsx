import React from 'react';
import NavBar from '../Components/NavBar';

const AppLayout = ({ children }) => {
    return (
        <div>
            <NavBar />
            <main>{children}</main>
        </div>
    );
};

export default AppLayout;