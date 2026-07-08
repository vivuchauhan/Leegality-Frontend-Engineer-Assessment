import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-100">
      <Header />

      <main className="mx-auto max-w-7xl p-6">
        {children}
      </main>
    </div>
  );
};

export default Layout;