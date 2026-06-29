import { createRootRoute, Outlet } from '@tanstack/react-router';

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen bg-base-100 flex flex-col">
      <div className="flex-1">
        {/* O <Outlet /> é onde o conteúdo das rotas será renderizado */}
        <Outlet />
      </div>
    </div>
  ),
});
