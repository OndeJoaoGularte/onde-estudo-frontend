import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/materias/$subjectId/$gradeId/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/materias/$subjectId/$gradeId/"!</div>
}
