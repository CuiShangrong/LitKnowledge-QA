import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function NotFound() {
  const t = useTranslations("NotFound");

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-8 text-center">
      <h1 className="text-2xl font-bold text-slate-950">{t("title")}</h1>
      <p className="mt-2 text-slate-600">{t("description")}</p>
      <Link
        href="/papers"
        className="mt-5 inline-flex rounded-md bg-slate-950 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
      >
        {t("back")}
      </Link>
    </div>
  );
}
