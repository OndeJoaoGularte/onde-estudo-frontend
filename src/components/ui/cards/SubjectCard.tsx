import * as React from 'react';
import { Link } from '@tanstack/react-router';
import { ChevronDown } from 'lucide-react';
import type { Subject } from '../../../types/entities';

interface SubjectCardProps {
    subject: Subject;
}

function formatGradeName(name: string) {
    return name.replace(/ Ano /i, ' ');
}

export function SubjectCard({ subject }: SubjectCardProps) {
    const [expanded, setExpanded] = React.useState(false);

    const grades = [...(subject.grades || [])].sort((a, b) => a.orderIndex - b.orderIndex);

    const totalUnits = grades.reduce((acc, grade) => acc + (grade.units?.length || 0), 0);

    return (
        <div className="card bg-base-100 border border-base-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full flex flex-col rounded-2xl">
            <div className="card-body p-5 sm:p-6 flex flex-col h-full">
                {/* Cabeçalho do Card */}
                <div className="flex flex-col gap-1 items-start mb-2">
                    <Link
                        to="/materias/$subjectId"
                        params={{ subjectId: subject.id }}
                        className="card-title text-primary hover:text-secondary transition-colors duration-300 hover:underline"
                    >
                        {subject.name}
                    </Link>

                    <span className="text-sm text-base-content/60 whitespace-nowrap">
                        {grades.length} {grades.length === 1 ? 'Série' : 'Séries'} | {totalUnits}{' '}
                        {totalUnits === 1 ? 'Unidade' : 'Unidades'}
                    </span>
                </div>

                <p className="text-base-content/80 text-sm md:text-base grow line-clamp-3">{subject.shortDescription}</p>

                {/* Botão Expandir */}
                <div className="card-actions justify-end mt-2">
                    <button
                        className="btn btn-ghost btn-sm text-base-content/60 hover:text-secondary hover:bg-base-200 transition-colors duration-300"
                        onClick={() => setExpanded(!expanded)}
                    >
                        Ver séries
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} />
                    </button>
                </div>

                {/* Lista de Séries */}
                <div
                    className={`grid transition-all duration-300 ease-in-out ${expanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                    <div className="overflow-hidden">
                        <div className="border-t border-base-200">
                            <h3 className="font-medium text-base-content/80 my-3">Séries Disponíveis:</h3>
                            {grades.length === 0 ? (
                                <p className="text-sm text-base-content/50 italic mb-2">
                                    Nenhuma série cadastrada no momento.
                                </p>
                            ) : (
                                <div className="flex flex-wrap gap-2">
                                    {grades.map((grade) => (
                                        <Link
                                            key={grade.id}
                                            to="/materias/$subjectId/$gradeId"
                                            params={{ subjectId: subject.id, gradeId: grade.id }}
                                            className="btn btn-outline btn-sm rounded-full font-normal border-base-300 text-base-content/70 hover:bg-secondary hover:text-secondary-content hover:border-secondary transition-colors duration-300"
                                        >
                                            {formatGradeName(grade.name)}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
