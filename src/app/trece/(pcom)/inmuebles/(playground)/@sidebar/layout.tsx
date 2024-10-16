// app/@sidebar/layout.tsx
export default function SidebarLayout({ children }: { children: React.ReactNode }) {
  return (
    <aside>
      {children}
    </aside>
  );
}
