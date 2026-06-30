import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/materias/$subjectId/$gradeId/$unitId/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/materias/$subjectId/$gradeId/$unitId/"!</div>
}
