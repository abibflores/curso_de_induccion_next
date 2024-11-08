// app/theme.ts
import { DefaultTheme } from 'styled-components';

// Definimos los temas para la tienda
export const themes: Record<string, DefaultTheme> = {
  christmas: {
    background: '#ff3b3f',
    color: '#fff',
    buttonBg: '#0B6623',
    buttonColor: '#fff',
  },
  halloween: {
    background: '#ff7518',
    color: '#2c2c2c',
    buttonBg: '#2c2c2c',
    buttonColor: '#fff',
  },
};

export type ThemeName = keyof typeof themes;
