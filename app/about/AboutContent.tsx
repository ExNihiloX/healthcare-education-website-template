'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '@/lib/motion/variants';
import { siteConfig } from '@/data/content';
import { CheckCircle, Award, BookOpen, Target, Eye } from 'lucide-react';

export function AboutContent() {
  return (
    <>
      {/* Hero with background image */}
      <section className="relative overflow-hidden py-20 text-white md:py-28">
        <Image
          src="/images/slides/2.jpg"
          alt="Baldwin University College campus"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950/90 via-primary-900/85 to-primary-800/80" />
        <motion.div
          className="container relative"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          <motion.p
            variants={fadeInUp}
            className="text-sm font-semibold uppercase tracking-widest text-primary-200"
          >
            About Us
          </motion.p>
          <motion.h1
            variants={fadeInUp}
            className="mt-3 text-4xl font-bold tracking-tight md:text-5xl"
          >
            About Baldwin University College
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="mt-6 max-w-2xl text-lg text-primary-100/90"
          >
            An independent, comprehensive institution providing a value-centred
            educational experience in Accra, Ghana.
          </motion.p>
        </motion.div>
      </section>

      {/* History */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
            >
              <motion.div variants={fadeInLeft}>
                <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                  Our History
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                  Founded on a Vision of Excellence
                </h2>
              </motion.div>
              <motion.div variants={fadeInLeft} className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Baldwin University College was founded by Dr. Akwasi Achampong, a
                  trained medical professional specialising in Internal Medicine. After
                  obtaining his Pharmacy degree and then a Medical degree from NYCOM and
                  Long Island Universities in the USA, Dr. Achampong served as Medical
                  Director of Elmont Medical, PC, Adjunct Professor at NYCOM, and
                  Clinical Associate Professor at Molloy College and New York University.
                </p>
                <p>
                  Co-founder Dr. Afia Achampong, also a trained medical professional
                  practising at Elmont Medical, PC, obtained her Nursing degree before
                  pursuing Medicine from UHSA and New York Universities. Together, they
                  established the college to transfer the knowledge and skills acquired
                  from their extensive experience to the youth of Ghana willing to learn
                  the Sciences.
                </p>
              </motion.div>
            </motion.div>

            {/* Right: Campus images + Mission/Vision */}
            <motion.div
              className="space-y-6"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
            >
              {/* Campus gallery images */}
              <motion.div variants={fadeInRight} className="grid grid-cols-2 gap-3">
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src="/images/gallery/100.jpg"
                    alt="Baldwin campus"
                    width={300}
                    height={200}
                    className="h-40 w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src="/images/gallery/101.jpg"
                    alt="Baldwin students"
                    width={300}
                    height={200}
                    className="h-40 w-full object-cover"
                  />
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="rounded-xl border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Target className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">Our Mission</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Baldwin University College is an independent, comprehensive institution
                  which provides a value-centred educational experience that enhances
                  intellectual, ethical, spiritual and social development for students.
                  Students will acquire the knowledge and skills necessary to meet the
                  challenges of modern life. Undergraduate programmes, based on a strong
                  liberal arts and science core curriculum, offer choices in professional
                  and career preparation.
                </p>
              </motion.div>

              <motion.div variants={fadeInRight} className="rounded-xl border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Eye className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">Our Vision</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Baldwin University College aspires to become the Preferred Institution
                  that trains the minds that make important decisions in shaping the world.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted/30 py-20 md:py-28">
        <motion.div
          className="container"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={fadeInUp} className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              What Sets Baldwin Apart
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Value-Centred Education',
                desc: 'Grounded in academic excellence, ideals of truth, and respect for the worth and dignity of every student.',
              },
              {
                title: 'Faculty Excellence',
                desc: 'Noted scholars possessing extensive knowledge and enthusiasm, accessible to address individual student needs.',
              },
              {
                title: 'Critical Thinking',
                desc: 'Faculty encourages students to search for truth through critical and analytical thinking.',
              },
              {
                title: 'Career Preparation',
                desc: 'Strong liberal arts and science core curriculum with choices in professional and career preparation.',
              },
              {
                title: 'Holistic Development',
                desc: 'Enhancing intellectual, ethical, spiritual and social development for every student.',
              },
              {
                title: 'Global Readiness',
                desc: 'Preparing students to live and work in the global world of today with a sense of social responsibility.',
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className="rounded-xl border bg-card p-6"
              >
                <CheckCircle className="h-5 w-5 text-primary" />
                <h3 className="mt-3 font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Campus Gallery Strip */}
      <section className="py-20 md:py-28">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-center text-3xl font-bold tracking-tight md:text-4xl">
              Campus Life
            </motion.h2>
            <motion.div variants={fadeInUp} className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
              {['/images/gallery/119.jpg', '/images/gallery/120.jpg', '/images/gallery/121.jpg', '/images/gallery/122.jpg', '/images/gallery/123.jpg', '/images/gallery/124.jpg', '/images/gallery/125.jpg', '/images/gallery/126.jpg'].map((src, i) => (
                <div key={src} className="overflow-hidden rounded-xl">
                  <Image
                    src={src}
                    alt={`Baldwin campus life ${i + 1}`}
                    width={300}
                    height={200}
                    className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="bg-muted/30 py-20 md:py-28">
        <motion.div
          className="container"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={fadeInUp} className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Accreditations &amp; Affiliations
            </h2>
            <p className="mt-4 text-muted-foreground">
              Baldwin University College is recognised and accredited by leading educational bodies.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              {
                name: 'Ghana Tertiary Education Commission (GTEC)',
                desc: 'National accrediting body for tertiary institutions in Ghana.',
                logo: '/images/logos/gtec.png',
              },
              {
                name: 'University of Cape Coast (UCC)',
                desc: 'Mentoring and degree-awarding institution for undergraduate programmes.',
                logo: '/images/logos/ucc.png',
              },
              {
                name: 'Xavier University School of Medicine (XUSOM)',
                desc: 'Academic partner for the Baldwin Medical School MB ChB programme.',
                logo: '/images/logos/xusom.png',
              },
              {
                name: 'Council for Technical and Vocational Education and Training (CTVET)',
                desc: 'Accrediting body for HND and technical programmes.',
                logo: '/images/logos/ctvet.png',
              },
            ].map((acc) => (
              <motion.div
                key={acc.name}
                variants={fadeInUp}
                className="flex gap-4 rounded-xl border bg-card p-6"
              >
                <div className="shrink-0">
                  <Image
                    src={acc.logo}
                    alt={acc.name}
                    width={56}
                    height={56}
                    className="h-14 w-14 rounded-lg object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{acc.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{acc.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-16 text-white">
        <Image
          src="/images/slides/7.jpg"
          alt="Baldwin University students"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 to-primary-950/90" />
        <div className="container relative text-center">
          <h2 className="text-2xl font-bold md:text-3xl">
            Ready to Begin Your Journey?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-100/80">
            Join a community of scholars dedicated to academic excellence and personal growth.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/admissions"
              className="inline-flex rounded-lg bg-white px-8 py-3 text-sm font-semibold text-primary-900 hover:bg-primary-50"
            >
              View Admissions
            </Link>
            <Link
              href="/programmes"
              className="inline-flex rounded-lg border-2 border-white/30 px-8 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Explore Programmes
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
