"use client";

import { useState } from "react";
import { Linkedin, Twitter, LinkIcon, Check } from "lucide-react";

interface ShareButtonsProps {
  url: string;
  title: string;
}

export default function ShareButtons({ url, title }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`;

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement("textarea");
      textarea.value = url;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs font-medium text-text-muted">Share:</span>
      <a
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        className="flex h-8 w-8 items-center justify-center rounded-full border border-black/10 text-text-muted transition-all duration-200 hover:border-primary-500/50 hover:bg-primary-500/10 hover:text-primary-400"
      >
        <Linkedin className="h-3.5 w-3.5" />
      </a>
      <a
        href={twitterUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Twitter"
        className="flex h-8 w-8 items-center justify-center rounded-full border border-black/10 text-text-muted transition-all duration-200 hover:border-primary-500/50 hover:bg-primary-500/10 hover:text-primary-400"
      >
        <Twitter className="h-3.5 w-3.5" />
      </a>
      <button
        onClick={copyLink}
        aria-label="Copy link"
        className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-black/10 text-text-muted transition-all duration-200 hover:border-primary-500/50 hover:bg-primary-500/10 hover:text-primary-400"
      >
        {copied ? (
          <Check className="h-3.5 w-3.5 text-green-500" />
        ) : (
          <LinkIcon className="h-3.5 w-3.5" />
        )}
      </button>
    </div>
  );
}
