import { getTranslations } from "next-intl/server";
import { PaperForm } from "@/components/PaperForm";
import { Link } from "@/i18n/navigation";
import { createPaperAction } from "./actions";

export default async function NewPaperPage() {
  const t = await getTranslations("NewPaperPage");

  return (
    <div className="space-y-6">
      <div>
        <Link href="/papers" className="text-sm font-medium text-slate-600 hover:text-slate-950">
          {t("back")}
        </Link>
        <h1 className="mt-3 text-3xl font-bold text-slate-950">{t("title")}</h1>
        <p className="mt-2 text-slate-600">{t("description")}</p>
      </div>
      <PaperForm action={createPaperAction} />
    </div>
  );
}
