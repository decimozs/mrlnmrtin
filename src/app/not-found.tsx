import Link from "next/link";

export default function NotFound() {
  return (
    <main className="w-full h-screen flex items-center justify-center flex-col text-center gap-3">
      <h1>Whoops! Looks like this portfolio piece is taking a coffee break.</h1>
      <p className="w-[350px]">
        No worries, though! While it's out enjoying some downtime, why not take
        a moment to check out some of my other fantastic projects? They're all
        ready and waiting for you!"
      </p>
      <Link href="/" className="text-slate">
        Index
      </Link>
    </main>
  );
}
