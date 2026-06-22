import { Outlet } from "react-router";

function MainLayout() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <p className="text-3xl uppercase tracking-[0.3em] text-slate-500">
          Crypto Market
        </p>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
