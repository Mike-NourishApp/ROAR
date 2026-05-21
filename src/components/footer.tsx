import { MessageCircle } from "lucide-react";
import { InstagramIcon } from "@/components/icons";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div>
            <p className="text-xl font-black tracking-widest">ROAR</p>
            <p className="text-sm text-muted-foreground">
              Strength. Conditioning. Performance.
            </p>
            <p className="mt-1 text-sm text-muted-foreground">Singapore</p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-roar hover:text-roar"
            >
              <InstagramIcon className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-roar hover:text-roar"
            >
              <MessageCircle className="h-5 w-5" />
              <span className="sr-only">WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} ROAR. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
