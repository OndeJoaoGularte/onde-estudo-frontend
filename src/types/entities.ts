// Types
export type Stage =
  | "Ensino Médio"
  | "Ensino Fundamental 1"
  | "Ensino Fundamental 2";
export type ResourceType = "LINK" | "BOOK" | "ARTICLE";
export type BlockType = "TEXT" | "VIDEO" | "QUIZ" | "RESOURCE";
export type ProgressStatus = "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED";

// Entidades Principais
// Matérias
export interface Subject {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  grades?: Grade[];
  createdAt: string;
  updatedAt: string;
}

// Séries
export interface Grade {
  id: string;
  subjectId: string;
  name: string;
  level: number;
  stage: Stage;
  orderIndex: number;
  subject?: Subject;
  units?: Unit[];
  createdAt: string;
  updatedAt: string;
}

// Unidades
export interface Unit {
  id: string;
  gradeId: string;
  title: string;
  description: string | null;
  orderIndex: number;
  grade?: Grade;
  lessons?: Lesson[];
  createdAt: string;
  updatedAt: string;
}

// Aulas
export interface Lesson {
  id: string;
  unitId: string;
  title: string;
  description: string | null;
  orderIndex: number;
  averageRating: number;
  unit?: Unit;
  contentBlocks: LessonContentBlock[];
  feedbacks?: LessonFeedback[];
  createdAt: string;
  updatedAt: string;
}

export interface LessonFeedback {
  id: string;
  lessonId: string;
  userId: string;
  rating: number;
  comment: string;
  createdAt: string;
}

// Usuário, Progresso e Blocos de Conteúdo
// Usuários
export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl: string | null;
  mainSubjectId?: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface UserEnrollmentSubject {
  id: string;
  userId: string;
  subjectId: string;
  addedAt: string;
}

// Progresso do Usuário
export interface LessonProgress {
  id: string;
  userId: string;
  lessonId: string;
  lastBlockIndex: number;
  status: ProgressStatus;
  completedAt?: string | null;
}

// Blocos de Conteúdo das Aulas
export interface BaseContentBlock {
  id: string;
  lessonId: string;
  orderIndex: number;
  type: BlockType;
  title: string;
}

export interface TextBlock extends BaseContentBlock {
  type: "TEXT";
  mainText: string;
  exerciseText?: string | null;
  historicalContext?: string | null;
}

export interface VideoBlock extends BaseContentBlock {
  type: "VIDEO";
  videoUrl: string;
  durationInMinutes: number;
}

export interface QuizQuestion {
  id: string;
  questionText: string;
  options: string[];
  correctOptionIndex: number;
  solutionGuide: string | null;
}

export interface QuizBlock extends BaseContentBlock {
  type: "QUIZ";
  questions: QuizQuestion[];
}

export interface ResourceBlock extends BaseContentBlock {
  type: "RESOURCE";
  resourceType: ResourceType;
  url?: string | null;
}

export type LessonContentBlock =
  | TextBlock
  | VideoBlock
  | QuizBlock
  | ResourceBlock;
