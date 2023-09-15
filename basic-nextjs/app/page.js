import Link from "next/link";

export default function Page() {
  return (
    <div>
      <nav className="flex flex-row justify-center gap-5 font-semibold text-lg">
        <Link href="/blog">Blog</Link>
      </nav>
      <h1>Hello, Next.js!</h1>
    </div>
  );
}
