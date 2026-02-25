'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/motion/variants';
import Image from 'next/image';

export default function InternationalPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 text-white md:py-28">
        <Image src="/images/international-students.jpg" alt="International students at Baldwin University" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950/90 via-primary-900/85 to-primary-800/80" />
        <motion.div className="container relative" variants={staggerContainer} initial="hidden" animate="show">
          <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-widest text-primary-200">Admissions</motion.p>
          <motion.h1 variants={fadeInUp} className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">International Students</motion.h1>
          <motion.p variants={fadeInUp} className="mt-6 max-w-2xl text-lg text-primary-100/90">
            Baldwin welcomes students from across West Africa and the world. Here is everything you need to apply from outside Ghana.
          </motion.p>
        </motion.div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-28">
        <motion.div className="container" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <div className="mx-auto max-w-3xl space-y-12">
            <motion.div variants={fadeInUp}>
              <h2 className="text-2xl font-bold">Entry Requirements</h2>
              <div className="mt-6 space-y-6">
                <div className="rounded-xl border bg-card p-6">
                  <h3 className="font-semibold">WASSCE/SSSCE from West Africa</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    At least six credits including English, Mathematics, and Integrated Science.
                  </p>
                </div>
                <div className="rounded-xl border bg-card p-6">
                  <h3 className="font-semibold">IGCSE / GCE Cambridge</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Five passes including English and Mathematics at O Level, plus three relevant subjects at A Level.
                  </p>
                </div>
                <div className="rounded-xl border bg-card p-6">
                  <h3 className="font-semibold">International Baccalaureate (IB)</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Grades A*/A-C in English, Mathematics, Biology at Standard Level plus three Higher Level grades A-C in Chemistry, Physics, Biology, or Mathematics.
                  </p>
                </div>
                <div className="rounded-xl border bg-card p-6">
                  <h3 className="font-semibold">American High School</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Grades 12 &amp; 13 with relevant science and mathematics courses. Contact admissions for specific requirements.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h2 className="text-2xl font-bold">How to Apply</h2>
              <p className="mt-4 text-muted-foreground">
                International applicants should email{' '}
                <a href="mailto:enquiries@baldwin.edu.gh" className="font-medium text-primary hover:underline">enquiries@baldwin.edu.gh</a>{' '}
                for voucher code purchase directions and application guidance. Our admissions team will
                walk you through the process and help with any documentation requirements.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h2 className="text-2xl font-bold">Medical School (MB ChB)</h2>
              <p className="mt-4 text-muted-foreground">
                International applicants to the Baldwin Medical School must meet the same academic
                standards as Ghanaian applicants and additionally pass an entrance examination and
                selection interview. All credentials listed above are accepted.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="rounded-xl bg-primary/5 p-8 text-center">
              <h3 className="text-lg font-semibold">Need More Information?</h3>
              <p className="mt-2 text-sm text-muted-foreground">Our admissions team is ready to help international applicants.</p>
              <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <a href="mailto:enquiries@baldwin.edu.gh" className="inline-flex rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary/90">Email Admissions</a>
                <Link href="/contact" className="inline-flex rounded-lg border px-6 py-3 text-sm font-medium hover:bg-muted">Contact Us</Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
