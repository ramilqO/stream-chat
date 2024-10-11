import {StyleSheet} from 'react-native';
import {TypeTheme} from '../../../types/themeTypes';

export const styles = (theme: TypeTheme) =>
  StyleSheet.create({
    input: {
      width: 328,
      height: 48,
      padding: 16,
      borderRadius: 8,
      backgroundColor: theme.colors.whiteSmoke,
      color: theme.colors.black,
      fontWeight: '800',
    },
  });
