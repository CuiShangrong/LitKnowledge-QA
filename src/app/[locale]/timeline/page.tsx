import { getTranslations } from "next-intl/server";
import { EmptyState } from "@/components/EmptyState";
import { Link } from "@/i18n/navigation";
import { getPapers, splitList } from "@/lib/papers";

export default async function TimelinePage() {
  const t = await getTranslations("TimelinePage");
  const papers = await getPapers();
  const unknownYear = t("unknownYear");
  const grouped = papers.reduce<Record<string, typeof papers>>((acc, paper) => {
    const year = paper.year?.toString() || unknownYear;
    acc[year] = acc[year] || [];
    acc[year].push(paper);
    return acc;
  }, {});

  const years = Object.keys(grouped).sort((a, b) => {
    if (a === unknownYear) return 1;
    if (b === unknownYear) return -1;
    return Number(b) - Number(a);
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-950">{t("title")}</h1>
        <p className="mt-2 text-slate-600">{t("description")}</p>
      </div>

      {papers.length === 0 ? (
        <EmptyState
          title={t("emptyTitle")}
          description={t("emptyDescription")}
          actionHref="/papers/new"
          actionLabel={t("addPaper")}
        />
      ) : (
        <div className="space-y-8">
          {years.map((year) => (
            <section key={year} className="grid gap-4 md:grid-cols-[120px_1fr]">
              <h2 className="text-2xl font-bold text-slate-950">{year}</h2>
              <div className="space-y-3 border-l border-slate-200 pl-4">
                {grouped[year].map((paper) => (
                  <article
                    key={paper.id}
                    className="rounded-lg border border-slate-200 bg-white p-4"
                  >
                    <Link
                      href={`/papers/${paper.id}`}
                      className="font-semibold text-slate-950 hover:text-slate-700"
                    >
                      {paper.title}
                    </Link>
                    <p className="mt-2 text-sm text-slate-600">
                      {paper.venue || t("unknownVenue")} / {paper.field || t("unknownField")}
                      {paper.paperType ? ` / ${paper.paperType}` : ""}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {splitList(paper.tags).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
