import Link from "next/link";
import Image from "next/image";

export function PolicyLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[oklch(0.06_0_0)]">
      {/* Header */}
      <header className="border-b border-white/5 bg-[oklch(0.06_0_0)]">
        <div className="mx-auto flex h-16 max-w-3xl items-center px-4 sm:px-6">
          <Link href="/" className="relative h-10 w-28">
            <Image
              src="/logo-white.png"
              alt="ROAR"
              fill
              className="object-contain object-left"
            />
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          {children}
        </div>
      </main>

      {/* Simple footer */}
      <footer className="border-t border-white/5 py-8">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 flex flex-wrap gap-4 text-xs text-white/30">
          <Link href="/" className="hover:text-white/60">Home</Link>
          <Link href="/terms" className="hover:text-white/60">Terms & Conditions</Link>
          <Link href="/privacy" className="hover:text-white/60">Privacy Policy</Link>
          <Link href="/cookies" className="hover:text-white/60">Cookie Policy</Link>
        </div>
      </footer>
    </div>
  );
}
