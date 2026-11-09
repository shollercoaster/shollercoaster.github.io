export const site = {
  name: 'Saumya Chaturvedi',
  pronunciation: '/ˈsaʊ.mjə/',
  // Path to a short audio clip of you pronouncing your name, relative to /public.
  // Record a 1-2 second clip and place it at public/audio/name.mp3
  pronunciationAudio: '/audio/name-pronounciation.mp3',
  tagline: 'AI Safety Researcher, learning and unlearning through life.',
  bio: `I am an AI Safety Researcher, learning and working on impactful problems to mitigate catastrophic risks from AI. I am a usually nihilistic person, forced to adopt an optimistic view of life to fix the problems of the world where I did not sow the seeds, cannot reap the benefits but can make a difference still.
I've been a Research Scholar at Max Planck Institute for Software Systems, working on AI problems embedded in systems. I have first-authored papers on improving code search (published at ICLR 2025) and on multi-agentc Text-to-SQL (published at NeurIPS 2025). I have presented both papers in person as posters and deeply enjoyed the experiences. Currently, I am a Software Engineer at American Express.`,
  rightNow: [
    'Writing a blog post daily on AI safety papers and concepts I read and think about.',
    'Reading and writing about Moral Patienthood and Preference Vectors in LLMs to build a personal theory of change based on LLM Personas-centered AI Safety methods!',
    'About to finish ARENA curriculum through the TARA program and working on finding an idea for the final Capstone Project!',
  ],
  social: {
    email: 'mailto:sholasubscriptions@gmail.com',
    linkedin: 'https://www.linkedin.com/in/schaturv',
    github: 'https://github.com/shollercoaster',
    scholar: 'https://scholar.google.com/citations?user=iJjzkFcAAAAJ&hl=en',
    substack: 'https://saumyachaturvedi.substack.com/',
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