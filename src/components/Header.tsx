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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-2.5">
        <Link
          href="/"
          className="flex items-center gap-2.5"
          aria-label={`${site.name} home`}
        >
          <Logo priority className="h-11 w-auto" />
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg font-extrabold tracking-tight text-ink-900">
              1st Choice Ice Machine Repair
            </span>
            <span className="text-[0.62rem] font-bold uppercase tracking-[1.5px] text-brand-600">
              Nashville, TN · Licensed &amp; Insured
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-ink-600 transition-colors hover:text-brand-700"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={`tel:${site.phone.tel}`} className="hidden text-right sm:block">
            <span className="block text-[0.6rem] font-semibold uppercase tracking-[1px] text-ink-400">
              Call for service
            </span>
            <span className="text-base font-extrabold text-ink-900">
              {site.phone.display}
            </span>
          </a>
          <a
            href={`tel:${site.phone.tel}`}
            className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-4 py-2.5 font-bold text-white shadow-sm transition hover:bg-brand-700"
          >
            <PhoneIcon className="h-[18px] w-[18px]" />
            <span className="hidden sm:inline">Call Now</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-ink-700 hover:bg-ink-100 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-ink-200 bg-white px-6 py-3 lg:hidden">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-base font-semibold text-ink-700 hover:text-brand-700"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
