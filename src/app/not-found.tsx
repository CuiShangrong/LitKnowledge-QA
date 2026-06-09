import Link from "next/link";

export default function NotFound() {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-8 text-center">
      <h1 className="text-2xl font-bold text-slate-950">Page not found</h1>
      <p className="mt-2 text-slate-600">The requested page or paper does not exist.</p>
      <Link
        href="/papers"
        className="mt-5 inline-flex rounded-md bg-slate-950 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
      >
        Back to Papers
      </Link>
    </div>
  );
}

