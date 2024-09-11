import Header from "@/components/ecommerce/Header/Header";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div style={{ padding: "0 0 8px 0"}}><Header /></div>
        {children}
        </body>
    </html>
  );
}
