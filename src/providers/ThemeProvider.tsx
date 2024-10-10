import React, { createContext, useState, ReactNode, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { themes } from '../utils/themes';

export const ThemeContext = createContext<keyof typeof themes>('light');
export const SetterContext = createContext<React.Dispatch<React.SetStateAction<keyof typeof themes>> | null>(null);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<keyof typeof themes>('light');

    useEffect(() => {
        const loadTheme = async () => {
            try {
                const savedTheme = await AsyncStorage.getItem('@user_theme');
                if (savedTheme) {
                    setTheme(savedTheme as keyof typeof themes);
                }
            } catch (error) {
                console.error('Error loading theme:', error);
            }
        };

        loadTheme();
    }, []);

    return (
        <ThemeContext.Provider value={theme}>
            <SetterContext.Provider value={setTheme}>
                {children}
            </SetterContext.Provider>
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
