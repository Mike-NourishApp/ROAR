import { MessageCircle } from "lucide-react";
import { InstagramIcon } from "@/components/icons";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div>
            <p className="text-xl font-black tracking-[0.2em] text-white">ROAR</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-white/30">
              Strength. Conditioning. Performance.
            </p>
            <p className="mt-1 text-xs text-white/20">Singapore</p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all hover:border-white/20 hover:text-white"
            >
              <InstagramIcon className="h-4 w-4" />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=6586062819&text=Hey+I%27m+interested+in+ROAR%2C+can+you+give+me+some+more+info%3F&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all hover:border-white/20 hover:text-white"
            >
              <MessageCircle className="h-4 w-4" />
              <span className="sr-only">WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-white/5 pt-8 text-center text-[10px] uppercase tracking-wider text-white/20">
          &copy; {new Date().getFullYear()} ROAR. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
