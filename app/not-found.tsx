import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center px-4">
      <div className="text-center">
        <h1 className="gradient-text font-heading text-8xl font-bold">404</h1>
        <p className="mt-4 text-xl text-text-secondary">Page not found</p>
        <p className="mt-2 text-text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-500 to-primary-700 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/30 hover:brightness-110"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
