"use server";

import { redirect } from "next/navigation";
import { routing } from "@/i18n/routing";
import { createPaper, type PaperFormState } from "@/lib/papers";

export async function createPaperAction(
  _state: PaperFormState,
  formData: FormData
): Promise<PaperFormState> {
  const locale = formData.get("locale");
  const safeLocale =
    typeof locale === "string" && routing.locales.includes(locale as "zh" | "en")
      ? locale
      : routing.defaultLocale;

  const result = await createPaper(formData, {
    titleRequired: safeLocale === "zh" ? "标题为必填项。" : "Title is required."
  });

  if (!result.paper) {
    return { errors: result.errors };
  }

  redirect(`/${safeLocale}/papers/${result.paper.id}`);
}
