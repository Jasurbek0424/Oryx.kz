import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from '..//NavBar/NavBar';
import NavBarA from '../AutenticatedNav/NavBarA';

const Layout: React.FC = () => {
    const location = useLocation();
    const isProfilePage = location.pathname.startsWith('/profile');
    const isPanelPage = location.pathname.startsWith('/panel');

    return (
        <div>
            {isProfilePage ? <NavBarA /> : isPanelPage ? '' : < NavBar />}
            <Outlet />
        </div>
    );
};

export default Layout;
