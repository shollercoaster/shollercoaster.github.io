export const site = {
  name: 'Saumya',
  pronunciation: '/ˈsaʊ.mjə/',
  // Path to a short audio clip of you pronouncing your name, relative to /public.
  // Record a 1-2 second clip and place it at public/audio/name.mp3
  pronunciationAudio: '/audio/name-pronounciation.mp3',
  tagline: 'AI Safety Researcher, learning and iterating through life.',
  bio: `I am interested in AI Safety Research, to work on impactful AI Safety research that reduces the harm potential of AI systems while amplifying their benefits on all aspects of society.
I've been a Research Scholar at Max Planck Institute for Software Systems. My work on code-aware language models has been published at
ICLR 2025 and NeurIPS 2025, and I presented both papers in person as
posters. Currently a Software Engineer at American Express.`,
  rightNow: [
    'Currently participating in Bluedot Impact Technical AI Safety Project.',
    'Organizing and leading a study group focused on ARENA curriculum',
    'Reading about Persona Vectors, AI Safety for Multi-agent systems and building Autograd from scratch',
  ],
  social: {
    email: 'mailto:sholasubscriptions@gmail.com',
    linkedin: 'https://www.linkedin.com/in/schaturv',
    github: 'https://github.com/shollercoaster',
    scholar: 'https://scholar.google.com/citations?user=iJjzkFcAAAAJ&hl=en',
  },
  resumePdf: '/resume.pdf',
};

export const blogCategories = [
  { id: 'ai-safety', label: 'AI safety', color: 'purple' },
  { id: 'research', label: 'Research', color: 'blue' },
  { id: 'productivity', label: 'Productivity', color: 'green' },
  { id: 'personal', label: 'Personal', color: 'red' },
] as const;

export const categoryColorMap: Record<string, { bg: string; text: string }> = {
  purple: { bg: 'var(--color-accent-soft)', text: 'var(--color-accent-text)' },
  blue:   { bg: 'var(--color-blue-soft)', text: 'var(--color-blue-text)' },
  green:  { bg: 'var(--color-green-soft)', text: 'var(--color-green-text)' },
  red:    { bg: 'var(--color-red-soft)', text: 'var(--color-red-text)' },
};

const categoryToColor: Record<string, string> = Object.fromEntries(
  blogCategories.map((c) => [c.id, c.color])
);

// Given a category id (e.g. "ai-safety"), returns an inline style string
// for the tag's background and text color.
export function categoryTagStyle(categoryId: string): string {
  const color = categoryToColor[categoryId] ?? 'purple';
  const { bg, text } = categoryColorMap[color];
  return `background: ${bg}; color: ${text};`;
}