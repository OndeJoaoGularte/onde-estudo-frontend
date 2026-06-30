import { createLazyFileRoute } from '@tanstack/react-router';
import { useQuery } from '@tanstack/react-query';
import { api } from '../lib/api';
import { SubjectCard } from '../components/ui/cards/SubjectCard';
import ondeEstudoLogo from '../assets/ondeestudo.png';
import type { Subject } from '../types/entities';

export const Route = createLazyFileRoute('/')({
  component: function HomePage() {
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

    if (isLoading) {
      return (
        <div className="flex justify-center items-center min-h-[60vh]">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      );
    }

    if (isError) {
      return (
        <div className="text-center p-10">
          <p className="text-error font-semibold text-lg">Ocorreu um erro ao buscar as matérias.</p>
        </div>
      );
    }

    const sortedSubjects = subjects 
      ? [...subjects].sort((a, b) => a.name.localeCompare(b.name)) 
      : [];

    return (
      <main className="container mx-auto px-4 py-8 max-w-7xl animate-in fade-in duration-700">
        <div className="flex flex-col items-center mb-12 text-center">
          <h1 className="text-xl md:text-2xl font-medium text-base-content/70">
            Você já se perguntou...
          </h1>
          <img 
            src={ondeEstudoLogo} 
            alt="Onde Estudo Logo" 
            className="w-4/5 sm:w-3/5 md:w-2/5 max-w-125 object-contain drop-shadow-sm  m-3"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedSubjects.map((subject) => (
            <SubjectCard key={subject.id} subject={subject} />
          ))}
        </div>
      </main>
    );
  }
});