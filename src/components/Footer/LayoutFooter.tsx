import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Footer';


const LayoutFooter: React.FC = () => {
    const location = useLocation();
    const isPanelPage = location.pathname.startsWith('/panel');

    return (
        <div>
            {isPanelPage ? '' : <Footer />}
            <Outlet />
        </div>
    );
};

export default LayoutFooter;
