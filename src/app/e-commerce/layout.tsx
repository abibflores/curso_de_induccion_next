// app/layout.tsx
import React from 'react';
import '../globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <h1>My E-commerce Store</h1>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>© 2024 E-commerce Store. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
