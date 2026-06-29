import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // Define o tempo em que os dados em cache são considerados "novos". Dessa forma, o React Query não fará uma nova requisição em segundo plano durante esse tempo (5 minutos)
      retry: 1,
    },
  },
});