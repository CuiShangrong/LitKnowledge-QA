import { getTranslations } from "next-intl/server";
import { EmptyState } from "@/components/EmptyState";
import { PaperCard } from "@/components/PaperCard";
import { Link } from "@/i18n/navigation";
import { getPapers } from "@/lib/papers";

export default async function PapersPage() {
  const t = await getTranslations("PapersPage");
  const papers = await getPapers();

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-950">{t("title")}</h1>
          <p className="mt-2 text-slate-600">{t("description")}</p>
        </div>
        <Link
          href="/papers/new"
          className="rounded-md bg-slate-950 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
        >
          {t("addPaper")}
        </Link>
      </div>

      {papers.length === 0 ? (
        <EmptyState
          title={t("emptyTitle")}
          description={t("emptyDescription")}
          actionHref="/papers/new"
          actionLabel={t("addPaper")}
        />
      ) : (
        <div className="grid gap-4">
          {papers.map((paper) => (
            <PaperCard key={paper.id} paper={paper} />
          ))}
        </div>
      )}
    </div>
  );
}
