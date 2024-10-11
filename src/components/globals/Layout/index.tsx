import React, { FC, ReactNode } from 'react';
import { View } from 'react-native';
import Navbar from '../Navbar';
import BottomNav from '../BottomNav';

interface ILayout {
    showBottomNav?: boolean;
    showNavbar?: boolean;

    children: ReactNode
}

const Layout: FC<ILayout> = ({ showBottomNav, showNavbar, children }) => {
    return (
        <View>
            {showNavbar && <Navbar />}
            {children}
            {showBottomNav && <BottomNav />}
        </View>
    );
};

export default Layout;
