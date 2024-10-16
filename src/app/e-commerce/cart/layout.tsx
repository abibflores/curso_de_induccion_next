// src/app/layout.tsx
export default function RootLayout({ children, modal,  }: { children: React.ReactNode, modal: React.ReactNode }) {

  return (
    <html lang="en">
      <body>
          <div>
            {children}
          </div>
            <div id="modal-root">
                {modal}
            </div>
      </body>
    </html>
  );
}