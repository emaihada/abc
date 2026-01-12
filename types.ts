export interface PersonalityStat {
  subject: string;
  A: number;
  fullMark: number;
}

export interface Character {
  id: string;
  name: string;
  role: string; // Job/Title
  age: string; // Keep as string for complex ages like "321 (23)"
  gender: string;
  mbti: string;
  enneagram: string;
  height: string;
  appearance: string; // Text description
  traits: string[];
  description: string; // Summary of features
  stats: PersonalityStat[];
  colorTheme: string; // Tailwind color class roughly
}

export interface WorldLore {
  title: string;
  content: string[];
}