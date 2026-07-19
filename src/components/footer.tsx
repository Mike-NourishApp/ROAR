import Image from "next/image";
import Link from "next/link";
import { MessageCircle, MapPin, Clock, Mail } from "lucide-react";
import { InstagramIcon } from "@/components/icons";
import { site, whatsappUrl } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="relative h-10 w-28 mb-2">
              <Image
                src="/logo-white.png"
                alt="ROAR"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-xs uppercase tracking-wider text-white/30">
              Strength. Conditioning. Performance.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all hover:border-roar/40 hover:text-roar"
              >
                <InstagramIcon className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href={whatsappUrl(
                  "Hey I'm interested in ROAR, can you give me some more info?"
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all hover:border-roar/40 hover:text-roar"
              >
                <MessageCircle className="h-4 w-4" />
                <span className="sr-only">WhatsApp</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-roar">
              <MapPin className="h-3.5 w-3.5" /> Find Us
            </h3>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm leading-relaxed text-white/50 hover:text-white"
            >
              {site.address}
            </a>
          </div>

          <div>
            <h3 className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-roar">
              <Clock className="h-3.5 w-3.5" /> Opening Hours
            </h3>
            <ul className="space-y-2 text-sm text-white/50">
              {site.hours.map((h) => (
                <li key={h.days}>
                  <span className="block text-white/70">{h.days}</span>
                  {h.time}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-roar">
              <Mail className="h-3.5 w-3.5" /> Contact
            </h3>
            <ul className="space-y-2 text-sm text-white/50">
              <li>
                <a
                  href={whatsappUrl("Hey I'm interested in ROAR!")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-white">
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  {site.instagramHandle}
                </a>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-white">
                  Contact page &rarr;
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/5 pt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
          <p className="text-[10px] uppercase tracking-wider text-white/20">
            &copy; {new Date().getFullYear()} ROAR. All rights reserved.
          </p>
          <div className="flex gap-4 text-[10px] uppercase tracking-wider text-white/20">
            <Link href="/contact" className="hover:text-white/40">Contact</Link>
            <Link href="/terms" className="hover:text-white/40">Terms</Link>
            <Link href="/privacy" className="hover:text-white/40">Privacy</Link>
            <Link href="/cookies" className="hover:text-white/40">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
