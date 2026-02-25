'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '@/lib/motion/variants';

export default function LeadershipPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 text-white md:py-28">
        <Image src="/images/slides/9.jpg" alt="Baldwin University College" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950/90 via-primary-900/85 to-primary-800/80" />
        <motion.div className="container relative" variants={staggerContainer} initial="hidden" animate="show">
          <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-widest text-primary-200">About</motion.p>
          <motion.h1 variants={fadeInUp} className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">Our Leadership</motion.h1>
          <motion.p variants={fadeInUp} className="mt-6 max-w-2xl text-lg text-primary-100/90">
            Meet the leaders guiding Baldwin University College towards academic excellence.
          </motion.p>
        </motion.div>
      </section>

      {/* President */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }}>
              <motion.div variants={fadeInLeft} className="overflow-hidden rounded-xl">
                <Image
                  src="/images/faculty/president.jpg"
                  alt="Prof. James E. Kutz, PhD — President"
                  width={600}
                  height={400}
                  className="w-full object-cover"
                />
              </motion.div>
            </motion.div>
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }}>
              <motion.div variants={fadeInRight}>
                <p className="text-sm font-semibold uppercase tracking-widest text-primary">President</p>
                <h2 className="mt-2 text-3xl font-bold">Prof. James E. Kutz, PhD</h2>
                <p className="mt-1 text-sm text-muted-foreground">PhD Public Administration &amp; International Development; MBA; MPA; MEd; BSc.</p>
                <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    &ldquo;It is a great honour being named President of Baldwin University College.
                    This will be my sixth college or university at which I have been raised to this
                    position. I look forward to meeting you all and participating in making Baldwin
                    a renowned institution that you will be proud of and remember throughout your career.&rdquo;
                  </p>
                  <p>
                    Prof. Kutz is a seasoned executive management professional with extensive experience
                    leading business operations within corporate, governmental and academic environments.
                    He has designed nationwide curricula from K through Bachelor&rsquo;s degree, taught at
                    all levels of academia, and founded seven institutions. He is the author of more than
                    1,700 technical and academic publications.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="container">
          <motion.div className="mx-auto max-w-2xl text-center" initial="hidden" whileInView="show" viewport={{ once: true }}>
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold tracking-tight md:text-4xl">Our Founders</motion.h2>
          </motion.div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }}>
              <motion.div variants={fadeInUp} className="rounded-xl border bg-card p-6">
                <Image
                  src="/images/faculty/chancellor.jpg"
                  alt="Dr. Akwasi Achampong — Chancellor & Founder"
                  width={400}
                  height={300}
                  className="w-full rounded-lg object-cover"
                />
                <h3 className="mt-4 text-xl font-semibold">Dr. Akwasi Achampong</h3>
                <p className="text-sm text-primary">Chancellor &amp; Founder</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Trained medical professional specialising in Internal Medicine. Medical Director of
                  Elmont Medical, PC (USA), Private Pilot, and CEO of Unique Life Inc. Adjunct Professor
                  at NYCOM, Clinical Associate Professor at Molloy College, NYU, and Hofstra Medical School.
                </p>
              </motion.div>
            </motion.div>
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }}>
              <motion.div variants={fadeInUp} className="rounded-xl border bg-card p-6">
                <div className="flex h-[300px] w-full items-center justify-center rounded-lg bg-primary/5">
                  <span className="text-4xl font-bold text-primary/30">AA</span>
                </div>
                <h3 className="mt-4 text-xl font-semibold">Dr. Afia Achampong</h3>
                <p className="text-sm text-primary">Co-Founder</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Trained medical professional practising at Elmont Medical, PC. Obtained her Nursing degree
                  before pursuing Medicine from UHSA and New York Universities. Owner of RHEMA Real Estate
                  and Inshira School of Health Sciences.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-950 py-16 text-white">
        <div className="container text-center">
          <h2 className="text-2xl font-bold md:text-3xl">Learn More About Baldwin</h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/about" className="inline-flex rounded-lg bg-white px-8 py-3 text-sm font-semibold text-primary-900 hover:bg-primary-50">About Baldwin</Link>
            <Link href="/about/accreditations" className="inline-flex rounded-lg border-2 border-white/30 px-8 py-3 text-sm font-semibold text-white hover:bg-white/10">Accreditations</Link>
          </div>
        </div>
      </section>
    </>
  );
}
