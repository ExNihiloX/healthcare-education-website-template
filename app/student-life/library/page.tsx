'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/motion/variants';
import { Clock, BookOpen, Globe, Users, FileText } from 'lucide-react';

export default function LibraryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 text-white md:py-28">
        <Image src="/images/slides/15.jpg" alt="Baldwin University Library" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950/90 via-primary-900/85 to-primary-800/80" />
        <motion.div className="container relative" variants={staggerContainer} initial="hidden" animate="show">
          <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-widest text-primary-200">Student Life</motion.p>
          <motion.h1 variants={fadeInUp} className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">The Baldwin Library</motion.h1>
          <motion.p variants={fadeInUp} className="mt-6 max-w-2xl text-lg text-primary-100/90">
            Providing relevant, efficient, and enhanced library experiences in support of teaching, learning, research, and scholarly engagement.
          </motion.p>
        </motion.div>
      </section>

      {/* Quick Info */}
      <section className="border-b py-8">
        <div className="container flex flex-wrap items-center justify-center gap-8 text-sm">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-primary" />
            <span><strong>Mon–Fri:</strong> 9am – 8pm</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-primary" />
            <span><strong>Saturday:</strong> 9am – 2pm</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-primary" />
            <span>Open to all registered students, staff, and faculty</span>
          </div>
        </div>
      </section>

      {/* Library image */}
      <section className="py-12">
        <div className="container">
          <div className="overflow-hidden rounded-xl">
            <Image src="/images/elearning.jpg" alt="Baldwin University e-learning resources" width={1200} height={400} className="h-64 w-full object-cover" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 md:py-20">
        <motion.div className="container" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <motion.div variants={fadeInUp} className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Library Services</h2>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: BookOpen, title: 'Reserve Collection', desc: 'High-demand materials available for short-period reading in the library. Can be borrowed overnight or on weekends.' },
              { icon: FileText, title: 'Interlibrary Loans', desc: 'Request items not in our collection from partner libraries across Ghana.' },
              { icon: Users, title: 'Research Assistance', desc: 'Staff help with finding information, using databases, evaluating sources, and proper citation to avoid plagiarism.' },
              { icon: Globe, title: 'Online Databases', desc: 'Access to HINARI (7,000+ journals), PubMed (20M+ entries), DOAJ, BioMed Central, AJOL, and African Medical Journals.' },
              { icon: BookOpen, title: 'Reservation Service', desc: 'Request a hold on items currently on loan. The borrower cannot renew, and you have three days to collect.' },
              { icon: FileText, title: 'Photocopying & Internet', desc: 'Photocopying services available (copyright rules apply). Eight computers connected to the internet for research.' },
            ].map((s) => (
              <motion.div key={s.title} variants={fadeInUp} className="rounded-xl border bg-card p-6">
                <s.icon className="h-6 w-6 text-primary" />
                <h3 className="mt-3 font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Borrowing Rules */}
      <section className="bg-muted/30 py-20 md:py-28">
        <motion.div className="container" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <motion.div variants={fadeInUp} className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Borrowing Privileges</h2>
          </motion.div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <motion.div variants={fadeInUp} className="rounded-xl border bg-card p-6">
              <h3 className="font-semibold">Students</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>Two books for two weeks</li>
                <li>Renewable once per semester</li>
                <li>Valid Baldwin ID card required</li>
                <li>No borrowing during vacation</li>
              </ul>
            </motion.div>
            <motion.div variants={fadeInUp} className="rounded-xl border bg-card p-6">
              <h3 className="font-semibold">Teaching Staff</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>Up to four books for four weeks</li>
                <li>Faculty Library Section with traceable items</li>
                <li>Priority access to computer equipment</li>
                <li>Dedicated faculty lounge and restroom</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Online Resources */}
      <section className="py-20 md:py-28">
        <motion.div className="container" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <motion.div variants={fadeInUp} className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Online Databases</h2>
            <p className="mt-4 text-muted-foreground">Access world-class research resources from campus.</p>
          </motion.div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              { name: 'HINARI', desc: '7,000+ health & biomedical journals' },
              { name: 'PubMed', desc: '20M+ health sciences literature entries' },
              { name: 'BioMed Central', desc: 'Open access biomedical research articles' },
              { name: 'DOAJ', desc: '2,456+ searchable open access journals' },
              { name: 'AJOL', desc: 'African research publications online' },
              { name: 'African Index Medicus', desc: 'Regional index to African health literature' },
            ].map((db) => (
              <motion.div key={db.name} variants={fadeInUp} className="rounded-lg border bg-card px-5 py-4">
                <h4 className="font-semibold text-primary">{db.name}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{db.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
}
