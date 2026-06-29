import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/query-client';
import { routeTree } from './routeTree.gen';
import './main.css';

// Instancia o router passando a árvore de rotas gerada automaticamente pelo Tanstack Router (e Vite)
const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Envolve o programa com o contexto do React Query */}
    <QueryClientProvider client={queryClient}>
        {/* Envolve o programa com o contexto do Tanstack Router */}
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);