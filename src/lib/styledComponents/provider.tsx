'use client'
import { themes } from '@/theme/theme';
import { ThemeProvider } from 'styled-components';

export type Theme = 'christmas' | 'halloween';

export const ThemeClientProvider = ({ children, theme = 'christmas' }: { children: React.ReactNode, theme?: Theme }) => {
    return (
        <ThemeProvider theme={themes[theme]}>
            {children}
        </ThemeProvider>
    )
}
