import { Dosis } from 'next/font/google'

export const dosis = Dosis({
    weight: ['300', '500', '700'],
    subsets: ['latin'],
    variable: '--font-dosis',
    display: 'swap',
  });

  // importante para que el css se aplique en el servidor ponerlo en el <html> dosis.variable
export default function EcommerceLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="es" className={dosis.variable}>
        <body >{children}</body>
      </html>
    );
  }