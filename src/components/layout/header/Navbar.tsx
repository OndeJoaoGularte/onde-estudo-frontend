import { useQuery } from '@tanstack/react-query';
import { api } from '../../../lib/api';
import type { Subject } from '../../../types/entities';
import { Link } from '@tanstack/react-router';

export function Navbar() {
  const {
    data: subjects,
    isLoading,
    isError,
  } = useQuery<Subject[]>({
    queryKey: ['subjects'],
    queryFn: async () => {
      const response = await api.get('/subjects');
      return response.data;
    },
  });

  return (
    <nav className="bg-base-200/60 backdrop-blur-md">
      <div className="flex overflow-x-auto whitespace-nowrap px-8 py-3 gap-8 hide-scrollbar items-center justify-center-safe min-h-12">
        {isLoading && <span className="loading loading-spinner loading-sm text-primary"></span>}

        {isError && <span className="text-sm text-error">Erro ao carregar matérias.</span>}

        {subjects?.map((subject: Subject) => (
          <Link
            key={subject.id}
            to="/materias/$subjectId"
            params={{ subjectId: subject.id }}
            className="
              relative font-semibold text-base-content/70 transition-colors duration-300 hover:text-primary
              after:content-[''] after:absolute after:bottom-0 after:left-0 
              after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300
              hover:after:w-full
            "
            activeProps={{ className: 'text-primary after:w-full' }}
          >
            {subject.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}