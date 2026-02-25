'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/motion/variants';
import { Heart, Briefcase, BookOpen, HelpCircle } from 'lucide-react';

export default function FinancialAidPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 text-white md:py-28">
        <Image src="/images/slides/7.jpg" alt="Baldwin University campus" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950/90 via-primary-900/85 to-primary-800/80" />
        <motion.div className="container relative" variants={staggerContainer} initial="hidden" animate="show">
          <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-widest text-primary-200">Admissions</motion.p>
          <motion.h1 variants={fadeInUp} className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">Financial Aid</motion.h1>
          <motion.p variants={fadeInUp} className="mt-6 max-w-2xl text-lg text-primary-100/90">
            Baldwin offers several programmes to help students manage their education costs and focus on learning.
          </motion.p>
        </motion.div>
      </section>

      {/* Aid Types */}
      <section className="py-20 md:py-28">
        <motion.div className="container" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div variants={fadeInUp} className="rounded-xl border bg-card p-8">
              <Heart className="h-8 w-8 text-primary" />
              <h3 className="mt-4 text-xl font-semibold">Sponsorship Programme</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Students can apply for sponsorship from individuals, companies, or foundations. Sponsored
                students maintain contact with their sponsor throughout the term, sending final grades,
                at least two semester progress letters, and a photograph. All sponsor funds are sent to
                the Finance Office and credited to the student&rsquo;s account.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="rounded-xl border bg-card p-8">
              <Briefcase className="h-8 w-8 text-primary" />
              <h3 className="mt-4 text-xl font-semibold">Work-Study Programme</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Students work on campus as part-time staff in positions as they open. Qualified students
                may become tutors in the Learning Laboratory. Earn compensation while studying, gaining
                professional experience alongside your education.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="rounded-xl border bg-card p-8">
              <BookOpen className="h-8 w-8 text-primary" />
              <h3 className="mt-4 text-xl font-semibold">Textbook Rental Programme</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Rent textbooks for the semester at a fraction of the purchase price. Return them in
                good condition (no markings or highlights) at semester end. This programme significantly
                reduces textbook costs for all students.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="rounded-xl border bg-card p-8">
              <HelpCircle className="h-8 w-8 text-primary" />
              <h3 className="mt-4 text-xl font-semibold">Financial Aid Office</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                The Financial Aid Office works with students to secure part-time positions in the community,
                helps prepare resumes for potential employers, resolves financial aid problems, and handles
                donations, fundraising, and sponsorship solicitation on behalf of students.
              </p>
            </motion.div>
          </div>

          <motion.div variants={fadeInUp} className="mt-12 text-center">
            <p className="text-muted-foreground">Have questions about funding your education?</p>
            <Link href="/contact" className="mt-4 inline-flex rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-white hover:bg-primary/90">
              Contact the Financial Aid Office
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
