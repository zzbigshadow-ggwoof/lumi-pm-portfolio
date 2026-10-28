'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { profile } from '@/data/profile';

const links = [
  { href: '/', label: '首页' },
  { href: '/projects/lumi', label: 'Lumi 项目' },
  { href: '/projects', label: '其他项目' },
  { href: '/notes', label: '笔记' },
  { href: '/about', label: 'About' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-line bg-ink/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-site items-center justify-between px-6">
        <Link href="/" className="text-sm font-semibold tracking-wide text-white">
          {profile.name} <span className="text-mint">/ PM Portfolio</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`relative py-1 text-sm transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-mint after:transition-transform after:duration-300 hover:text-mint hover:after:scale-x-100 ${
                pathname === l.href ? 'text-mint after:scale-x-100' : 'text-body'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={profile.pdfUrl}
            className="rounded-lg border border-mint/50 px-4 py-1.5 text-sm text-mint transition-all duration-300 hover:-translate-y-0.5 hover:bg-mint hover:text-ink"
          >
            下载 PDF 作品集
          </a>
        </nav>

        <button
          aria-label="菜单"
          className="text-body md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="tab-panel border-t border-line bg-ink px-6 py-4 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`block py-2 text-sm ${pathname === l.href ? 'text-mint' : 'text-body'}`}
            >
              {l.label}
            </Link>
          ))}
          <a href={profile.pdfUrl} className="mt-2 block py-2 text-sm text-mint">
            下载 PDF 作品集
          </a>
        </nav>
      )}
    </header>
  );
}
