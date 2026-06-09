import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function HomePage() {
  const t = useTranslations("HomePage");
  const features = t.raw("features") as string[];

  return (
    <div className="space-y-10">
      <section className="rounded-lg border border-slate-200 bg-white p-8">
        <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
          {t("eyebrow")}
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-slate-950">
          LitKnowledge-QA
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
          {t("description")}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/papers"
            className="rounded-md bg-slate-950 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
          >
            {t("papers")}
          </Link>
          <Link
            href="/papers/new"
            className="rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-100"
          >
            {t("addPaper")}
          </Link>
          <Link
            href="/timeline"
            className="rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-100"
          >
            {t("timeline")}
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-slate-950">{t("currentEntries")}</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <Link
            href="/papers"
            className="rounded-lg border border-slate-200 bg-white p-5 hover:border-slate-300"
          >
            <h3 className="font-semibold text-slate-950">{t("papers")}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {t("papersDescription")}
            </p>
          </Link>
          <Link
            href="/papers/new"
            className="rounded-lg border border-slate-200 bg-white p-5 hover:border-slate-300"
          >
            <h3 className="font-semibold text-slate-950">{t("addPaper")}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {t("addPaperDescription")}
            </p>
          </Link>
          <Link
            href="/timeline"
            className="rounded-lg border border-slate-200 bg-white p-5 hover:border-slate-300"
          >
            <h3 className="font-semibold text-slate-950">{t("timeline")}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {t("timelineDescription")}
            </p>
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-slate-950">{t("phaseScope")}</h2>
        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          {features.map((feature) => (
            <li
              key={feature}
              className="rounded-md border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700"
            >
              {feature}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
