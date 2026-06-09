import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { getPaperById, splitList } from "@/lib/papers";

type PaperDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

function DetailSection({
  title,
  value
}: {
  title: string;
  value: string | number | null | undefined;
}) {
  if (value === null || value === undefined || value === "") {
    return null;
  }

  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">{title}</h2>
      <p className="mt-3 whitespace-pre-wrap text-sm leading-7 text-slate-700">{value}</p>
    </section>
  );
}

export default async function PaperDetailPage({ params }: PaperDetailPageProps) {
  const t = await getTranslations("PaperDetailPage");
  const { id } = await params;
  const paper = await getPaperById(id);

  if (!paper) {
    notFound();
  }

  const topics = splitList(paper.topics);
  const tags = splitList(paper.tags);

  return (
    <div className="space-y-6">
      <Link href="/papers" className="text-sm font-medium text-slate-600 hover:text-slate-950">
        {t("back")}
      </Link>

      <article className="rounded-lg border border-slate-200 bg-white p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-950">{paper.title}</h1>
            <p className="mt-3 text-slate-600">{paper.authors || t("unknownAuthors")}</p>
          </div>
          <div className="text-sm text-slate-500 sm:text-right">
            <p>{paper.year || t("unknownYear")}</p>
            <p>{paper.venue || t("unknownVenue")}</p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {paper.field ? (
            <span className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700">
              {paper.field}
            </span>
          ) : null}
          {topics.map((topic) => (
            <span
              key={topic}
              className="rounded-md bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700"
            >
              {topic}
            </span>
          ))}
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5 grid gap-2 text-sm text-slate-600 md:grid-cols-2">
          {paper.url ? (
            <p>
              {t("paperUrl")}:{" "}
              <a href={paper.url} className="font-medium text-slate-950 hover:underline">
                {paper.url}
              </a>
            </p>
          ) : null}
          {paper.doi ? <p>DOI: {paper.doi}</p> : null}
          <p>
            {t("paperType")}: {paper.paperType || t("notSpecified")}
          </p>
          {paper.codeUrl ? (
            <p>
              {t("codeUrl")}:{" "}
              <a href={paper.codeUrl} className="font-medium text-slate-950 hover:underline">
                {paper.codeUrl}
              </a>
            </p>
          ) : null}
          {paper.datasets ? (
            <p>
              {t("datasets")}: {paper.datasets}
            </p>
          ) : null}
        </div>
      </article>

      <div className="grid gap-4">
        <DetailSection title={t("abstract")} value={paper.abstract} />
        <DetailSection title={t("researchQuestion")} value={paper.researchQuestion || t("notSpecified")} />
        <DetailSection title={t("coreArgument")} value={paper.coreArgument || t("notSpecified")} />
        <DetailSection title={t("methodSummary")} value={paper.methodSummary} />
        <DetailSection title={t("evidenceSource")} value={paper.evidenceSource || t("notSpecified")} />
        <DetailSection title={t("sourceSummary")} value={paper.sourceSummary || t("notSpecified")} />
        <DetailSection title={t("contribution")} value={paper.contribution} />
        <DetailSection title={t("limitations")} value={paper.limitations} />
        <DetailSection title={t("notes")} value={paper.notes} />
      </div>
    </div>
  );
}
