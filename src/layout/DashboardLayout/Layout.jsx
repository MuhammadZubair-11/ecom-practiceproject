import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';
import Header from '../Header';
import Footer from '../Footer';

const Layout = () => {
    return (
        <div className="flex flex-col h-screen bg-gray-100">
            <header className="w-full bg-white shadow-sm z-10">
                <Header />
            </header>
                <main className="flex-1 h-full overflow-y-auto bg-gray-50">
                    <Outlet />
                </main>
                <Footer>
                    <Footer/>
                </Footer>
        </div>
    );
};

export default Layout;
