import { Dosis } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import dynamic from 'next/dynamic'

 // Load the Footer component dynamically with name export
const Footer = dynamic(() =>
  import('@/components/ecommerce/Footer/Footer').then((mod) => mod.Footer)
)


const dosis = Dosis({
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
        <body>
            {children}
          {/* Load immediately, but in a separate client bundle */}
          <Footer />
        </body>
      </html>
    );
  }