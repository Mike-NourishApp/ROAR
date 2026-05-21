"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#classes", label: "Classes" },
  { href: "#team", label: "Team" },
  { href: "#experience", label: "Why ROAR" },
  { href: "#memberships", label: "Memberships" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-2xl font-black tracking-[0.2em] text-white">
          ROAR
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium uppercase tracking-wider text-white/50 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta"
            className={cn(
              buttonVariants(),
              "bg-white text-black hover:bg-white/90 text-xs font-semibold uppercase tracking-wider px-6"
            )}
          >
            Book a Class
          </a>
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="md:hidden"
            render={<Button variant="ghost" size="icon" />}
          >
            <Menu className="h-5 w-5 text-white" />
            <span className="sr-only">Open menu</span>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 bg-[oklch(0.08_0_0)] border-white/5">
            <nav className="mt-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium uppercase tracking-wider text-white/70 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#cta"
                onClick={() => setOpen(false)}
                className={cn(
                  buttonVariants(),
                  "bg-white text-black hover:bg-white/90 text-xs font-semibold uppercase tracking-wider"
                )}
              >
                Book a Class
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
