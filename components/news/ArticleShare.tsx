"use client";

import { useEffect, useState } from "react";
import {
  Check,
  Copy,
  Mail,
  MessageCircle,
  Share2,
} from "lucide-react";

interface ArticleShareProps {
  title: string;
  excerpt?: string;
}

interface ShareLink {
  label: string;
  shortLabel: string;
  href: string;
  badgeClassName: string;
  buttonClassName: string;
}

export default function ArticleShare({
  title,
  excerpt = "",
}: ArticleShareProps) {
  const [articleUrl, setArticleUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [nativeShareAvailable, setNativeShareAvailable] =
    useState(false);

  useEffect(() => {
    setArticleUrl(window.location.href);
    setNativeShareAvailable(
      typeof navigator !== "undefined" &&
        typeof navigator.share === "function",
    );
  }, []);

  const encodedUrl = encodeURIComponent(articleUrl);
  const encodedTitle = encodeURIComponent(title);

  const message = excerpt
    ? `${title}\n\n${excerpt}`
    : title;

  const encodedMessage = encodeURIComponent(message);

  const shareLinks: ShareLink[] = [
    {
      label: "WhatsApp",
      shortLabel: "WA",
      href: `https://wa.me/?text=${encodedTitle}%0A%0A${encodedUrl}`,
      badgeClassName:
        "bg-emerald-100 text-emerald-700",
      buttonClassName:
        "hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-800",
    },
    {
      label: "Facebook",
      shortLabel: "f",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      badgeClassName:
        "bg-blue-100 text-blue-700",
      buttonClassName:
        "hover:border-blue-300 hover:bg-blue-50 hover:text-blue-800",
    },
    {
      label: "X",
      shortLabel: "X",
      href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      badgeClassName:
        "bg-neutral-900 text-white",
      buttonClassName:
        "hover:border-neutral-400 hover:bg-neutral-100 hover:text-neutral-950",
    },
    {
      label: "LinkedIn",
      shortLabel: "in",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      badgeClassName:
        "bg-sky-100 text-sky-700",
      buttonClassName:
        "hover:border-sky-300 hover:bg-sky-50 hover:text-sky-800",
    },
  ];

  async function handleCopy() {
    if (!articleUrl) return;

    try {
      await navigator.clipboard.writeText(articleUrl);
      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 2200);
    } catch (error) {
      console.error("Unable to copy article link:", error);
    }
  }

  async function handleNativeShare() {
    if (
      typeof navigator === "undefined" ||
      !navigator.share ||
      !articleUrl
    ) {
      return;
    }

    try {
      await navigator.share({
        title,
        text: excerpt || title,
        url: articleUrl,
      });
    } catch (error) {
      if (
        error instanceof DOMException &&
        error.name === "AbortError"
      ) {
        return;
      }

      console.error("Unable to share article:", error);
    }
  }

  return (
    <section className="mt-8 overflow-hidden rounded-[28px] border border-black/[0.07] bg-gradient-to-br from-white via-white to-[#f5ecd8] shadow-[0_16px_45px_rgba(57,39,8,0.09)]">
      <div className="grid gap-7 px-5 py-7 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-10">
        <div>
          <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#805112]">
            <Share2 size={16} />
            Share this story
          </div>

          <h2 className="mt-3 text-xl font-black text-neutral-950 sm:text-2xl">
            Help others discover this update
          </h2>

          <p className="mt-2 max-w-xl text-sm leading-6 text-neutral-600">
            Share this Ministry article through your preferred
            platform or copy its direct link.
          </p>
        </div>

        <div className="flex flex-wrap gap-2.5 lg:justify-end">
          {nativeShareAvailable && (
            <button
              type="button"
              onClick={handleNativeShare}
              className="inline-flex items-center gap-2 rounded-full bg-[#302116] px-4 py-2.5 text-xs font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-400 hover:text-neutral-950"
            >
              <Share2 size={15} />
              Share
            </button>
          )}

          {shareLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Share this article on ${item.label}`}
              className={`inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3.5 py-2.5 text-xs font-bold text-neutral-700 transition-all duration-300 hover:-translate-y-0.5 ${item.buttonClassName}`}
            >
              <span
                className={`flex h-6 min-w-6 items-center justify-center rounded-full px-1 text-[10px] font-black ${item.badgeClassName}`}
              >
                {item.shortLabel}
              </span>

              {item.label}
            </a>
          ))}

          <a
            href={`mailto:?subject=${encodedTitle}&body=${encodedMessage}%0A%0A${encodedUrl}`}
            className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2.5 text-xs font-bold text-neutral-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-300 hover:bg-amber-50 hover:text-amber-800"
          >
            <Mail size={15} />
            Email
          </a>

          <button
            type="button"
            onClick={handleCopy}
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-xs font-bold transition-all duration-300 hover:-translate-y-0.5 ${
              copied
                ? "border-emerald-300 bg-emerald-50 text-emerald-700"
                : "border-black/10 bg-white text-neutral-700 hover:border-amber-300 hover:bg-amber-50 hover:text-amber-800"
            }`}
          >
            {copied ? (
              <>
                <Check size={15} />
                Copied
              </>
            ) : (
              <>
                <Copy size={15} />
                Copy link
              </>
            )}
          </button>
        </div>
      </div>

      <div className="flex items-center gap-2 border-t border-black/[0.06] bg-black/[0.025] px-5 py-3 text-[11px] text-neutral-500 sm:px-8 lg:px-10">
        <MessageCircle size={14} className="text-[#805112]" />
        Share responsibly through official and trusted channels.
      </div>
    </section>
  );
}