import React, { FC } from 'react';
import { View, Text } from 'react-native';

const Navbar: FC<{ showActions?: boolean }> = ({ showActions }) => {
    return (
        <View>
            <Text>Navbar Component</Text>
            {showActions}
        </View>
    );
};

export default Navbar;
