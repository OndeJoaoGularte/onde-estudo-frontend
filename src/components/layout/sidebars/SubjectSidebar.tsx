import { Link } from '@tanstack/react-router';
import type { Subject } from '../../../types/entities';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface SubjectSidebarProps {
  subject: Subject;
}

export function SubjectSidebar({ subject }: SubjectSidebarProps) {
  const grades = [...(subject.grades || [])].sort((a, b) => a.orderIndex - b.orderIndex);
  
  const [expandedGrades, setExpandedGrades] = useState<Record<string, boolean>>({});

  const toggleGrade = (gradeId: string) => {
    setExpandedGrades((prev) => ({
      ...prev,
      [gradeId]: !prev[gradeId],
    }));
  };

  return (
    <aside className="sticky top-40 h-[80vh] overflow-y-auto border-r border-base-200 pr-4 hide-scrollbar">
      <div className="p-2 mb-2">
        <h2 className="text-2xl font-bold text-base-content">{subject.name}</h2>
      </div>

      <hr className="border-base-300 mb-4 mx-1" />
      
      {grades.length === 0 ? (
        <p className="text-base text-base-content/60 italic p-2">
          Nenhuma série disponível para esta matéria.
        </p>
      ) : (
        <div className="flex flex-col gap-4 w-full px-2">
          {grades.map((grade) => {
            const isExpanded = !!expandedGrades[grade.id];
            
            const units = [...(grade.units || [])].sort((a, b) => a.orderIndex - b.orderIndex);

            return (
              <div key={grade.id} className="flex flex-col">
                
                <div className="flex items-center justify-between group">
                  <Link
                    to="/materias/$subjectId/$gradeId"
                    params={{ subjectId: subject.id, gradeId: grade.id }}
                    className="flex-1 py-1 text-base text-base-content/80 transition-colors hover:text-primary group/link"
                    activeProps={{ className: 'text-primary font-bold' }}
                    onClick={() => setExpandedGrades((prev) => ({ ...prev, [grade.id]: true }))}
                  >
                    <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-2">
                      {grade.name}
                    </span>
                  </Link>
                  
                  <button
                    type="button"
                    onClick={() => toggleGrade(grade.id)}
                    className={`p-1 transition-colors duration-200 
                      ${isExpanded ? 'text-primary' : 'text-base-content/40 hover:text-primary'}`}
                    title={isExpanded ? "Recolher unidades" : "Ver unidades"}
                  >
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                  </button>
                </div>

                <div className={`grid transition-all duration-300 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    
                    <ul className="pl-4 flex flex-col gap-2 border-l-2 border-base-200 ml-2 mb-2">
                      {units.length === 0 ? (
                        <li className="text-sm text-base-content/50 italic py-1">
                          Nenhuma unidade cadastrada.
                        </li>
                      ) : (
                        units.map((unit, index) => (
                          <li key={unit.id}>
                            <Link
                              to="/materias/$subjectId/$gradeId/$unitId"
                              params={{ subjectId: subject.id, gradeId: grade.id, unitId: unit.id }}
                              className="block py-1 text-base text-base-content/60 transition-all duration-300 hover:text-primary hover:translate-x-2 line-clamp-2 leading-tight"
                              activeProps={{ className: 'text-primary font-medium' }}
                            >
                              {index + 1}. {unit.title}
                            </Link>
                          </li>
                        ))
                      )}
                    </ul>
                    
                  </div>
                </div>
                
              </div>
            );
          })}
        </div>
      )}
    </aside>
  );
}