"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";

import { defaultLocale, locales, Locale } from "@/i18n/locales";

const localeInfo: Record<Locale, { label: string; flag: string }> = {
  it: { label: "Italiano", flag: "🇮🇹" },
  en: { label: "English", flag: "🇬🇧" },
  de: { label: "Deutsch", flag: "🇩🇪" },
  es: { label: "Espanol", flag: "🇪🇸" },
  fr: { label: "Francais", flag: "🇫🇷" },
};

const localeSet = new Set<string>(locales);

function stripLocale(pathname: string) {
  const segments = pathname.split("/");
  const firstSegment = segments[1];

  if (firstSegment && localeSet.has(firstSegment)) {
    const rest = segments.slice(2).join("/");
    return rest ? `/${rest}` : "/";
  }

  return pathname || "/";
}

export function LanguageSwitcher() {
  const pathname = usePathname();
  const currentLocale = useLocale() || defaultLocale;
  const basePath = stripLocale(pathname);
  
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 300); // 300ms delay prima di chiudere
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div 
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type="button"
        className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200/70 bg-white/80 text-base shadow-soft transition hover:-translate-y-0.5"
        aria-label="Language selection"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span aria-hidden>{localeInfo[currentLocale as Locale]?.flag}</span>
      </button>
      <div 
        className={`absolute right-0 top-11 z-50 min-w-[140px] rounded-2xl border border-slate-200/70 bg-white/95 p-2 text-sm shadow-soft transition-all duration-200 ${
          isOpen 
            ? 'pointer-events-auto opacity-100 translate-y-0' 
            : 'pointer-events-none opacity-0 -translate-y-2'
        }`}
      >
        {locales.map((locale) => {
          const href = basePath === "/" ? `/${locale}` : `/${locale}${basePath}`;

          return (
            <Link
              key={locale}
              href={href}
              className="flex items-center gap-2 rounded-xl px-3 py-2 text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
            >
              <span className="text-base" aria-hidden>
                {localeInfo[locale].flag}
              </span>
              <span>{localeInfo[locale].label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
