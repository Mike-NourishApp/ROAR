"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#classes", label: "Classes" },
  { href: "/#timetable", label: "Timetable" },
  { href: "/#team", label: "Team" },
  { href: "/#memberships", label: "Memberships" },
  { href: "/#founding", label: "Founding" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-black/50 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="relative h-12 w-36">
          <Image
            src="/logo-gold.png"
            alt="ROAR"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-medium uppercase tracking-wider text-white/50 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#timetable"
            className={cn(
              buttonVariants(),
              "bg-roar text-black hover:bg-roar/90 text-xs font-semibold uppercase tracking-wider px-6"
            )}
          >
            Book a Class
          </Link>
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="md:hidden"
            render={<Button variant="ghost" size="icon" />}
          >
            <Menu className="h-7 w-7 text-white" />
            <span className="sr-only">Open menu</span>
          </SheetTrigger>
          <SheetContent side="right" className="w-full bg-[oklch(0.08_0_0)] border-white/5">
            <nav className="mt-12 flex flex-col gap-6 pl-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium uppercase tracking-wider text-white/70 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#timetable"
                onClick={() => setOpen(false)}
                className={cn(
                  buttonVariants(),
                  "bg-roar text-black hover:bg-roar/90 text-xs font-semibold uppercase tracking-wider"
                )}
              >
                Book a Class
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
