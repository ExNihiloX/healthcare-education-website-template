'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/motion/variants';

const accreditations = [
  {
    name: 'Ghana Tertiary Education Commission (GTEC)',
    logo: '/images/logos/gtec.png',
    description: 'National accrediting body ensuring quality standards in tertiary education across Ghana. Baldwin is fully accredited by GTEC for all its degree programmes.',
  },
  {
    name: 'University of Cape Coast (UCC)',
    logo: '/images/logos/ucc.png',
    description: 'One of Ghana\'s leading public universities, serving as mentoring and degree-awarding institution for Baldwin\'s undergraduate programmes.',
  },
  {
    name: 'Xavier University School of Medicine (XUSOM)',
    logo: '/images/logos/xusom.png',
    description: 'International academic partner for the Baldwin Medical School MB ChB programme, bringing global medical education standards.',
  },
  {
    name: 'Council for Technical and Vocational Education and Training (CTVET)',
    logo: '/images/logos/ctvet.png',
    description: 'Accrediting body for Higher National Diploma (HND) and technical programmes including Dispensing Technology and Medical Laboratory Science.',
  },
  {
    name: 'National Accreditation Board (NAB)',
    logo: '/images/logos/nab.png',
    description: 'Ghana\'s statutory body responsible for accrediting academic and professional institutions and programmes.',
  },
  {
    name: 'National Board for Professional and Technician Examinations (NABPTEX)',
    logo: '/images/logos/nabptex.png',
    description: 'Awards HND certificates for professional and technician programmes. Baldwin\'s HND graduates receive NABPTEX-certified qualifications.',
  },
];

export default function AccreditationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 text-white md:py-28">
        <Image src="/images/slides/10.jpg" alt="Baldwin University College" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950/90 via-primary-900/85 to-primary-800/80" />
        <motion.div className="container relative" variants={staggerContainer} initial="hidden" animate="show">
          <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-widest text-primary-200">About</motion.p>
          <motion.h1 variants={fadeInUp} className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">Accreditations &amp; Affiliations</motion.h1>
          <motion.p variants={fadeInUp} className="mt-6 max-w-2xl text-lg text-primary-100/90">
            Baldwin University College is recognised by Ghana&rsquo;s leading educational and professional bodies.
          </motion.p>
        </motion.div>
      </section>

      {/* Accreditations Grid */}
      <section className="py-20 md:py-28">
        <motion.div className="container" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }}>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {accreditations.map((acc) => (
              <motion.div key={acc.name} variants={fadeInUp} className="flex flex-col items-center rounded-xl border bg-card p-8 text-center">
                <div className="relative h-24 w-24">
                  <Image src={acc.logo} alt={acc.name} fill className="object-contain" />
                </div>
                <h3 className="mt-6 font-semibold">{acc.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{acc.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-950 py-16 text-white">
        <div className="container text-center">
          <h2 className="text-2xl font-bold md:text-3xl">Explore Our Programmes</h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-100/80">All programmes are accredited and recognised nationally and internationally.</p>
          <Link href="/programmes" className="mt-8 inline-flex rounded-lg bg-white px-8 py-3 text-sm font-semibold text-primary-900 hover:bg-primary-50">View Programmes</Link>
        </div>
      </section>
    </>
  );
}
