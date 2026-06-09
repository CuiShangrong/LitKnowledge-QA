import { prisma } from "@/lib/db";

export type PaperFormState = {
  errors?: Record<string, string>;
};

export function splitList(value: string | null | undefined) {
  if (!value) {
    return [];
  }

  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

export function parseOptionalYear(value: FormDataEntryValue | null) {
  if (typeof value !== "string" || value.trim() === "") {
    return null;
  }

  const year = Number.parseInt(value, 10);
  if (Number.isNaN(year)) {
    return null;
  }

  return year;
}

export function readOptionalString(formData: FormData, key: string) {
  const value = formData.get(key);
  if (typeof value !== "string") {
    return null;
  }

  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
}

export async function getPapers() {
  return prisma.paper.findMany({
    orderBy: [{ year: "desc" }, { createdAt: "desc" }]
  });
}

export async function getPaperById(id: string) {
  return prisma.paper.findUnique({
    where: { id }
  });
}

export async function createPaper(
  formData: FormData,
  errorMessages: { titleRequired: string } = { titleRequired: "Title is required." }
) {
  const title = readOptionalString(formData, "title");

  if (!title) {
    return {
      paper: null,
      errors: {
        title: errorMessages.titleRequired
      }
    };
  }

  const paper = await prisma.paper.create({
    data: {
      title,
      authors: readOptionalString(formData, "authors"),
      year: parseOptionalYear(formData.get("year")),
      venue: readOptionalString(formData, "venue"),
      url: readOptionalString(formData, "url"),
      doi: readOptionalString(formData, "doi"),
      field: readOptionalString(formData, "field"),
      paperType: readOptionalString(formData, "paperType"),
      topics: readOptionalString(formData, "topics"),
      tags: readOptionalString(formData, "tags"),
      abstract: readOptionalString(formData, "abstract"),
      researchQuestion: readOptionalString(formData, "researchQuestion"),
      coreArgument: readOptionalString(formData, "coreArgument"),
      methodSummary: readOptionalString(formData, "methodSummary"),
      evidenceSource: readOptionalString(formData, "evidenceSource"),
      sourceSummary: readOptionalString(formData, "sourceSummary"),
      contribution: readOptionalString(formData, "contribution"),
      limitations: readOptionalString(formData, "limitations"),
      datasets: readOptionalString(formData, "datasets"),
      codeUrl: readOptionalString(formData, "codeUrl"),
      notes: readOptionalString(formData, "notes")
    }
  });

  return { paper, errors: undefined };
}
