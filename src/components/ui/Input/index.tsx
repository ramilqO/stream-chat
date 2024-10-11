import React, { FC } from 'react';
import { View, TextInput } from 'react-native';
import useTheme from '../../../hooks/useTheme';
import { styles } from './style';
import { themes } from '../../../utils/themes';

const Input: FC<{ placeholder: string }> = ({ placeholder }) => {
    const theme = useTheme();
    const themedStyles = styles(themes[theme]);

    return (
        <View>
            <TextInput style={themedStyles.input}
                placeholder={placeholder}
                placeholderTextColor={themes[theme].colors.grey}
            />
        </View>
    );
};

export default Input;
