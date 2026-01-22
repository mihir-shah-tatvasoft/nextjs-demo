import Sidebar from "./Sidebar";
import Header from "./Header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="wrapper">
      <Header />
      <Sidebar />

      <main className="main-content">
        <div className="main-inner">
          {children}
        </div>
      </main>
    </div>
  );
}
