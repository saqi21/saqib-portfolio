import Image from "next/image";
import { basePath } from "@/lib/constants";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Rounded profile image */}
      <div className="h-8 w-8 shrink-0 overflow-hidden rounded-full ring-2 ring-primary-500/40">
        <Image
          src={`${basePath}/images/my-profile.png`}
          alt="SaQiB Zafar"
          width={32}
          height={32}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Name logo */}
      <svg
        viewBox="0 0 165 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto"
      >
        <defs>
          <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4c63d2" />
            <stop offset="50%" stopColor="#6b3fa0" />
            <stop offset="100%" stopColor="#d946a8" />
          </linearGradient>
        </defs>

        {/* Gradient background behind SaQiB */}
        <rect x="1" y="4" width="82" height="32" rx="8" fill="url(#logoGrad)" />

        {/* SaQiB in white on gradient bg */}
        <text
          x="10"
          y="28"
          fontFamily="Poppins, system-ui, sans-serif"
          fontWeight="700"
          fontSize="22"
          fill="white"
        >
          SaQiB
        </text>

        {/* Zafar regular, gradient text */}
        <text
          x="90"
          y="28"
          fontFamily="Poppins, system-ui, sans-serif"
          fontWeight="400"
          fontSize="22"
          fill="url(#logoGrad)"
        >
          Zafar
        </text>
      </svg>
    </div>
  );
}
