import Sidebar from "@/components/Sidebar/Sidebar";

// app/dashboard/layout.js
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <section style={{ flex: 1 }}>{children}</section>
    </div>
  );
}
