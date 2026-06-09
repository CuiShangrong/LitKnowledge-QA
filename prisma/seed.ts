import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const papers = [
  {
    title: "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks",
    authors: "Patrick Lewis et al.",
    year: 2020,
    venue: "NeurIPS",
    url: "https://arxiv.org/abs/2005.11401",
    doi: "",
    field: "Computer Science",
    paperType: "empirical",
    topics: "RAG, retrieval, generation, NLP",
    tags: "RAG, grounding, baseline",
    abstract: "Combines parametric generation with non-parametric retrieval for knowledge-intensive NLP tasks.",
    researchQuestion: "Can retrieved external documents improve generation on knowledge-intensive tasks?",
    coreArgument: "A generator conditioned on retrieved passages can answer more knowledge-intensive questions than a purely parametric model.",
    methodSummary: "Uses dense retrieval over a document index and conditions a sequence-to-sequence generator on retrieved passages.",
    evidenceSource: "NLP benchmark experiments",
    sourceSummary: "Evaluation on question answering and fact verification datasets.",
    contribution: "Established a common formulation for retrieval-augmented generation.",
    limitations: "Retrieval quality strongly affects generation quality.",
    datasets: "Natural Questions, TriviaQA, WebQuestions, FEVER",
    codeUrl: "",
    notes: "Useful computer science seed paper for future source-based QA examples."
  },
  {
    title: "Attention Is All You Need",
    authors: "Ashish Vaswani et al.",
    year: 2017,
    venue: "NeurIPS",
    url: "https://arxiv.org/abs/1706.03762",
    doi: "",
    field: "Computer Science",
    paperType: "empirical",
    topics: "Transformer, attention, sequence modeling",
    tags: "classic, architecture, NLP",
    abstract: "Introduces the Transformer architecture based entirely on attention mechanisms.",
    researchQuestion: "Can sequence transduction be handled without recurrence or convolution?",
    coreArgument: "Self-attention is sufficient for strong sequence modeling and enables efficient parallel training.",
    methodSummary: "Uses multi-head self-attention, positional encoding, and feed-forward layers.",
    evidenceSource: "Machine translation experiments",
    sourceSummary: "Results on WMT translation benchmarks compare Transformer variants with prior neural sequence models.",
    contribution: "Introduced an architecture that became foundational across NLP and other fields.",
    limitations: "The original setting focuses on translation and does not solve long-context efficiency.",
    datasets: "WMT 2014 English-German, WMT 2014 English-French",
    codeUrl: "",
    notes: "Architecture paper that can be compared with later foundation-model work."
  },
  {
    title: "The Strength of Weak Ties",
    authors: "Mark S. Granovetter",
    year: 1973,
    venue: "American Journal of Sociology",
    url: "https://www.journals.uchicago.edu/doi/10.1086/225469",
    doi: "10.1086/225469",
    field: "Sociology",
    paperType: "theoretical",
    topics: "social networks, weak ties, diffusion",
    tags: "social-science, theory, classic",
    abstract: "Argues that weak social ties play an important role in information diffusion and social cohesion.",
    researchQuestion: "How do weak interpersonal ties affect information flow and social organization?",
    coreArgument: "Weak ties often bridge otherwise separate social circles and therefore enable access to novel information.",
    methodSummary: "Develops a theoretical argument using network concepts and sociological reasoning.",
    evidenceSource: "Sociological theory and prior empirical observations",
    sourceSummary: "Draws on social network reasoning and examples of interpersonal information transfer.",
    contribution: "Provided a durable conceptual framework for studying social networks.",
    limitations: "The paper is primarily theoretical and predates modern large-scale network datasets.",
    datasets: "",
    codeUrl: "",
    notes: "Good example of a non-CS theoretical paper in the local literature folder."
  },
  {
    title: "Situated Knowledges: The Science Question in Feminism and the Privilege of Partial Perspective",
    authors: "Donna Haraway",
    year: 1988,
    venue: "Feminist Studies",
    url: "https://www.jstor.org/stable/3178066",
    doi: "",
    field: "Humanities",
    paperType: "humanities",
    topics: "feminist theory, epistemology, situated knowledge",
    tags: "humanities, theory, epistemology",
    abstract: "Develops the concept of situated knowledges as an alternative to claims of detached objectivity.",
    researchQuestion: "How should objectivity be understood when knowledge is produced from situated perspectives?",
    coreArgument: "All knowledge is situated, and stronger objectivity requires accountable partial perspectives rather than a view from nowhere.",
    methodSummary: "Uses theoretical critique and conceptual analysis.",
    evidenceSource: "Philosophical argument and feminist science studies",
    sourceSummary: "Builds from debates about objectivity, embodiment, and knowledge production.",
    contribution: "Influential framework for humanities and science studies research.",
    limitations: "Not an empirical study and requires careful contextual interpretation.",
    datasets: "",
    codeUrl: "",
    notes: "Demonstrates support for humanities papers with argument-centric metadata."
  },
  {
    title: "A Survey of Large Language Models",
    authors: "Wayne Xin Zhao et al.",
    year: 2023,
    venue: "arXiv",
    url: "https://arxiv.org/abs/2303.18223",
    doi: "",
    field: "Computer Science",
    paperType: "survey",
    topics: "large language models, survey, alignment, prompting",
    tags: "survey, LLM, review",
    abstract: "Surveys recent progress in large language models, including pretraining, adaptation, utilization, and evaluation.",
    researchQuestion: "What are the main technical directions and open problems in large language model research?",
    coreArgument: "LLM research can be organized around model scaling, training, adaptation, usage, evaluation, and safety.",
    methodSummary: "Reviews and categorizes a large body of existing LLM literature.",
    evidenceSource: "Published LLM literature",
    sourceSummary: "Synthesizes papers across model architecture, training, prompting, alignment, and applications.",
    contribution: "Provides a structured map of the LLM research landscape.",
    limitations: "Survey coverage can become outdated quickly in a fast-moving field.",
    datasets: "",
    codeUrl: "https://github.com/RUCAIBox/LLMSurvey",
    notes: "Useful for demonstrating review-type metadata."
  },
  {
    title: "ImageNet: A Large-Scale Hierarchical Image Database",
    authors: "Jia Deng, Wei Dong, Richard Socher, Li-Jia Li, Kai Li, Li Fei-Fei",
    year: 2009,
    venue: "CVPR",
    url: "https://ieeexplore.ieee.org/document/5206848",
    doi: "10.1109/CVPR.2009.5206848",
    field: "Computer Vision",
    paperType: "dataset",
    topics: "dataset, image classification, computer vision",
    tags: "dataset, benchmark, vision",
    abstract: "Introduces ImageNet, a large-scale image database organized according to WordNet hierarchy.",
    researchQuestion: "How can a large-scale image database support visual recognition research?",
    coreArgument: "A broad, hierarchical, human-annotated image database can accelerate progress in computer vision.",
    methodSummary: "Collects, organizes, and annotates images according to semantic categories.",
    evidenceSource: "Dataset construction and benchmark usage",
    sourceSummary: "Describes the scale, hierarchy, annotation process, and intended evaluation use cases.",
    contribution: "Became a central dataset and benchmark for image recognition.",
    limitations: "Dataset categories and web-collected images can reflect biases and limited coverage.",
    datasets: "ImageNet",
    codeUrl: "",
    notes: "Dataset-type seed item for multi-type literature organization."
  },
  {
    title: "Measuring Massive Multitask Language Understanding",
    authors: "Dan Hendrycks et al.",
    year: 2021,
    venue: "ICLR",
    url: "https://arxiv.org/abs/2009.03300",
    doi: "",
    field: "Artificial Intelligence",
    paperType: "benchmark",
    topics: "benchmark, evaluation, language models",
    tags: "benchmark, evaluation, LLM",
    abstract: "Introduces MMLU, a benchmark for measuring multitask language understanding across many subjects.",
    researchQuestion: "How can broad world knowledge and problem-solving ability be evaluated across many domains?",
    coreArgument: "A broad multi-subject benchmark exposes limitations in language model understanding beyond narrow task performance.",
    methodSummary: "Constructs multiple-choice tasks spanning STEM, humanities, social sciences, and other domains.",
    evidenceSource: "Benchmark construction and model evaluation",
    sourceSummary: "Reports model performance across many subject categories and difficulty levels.",
    contribution: "Provided a widely used benchmark for evaluating general language understanding.",
    limitations: "Multiple-choice format only captures part of real reasoning and expertise.",
    datasets: "MMLU",
    codeUrl: "https://github.com/hendrycks/test",
    notes: "Benchmark example with multidisciplinary subject coverage."
  }
];

async function main() {
  for (const paper of papers) {
    await prisma.paper.upsert({
      where: { title: paper.title },
      update: paper,
      create: paper
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
