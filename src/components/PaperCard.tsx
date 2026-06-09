import type { Paper } from "@prisma/client";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { splitList } from "@/lib/papers";

type PaperCardProps = {
  paper: Paper;
};

export function PaperCard({ paper }: PaperCardProps) {
  const t = useTranslations("PaperCard");
  const tags = splitList(paper.tags);

  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <Link
            href={`/papers/${paper.id}`}
            className="text-lg font-semibold text-slate-950 hover:text-slate-700"
          >
            {paper.title}
          </Link>
          <p className="mt-2 text-sm text-slate-600">{paper.authors || t("unknownAuthors")}</p>
        </div>
        <div className="text-left text-sm text-slate-500 sm:text-right">
          <p>{paper.year || t("unknownYear")}</p>
          <p>{paper.venue || t("unknownVenue")}</p>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        {paper.field ? (
          <span className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700">
            {paper.field}
          </span>
        ) : null}
        {paper.paperType ? (
          <span className="rounded-md bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700">
            {paper.paperType}
          </span>
        ) : null}
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
