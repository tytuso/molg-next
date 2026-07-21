"use client";

import { useEffect, useState } from "react";
import {
  AtSign,
  BriefcaseBusiness,
  Check,
  Copy,
  Facebook,
  Mail,
  MessageCircle,
  Share2,
} from "lucide-react";

interface ArticleShareProps {
  title: string;
  excerpt?: string;
}

export default function ArticleShare({
  title,
  excerpt = "",
}: ArticleShareProps) {
  const [articleUrl, setArticleUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [canUseNativeShare, setCanUseNativeShare] = useState(false);

  useEffect(() => {
    setArticleUrl(window.location.href);
    setCanUseNativeShare(typeof navigator.share === "function");
  }, []);

  const encodedUrl = encodeURIComponent(articleUrl);
  const encodedTitle = encodeURIComponent(title);

  const encodedMessage = encodeURIComponent(
    excerpt ? `${title}\n\n${excerpt}` : title,
  );

  const shareLinks = [
    {
      label: "WhatsApp",
      href: `https://wa.me/?text=${encodedTitle}%0A%0A${encodedUrl}`,
      icon: MessageCircle,
      className:
        "hover:border-emerald-400 hover:bg-emerald-50 hover:text-emerald-700",
    },
    {
      label: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: Facebook,
      className:
        "hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700",
    },
    {
      label: "X",
      href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      icon: AtSign,
      className:
        "hover:border-neutral-500 hover:bg-neutral-100 hover:text-neutral-950",
    },
    {
      label: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: BriefcaseBusiness,
      className:
        "hover:border-sky-500 hover:bg-sky-50 hover:text-sky-700",
    },
    {
      label: "Email",
      href: `mailto:?subject=${encodedTitle}&body=${encodedMessage}%0A%0A${encodedUrl}`,
      icon: Mail,
      className:
        "hover:border-amber-400 hover:bg-amber-50 hover:text-amber-700",
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
    if (!navigator.share || !articleUrl) return;

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
      <div className="grid gap-7 px-5 py-7 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-10">
        <div>
          <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#805112]">
            <Share2 size={16} />
            Share this story
          </div>

          <h2 className="mt-3 text-xl font-black text-neutral-950 sm:text-2xl">
            Help others discover this update
          </h2>

          <p className="mt-2 max-w-xl text-sm leading-6 text-neutral-600">
            Share this Ministry article through your preferred platform or
            copy its direct link.
          </p>
        </div>

        <div className="flex flex-wrap gap-2.5 lg:justify-end">
          {canUseNativeShare && (
            <button
              type="button"
              onClick={handleNativeShare}
              className="inline-flex items-center gap-2 rounded-full bg-[#302116] px-4 py-2.5 text-xs font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-400 hover:text-neutral-950"
            >
              <Share2 size={15} />
              Share
            </button>
          )}

          {shareLinks.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.label}
                href={item.href}
                target={item.label === "Email" ? undefined : "_blank"}
                rel={
                  item.label === "Email"
                    ? undefined
                    : "noopener noreferrer"
                }
                aria-label={`Share article on ${item.label}`}
                className={`inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2.5 text-xs font-bold text-neutral-700 transition-all duration-300 hover:-translate-y-0.5 ${item.className}`}
              >
                <Icon size={15} />
                {item.label}
              </a>
            );
          })}

          <button
            type="button"
            onClick={handleCopy}
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-xs font-bold transition-all duration-300 hover:-translate-y-0.5 ${
              copied
                ? "border-emerald-300 bg-emerald-50 text-emerald-700"
                : "border-black/10 bg-white text-neutral-700 hover:border-amber-400 hover:bg-amber-50 hover:text-amber-700"
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
    </section>
  );
}