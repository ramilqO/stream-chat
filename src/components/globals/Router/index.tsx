import React, { FC } from 'react';
import { NativeRouter, Route, Routes } from 'react-router-native';
import { privateRoutes, publicRoutes } from './routes';

const Router: FC = () => {
    const isAuth = false;

    return (
        <NativeRouter>
            <Routes>
                {[isAuth ? privateRoutes : publicRoutes].flat().map(route => {
                    return (
                        <Route key={route.path} path={route.path} element={route.element} />
                    );
                })}
            </Routes>
        </NativeRouter>
    );
};

export default Router;
