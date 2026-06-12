// Add a new object to this array for every research project, published or in progress.
// The research page and homepage "Selected research" section both read from this file,
// so adding a project here is enough to make it show up everywhere.

export type ResearchStatus = 'published' | 'in-progress';

export interface ResearchProject {
  slug: string;
  title: string;
  status: ResearchStatus;
  venue?: string; // e.g. "ICLR 2025 · DL4C workshop"
  authors: string; // e.g. "Saumya Chaturvedi, Aman Chadha, Laurent Bindschaedler"
  summary: string; // 1-3 sentences
  links: {
    arxiv?: string;
    paper?: string; // generic paper link if not on arXiv
    poster?: string;
    code?: string;
    blog?: string; // link to a blog post explaining an in-progress project
  };
  // Citation count - update this manually periodically, e.g. by checking
  // Google Scholar or Semantic Scholar. Leave undefined if not yet published.
  citations?: number;
  date: string; // ISO date, used for sorting, e.g. "2025-04-01"
  featured?: boolean; // show on homepage "Selected research"
}

export const researchProjects: ResearchProject[] = [
  {
    slug: 'sql-of-thought',
    title: 'SQL-of-Thought: Multi-agentic Text-to-SQL with Guided Error Correction',
    status: 'published',
    venue: 'NeurIPS 2025 · DL4C workshop',
    authors: 'Saumya Chaturvedi, Aman Chadha, Laurent Bindschaedler',
    summary:
      'A multi-agent framework that decomposes the Text2SQL task into schema linking, subproblem identification, query plan generation, SQL generation, and a guided correction loop. Unlike prior systems that rely only on execution-based static correction, we introduce taxonomy-guided dynamic error modification informed by in-context learning.',
    links: {
      arxiv: 'https://arxiv.org/abs/2509.00581',
      poster: '/papers/sql-of-thought-poster.png',
      code: 'https://github.com/shollercoaster/SQL-of-Thought',
    },
    citations: 9,
    date: '2025-08-30',
    featured: true,
  },
  {
    slug: 'loracode',
    title: 'LoRACode: LoRA Adapters for Code Embeddings',
    status: 'published',
    venue: 'ICLR 2025 · DL4C workshop',
    authors: 'Saumya Chaturvedi, Aman Chadha, Laurent Bindschaedler',
    summary:
      'Introducing a novel method for finetuning code embedding models on code retrieval based on text and code queries, using low rank adapters, achieving substantial improvements on Mean Reciprocal Rank only on a small subset of trainable parameters.',
    links: {
      arxiv: 'https://arxiv.org/abs/2503.05315',
      poster: '/papers/loracode-poster.png',
      code: 'https://github.com/loracode-submission/loracode',
    },
    citations: 1,
    date: '2025-04-01',
    featured: true,
  },
  // {
  //   slug: 'ai-safety-forecasting-notes',
  //   title: 'AI safety forecasting (in progress)',
  //   status: 'in-progress',
  //   role: 'Independent project',
  //   summary:
  //     'Working notes and early-stage forecasting models related to precursor conditions for AI-enabled coups, written while preparing a MATS application.',
  //   links: {
  //     blog: '/blog/why-im-applying-to-mats',
  //     code: 'https://github.com/REPLACE_ME/forecasting-notes',
  //   },
  //   date: '2026-06-01',
  //   featured: false,
  // },
];

export const featuredResearch = researchProjects.filter((p) => p.featured);
