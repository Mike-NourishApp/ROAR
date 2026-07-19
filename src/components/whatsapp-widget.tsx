"use client";

import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/site";

const quickMessages = [
  "I'm interested in joining ROAR, can you give me more info?",
  "I'd like to book a trial class",
  "I'd like to enquire about personal training",
  "I'd like to know about membership options",
];

export function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSend(text: string) {
    const url = whatsappUrl(text);
    window.open(url, "_blank", "noopener,noreferrer,width=600,height=700");
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setMessage("");
      setOpen(false);
    }, 3000);
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/20 transition-transform hover:scale-105 active:scale-95"
        aria-label={open ? "Close chat" : "Chat on WhatsApp"}
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[340px] overflow-hidden rounded-2xl border border-white/10 bg-[oklch(0.1_0_0)] shadow-2xl shadow-black/50 sm:w-[380px]">
          {/* Header */}
          <div className="bg-[#25D366] px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-sm font-black text-white">
                R
              </div>
              <div>
                <p className="font-bold text-white">ROAR</p>
                <p className="text-xs text-white/80">Typically replies within minutes</p>
              </div>
            </div>
          </div>

          {sent ? (
            /* Success state */
            <div className="flex flex-col items-center justify-center gap-3 px-5 py-12">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366]/20">
                <MessageCircle className="h-6 w-6 text-[#25D366]" />
              </div>
              <p className="text-sm font-medium text-white">Opening WhatsApp...</p>
              <p className="text-xs text-white/40">Continue the conversation there</p>
            </div>
          ) : (
            <>
              {/* Chat body */}
              <div className="px-5 py-5">
                {/* Incoming message bubble */}
                <div className="mb-5 max-w-[85%] rounded-2xl rounded-tl-sm bg-white/[0.06] px-4 py-3">
                  <p className="text-sm leading-relaxed text-white/70">
                    Hey! Welcome to ROAR. How can we help you today?
                  </p>
                  <p className="mt-1 text-right text-[10px] text-white/20">now</p>
                </div>

                {/* Quick replies */}
                <div className="space-y-2">
                  {quickMessages.map((msg) => (
                    <button
                      key={msg}
                      onClick={() => handleSend(msg)}
                      className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-left text-xs text-white/60 transition-all hover:border-white/20 hover:bg-white/[0.06] hover:text-white/80"
                    >
                      {msg}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom message input */}
              <div className="border-t border-white/5 px-4 py-3">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && message.trim()) handleSend(message);
                    }}
                    placeholder="Type a message..."
                    className="flex-1 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder:text-white/20 focus:border-white/20 focus:outline-none"
                  />
                  <Button
                    size="icon"
                    onClick={() => message.trim() && handleSend(message)}
                    disabled={!message.trim()}
                    className="h-10 w-10 rounded-full bg-[#25D366] text-white hover:bg-[#25D366]/80 disabled:opacity-30"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
