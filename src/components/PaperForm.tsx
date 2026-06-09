"use client";

import { useLocale, useTranslations } from "next-intl";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import type { PaperFormState } from "@/lib/papers";

type PaperFormProps = {
  action: (state: PaperFormState, formData: FormData) => Promise<PaperFormState>;
};

const textFields = [
  { name: "title", labelKey: "title", required: true },
  { name: "authors", labelKey: "authors" },
  { name: "year", labelKey: "year", type: "number" },
  { name: "venue", labelKey: "venue" },
  { name: "url", labelKey: "url", type: "url" },
  { name: "field", labelKey: "field" },
  { name: "paperType", labelKey: "paperType" },
  { name: "topics", labelKey: "topics" },
  { name: "tags", labelKey: "tags" }
];

const textAreaFields = [
  { name: "abstract", labelKey: "abstract" },
  { name: "researchQuestion", labelKey: "researchQuestion" },
  { name: "coreArgument", labelKey: "coreArgument" },
  { name: "methodSummary", labelKey: "methodSummary" },
  { name: "evidenceSource", labelKey: "evidenceSource" },
  { name: "sourceSummary", labelKey: "sourceSummary" },
  { name: "contribution", labelKey: "contribution" },
  { name: "limitations", labelKey: "limitations" },
  { name: "notes", labelKey: "notes" }
];

function SubmitButton() {
  const t = useTranslations("PaperForm");
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-md bg-slate-950 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-400"
    >
      {pending ? t("saving") : t("save")}
    </button>
  );
}

export function PaperForm({ action }: PaperFormProps) {
  const t = useTranslations("PaperForm");
  const locale = useLocale();
  const [state, formAction] = useActionState(action, {});

  return (
    <form action={formAction} className="space-y-6 rounded-lg border border-slate-200 bg-white p-6">
      <input type="hidden" name="locale" value={locale} />
      <p className="text-sm leading-6 text-slate-600">{t("intro")}</p>
      <div className="grid gap-4 md:grid-cols-2">
        {textFields.map((field) => (
          <label key={field.name} className="space-y-2">
            <span className="text-sm font-medium text-slate-700">
              {t(field.labelKey)}
              {field.required ? " *" : ""}
            </span>
            <input
              name={field.name}
              type={field.type || "text"}
              required={field.required}
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-950 outline-none focus:border-slate-600"
            />
            {state.errors?.[field.name] ? (
              <span className="text-xs text-red-600">{state.errors[field.name]}</span>
            ) : null}
          </label>
        ))}
      </div>

      <div className="grid gap-4">
        {textAreaFields.map((field) => (
          <label key={field.name} className="space-y-2">
            <span className="text-sm font-medium text-slate-700">{t(field.labelKey)}</span>
            <textarea
              name={field.name}
              rows={4}
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-950 outline-none focus:border-slate-600"
            />
          </label>
        ))}
      </div>

      <div className="flex justify-end">
        <SubmitButton />
      </div>
    </form>
  );
}
