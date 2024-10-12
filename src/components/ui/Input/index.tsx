import React, { FC } from 'react';
import { Text, TextInput, View } from 'react-native';
import useTheme from '../../../hooks/useTheme';
import { styles } from './style';
import { themes } from '../../../utils/themes';

interface IInput {
    placeholder: string;
    onChange?: () => void;
    error?: string;
    inputMode?: 'decimal' | 'email' | 'none' | 'numeric' | 'search' | 'tel' | 'text' | 'url';
}

const Input: FC<IInput> = ({ placeholder, onChange, error, inputMode }) => {
    const theme = useTheme();
    const themedStyles = styles(themes[theme]);

    return (
        <View>
            <TextInput
                style={themedStyles.input}

                placeholder={placeholder}
                placeholderTextColor={themes[theme].colors.grey}

                onChange={onChange}
                inputMode={inputMode}
            />
            {error && <Text style={themedStyles.error}>{error}</Text>}
        </View>
    );
};

export default Input;
