"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { site } from "@/lib/site";
import { PhoneIcon, MenuIcon, CloseIcon } from "./icons";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/brands", label: "Brands" },
  { href: "/problems", label: "Problems" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-2.5">
        <Link
          href="/"
          className="flex items-center gap-2.5"
          aria-label={`${site.name} home`}
        >
          <Logo priority className="h-11 w-auto" />
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg font-extrabold tracking-tight text-white">
              Ice Machine Repair
            </span>
            <span className="font-tech text-[0.6rem] uppercase tracking-[2px] text-ice-300">
              1st Choice · Nashville, TN
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink-300 transition-colors hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={`tel:${site.phone.tel}`} className="hidden text-right sm:block">
            <span className="block font-tech text-[0.58rem] uppercase tracking-[1.5px] text-ink-400">
              Call for service
            </span>
            <span className="text-base font-extrabold text-white">
              {site.phone.display}
            </span>
          </a>
          <a
            href={`tel:${site.phone.tel}`}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-brand-600 to-ice-500 px-4 py-2.5 font-bold text-white shadow-[0_8px_24px_-8px_rgba(18,181,216,0.7)] transition hover:brightness-[1.08]"
          >
            <PhoneIcon className="h-[18px] w-[18px]" />
            <span className="hidden sm:inline">Call Now</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-ink-200 hover:bg-white/10 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-ink-950 px-6 py-3 lg:hidden">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-base font-medium text-ink-200 hover:text-ice-300"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
