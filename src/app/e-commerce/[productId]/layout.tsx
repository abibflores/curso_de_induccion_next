import Header from "@/components/ecommerce/Header/Header";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div><Header /></div>
        {children}
        </body>
    </html>
  );
}
