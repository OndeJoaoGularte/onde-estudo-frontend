import { createFileRoute, Link } from '@tanstack/react-router';
import { useQuery } from '@tanstack/react-query';
import { SubjectSidebar } from '../../components/layout/sidebars/SubjectSidebar';
import { GradeCard } from '../../components/ui/cards/GradeCard';
import type { Subject } from '../../types/entities';
import { api } from '../../lib/api';

export const Route = createFileRoute('/materias/$subjectId/')({
    component: function SubjectPage() {
        const { subjectId } = Route.useParams();

        const {
            data: subject,
            isLoading,
            isError,
        } = useQuery<Subject>({
            queryKey: ['subject', subjectId],
            queryFn: async () => {
                const response = await api.get(`/subjects/${subjectId}`);
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

        if (isError || !subject) {
            return (
                <div className="text-center p-10">
                    <p className="text-error font-semibold text-lg">Matéria não encontrada.</p>
                    <Link to="/" className="btn btn-outline mt-4">Voltar para Início</Link>
                </div>
            );
        }

        return (
            <div className="container mx-auto p-4 md:p-8 max-w-7xl animate-in fade-in duration-500">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Sidebar */}
                    <div className="hidden lg:block lg:col-span-3">
                        <SubjectSidebar subject={subject} />
                    </div>

                    {/* Conteúdo Principal */}
                    <div className="lg:col-span-9">

                        {/* Breadcrumbs */}
                        <div className="breadcrumbs text-xs text-base-content/60">
                            <ul>
                                <li>
                                    <Link to="/" className="hover:text-primary transition-colors">
                                        Home
                                    </Link>
                                </li>
                                <li className="font-medium text-base-content">{subject.name}</li>
                            </ul>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">{subject.name}</h1>
                        <p className="text-lg text-base-content/70 mb-10 leading-relaxed">{subject.longDescription}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                            {subject.grades?.map((grade) => (
                                <GradeCard key={grade.id} subject={subject} grade={grade} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
