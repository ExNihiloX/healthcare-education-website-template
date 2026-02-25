'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig, mainNav, headerCTA } from '@/data/content';
import type { NavItem } from '@/data/content';

function DesktopNavItem({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);

  if (!item.children) {
    return (
      <Link
        href={item.href}
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={item.href}
        className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        {item.label}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? 'rotate-180' : ''}`} />
      </Link>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 top-full z-50 mt-2 w-72 rounded-xl border bg-card p-2 shadow-xl"
          >
            {item.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-muted"
              >
                <span className="block text-sm font-medium">{child.label}</span>
                {child.description && (
                  <span className="block text-xs text-muted-foreground">
                    {child.description}
                  </span>
                )}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-sm font-bold text-white">
            BU
          </div>
          <div className="hidden sm:block">
            <span className="text-base font-bold leading-tight">{siteConfig.name}</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:items-center lg:gap-6">
          {mainNav.map((item) => (
            <DesktopNavItem key={item.href} item={item} />
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex lg:items-center lg:gap-3">
          <Link
            href={headerCTA.secondary.href}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {headerCTA.secondary.label}
          </Link>
          <Link
            href={headerCTA.primary.href}
            className="rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {headerCTA.primary.label}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t lg:hidden"
          >
            <nav className="container py-4">
              {mainNav.map((item) => (
                <div key={item.href}>
                  {item.children ? (
                    <>
                      <button
                        onClick={() =>
                          setExpandedMobile(
                            expandedMobile === item.label ? null : item.label
                          )
                        }
                        className="flex w-full items-center justify-between py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {item.label}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            expandedMobile === item.label ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {expandedMobile === item.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="ml-4 border-l pl-4"
                          >
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="block py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="mt-4 flex flex-col gap-2">
                <Link
                  href={headerCTA.secondary.href}
                  className="rounded-lg border border-input px-4 py-2.5 text-center text-sm font-medium transition-colors hover:bg-accent"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {headerCTA.secondary.label}
                </Link>
                <Link
                  href={headerCTA.primary.href}
                  className="rounded-lg bg-primary px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {headerCTA.primary.label}
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
