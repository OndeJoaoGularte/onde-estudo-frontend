import React from 'react';
import { Link } from '@tanstack/react-router';
import { Award } from 'lucide-react';
import type { Subject, Grade } from '../../../types/entities';
import { ProgressIcon } from '../user/ProgressIcon';

interface GradeCardProps {
    subject: Subject;
    grade: Grade;
}

export function GradeCard({ subject, grade }: GradeCardProps) {
    const [isFlipped, setIsFlipped] = React.useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    const units = [...(grade.units || [])].sort((a, b) => a.orderIndex - b.orderIndex);

    return (
        <div className="group relative w-full h-90 perspective-[1000px] hover:-translate-y-1 transition-all duration-300 hover:shadow-md rounded-2xl">
            <div
                className={`relative w-full h-full transition-transform duration-700 transform-3d ${isFlipped ? 'rotate-y-180' : ''
                    }`}
            >
                {/* Frente do Card */}
                <div className="absolute w-full h-full backface-hidden">
                    <div className="card bg-base-100 border border-base-200 shadow-sm h-full flex flex-col justify-between p-6 text-center rounded-2xl">
                        <div className="flex-1 flex flex-col items-center justify-center">
                            <Link
                                to="/materias/$subjectId/$gradeId"
                                params={{ subjectId: subject.id, gradeId: grade.id }}
                                className="text-xl font-bold text-primary hover:text-secondary transition-colors duration-300 hover:underline line-clamp-2"
                            >
                                {grade.name}
                            </Link>
                            <div className="my-6">
                                <Award className="w-20 h-20 text-warning drop-shadow-sm" strokeWidth={1.5} />
                            </div>
                        </div>

                        {/* Botões */}
                        <div className="flex flex-col gap-3 mt-auto">
                            <button className="btn btn-primary w-full hover:bg-secondary hover:border-secondary transition-colors duration-300" onClick={handleFlip} disabled={units.length === 0}>
                                {units.length === 0 ? 'Em Breve' : 'Visualizar Conteúdo'}
                            </button>
                            <button className="btn btn-outline btn-primary w-full transition-colors duration-300 hover:bg-secondary hover:text-secondary-content hover:border-secondary" disabled={units.length === 0}>
                                Realizar Teste
                            </button>
                        </div>
                    </div>
                </div>

                {/* Verso do Card */}
                <div className="absolute w-full h-full  backface-hidden rotate-y-180">
                    <div className="card bg-base-100 border border-base-200 shadow-sm h-full flex flex-col p-4 text-center rounded-2xl">
                        <Link
                            to="/materias/$subjectId/$gradeId"
                            params={{ subjectId: subject.id, gradeId: grade.id }}
                            className="text-lg font-bold text-primary hover:text-secondary transition-colors duration-300 hover:underline truncate px-2"
                        >
                            {grade.name}
                        </Link>

                        {/* Lista de Unidades */}
                        <hr className="border-base-200 my-3 mx-2" />

                        {units.length === 0 ? (
                            <div className="flex-1 flex items-center justify-center">
                                <p className="text-sm text-base-content/60">Conteúdo em desenvolvimento.</p>
                            </div>
                        ) : (
                            <ul className="flex-1 overflow-y-auto pr-2 flex flex-col gap-1 text-left [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-base-100 [&::-webkit-scrollbar-thumb]:bg-primary/40 hover:[&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full transition-colors">
                                {units.map((unit, index) => {
                                    const progressStates = [100, 75, 50, 25, 0];
                                    const unitProgress = progressStates[index % progressStates.length];
                                    const lessonsCount = unit.lessons?.length || 0;

                                    return (
                                        <li key={unit.id}>
                                            <Link
                                                to="/materias/$subjectId/$gradeId/$unitId"
                                                params={{
                                                    subjectId: subject.id,
                                                    gradeId: grade.id,
                                                    unitId: unit.id,
                                                }}
                                                className="flex items-center gap-3 p-2 rounded-lg hover:bg-base-200 transition-colors group/item"
                                            >
                                                <div className="w-8 shrink-0 flex justify-center">
                                                    <ProgressIcon progress={unitProgress} />
                                                </div>

                                                <div className="flex flex-col min-w-0">
                                                    <span className="font-medium text-sm text-base-content truncate group-hover/item:text-secondary transition-colors duration-300">
                                                        {index + 1}. {unit.title}
                                                    </span>
                                                    <span className="text-xs text-base-content/60">
                                                        {lessonsCount} {lessonsCount === 1 ? 'aula' : 'aulas'}
                                                    </span>
                                                </div>
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        )}

                        <button className="btn btn-ghost w-full mt-3 hover:bg-base-200 transition-colors duration-300" onClick={handleFlip}>
                            Ocultar Conteúdo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
