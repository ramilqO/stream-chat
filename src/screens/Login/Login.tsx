import React, { FC } from 'react';
import { View, Text } from 'react-native';
import Input from '../../components/ui/Input/index';

const Login: FC = () => {
    return (
        <View>
            <Text>Login Component</Text>
            <Input placeholder="email" error="Ошибка в инпуте" />
            <Input placeholder="password" />
        </View>
    );
};

export default Login;
