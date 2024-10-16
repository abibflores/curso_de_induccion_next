import { Dosis } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'


export const dosis = Dosis({
    weight: ['300', '500', '700'],
    subsets: ['latin'],
    variable: '--font-dosis',
    display: 'swap',
  });

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;


  // importante para que el css se aplique en el servidor ponerlo en el <html> dosis.variable
export default function EcommerceLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="es" className={dosis.variable}>
        {(GA_TRACKING_ID && GA_TRACKING_ID !== "G-DEMO") && (
            <GoogleAnalytics gaId={GA_TRACKING_ID} />
        )}
        <body >{children}</body>
      </html>
    );
  }