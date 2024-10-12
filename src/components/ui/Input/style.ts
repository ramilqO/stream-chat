import {StyleSheet} from 'react-native';
import {TypeTheme} from '../../../types/themeTypes';

export const styles = (theme: TypeTheme) =>
  StyleSheet.create({
    input: {
      backgroundColor: theme.colors.whiteSmoke,
      color: theme.colors.black,
      fontWeight: 'bold',
      height: 48,
      width: 328,
      borderRadius: 8,
      padding: 16,
      marginTop: 8,
    },
    error: {
      color: theme.colors.accentRed,
      fontSize: 12,
      fontWeight: '700',
    },
  });
