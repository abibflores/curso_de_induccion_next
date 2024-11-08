// app/StyledComponentsRegistry.tsx
'use client';
import React, { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

export const StyledComponentsRegistry = ({ children }: { children: React.ReactNode }) => {
  // Crear el stylesheet solo una vez con lazy initial state
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  // Si estamos en el cliente, devolver solo los children
  if (typeof window !== 'undefined') return <>{children}</>;

  // En el servidor, usar StyleSheetManager
  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>{children}</StyleSheetManager>
  );
};
