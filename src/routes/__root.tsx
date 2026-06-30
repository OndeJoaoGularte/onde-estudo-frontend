import { createRootRoute, Outlet } from '@tanstack/react-router';
import { Header } from '../components/layout/header/Header';
import { Footer } from '../components/layout/footer/Footer';

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen bg-base-100 flex flex-col">
      <Header />
      <div className="flex-1">
        {/* O <Outlet /> é onde o conteúdo das rotas será renderizado */}
        <Outlet />
      </div>
      <Footer />
    </div>
  ),
});
