import React from 'react';
import Login from '../../../screens/Login/Login';
import Register from '../../../screens/Register/Register';
import ChatList from '../../../screens/ChatList/ChatList';

export const publicRoutes = [
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/register',
        element: <Register />,
    },
];

export const privateRoutes = [
    {
        path: '/chats',
        element: <ChatList />,
    },
];
