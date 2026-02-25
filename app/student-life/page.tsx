'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/motion/variants';
import { BookOpen, Users, Brain, Briefcase, Clock, Heart } from 'lucide-react';

export default function StudentLifePage() {
  return (
    <>
      {/* Hero with campus image */}
      <section className="relative overflow-hidden py-20 text-white md:py-28">
        <Image src="/images/gallery/1.jpg" alt="Baldwin University campus life" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950/90 via-primary-900/85 to-primary-800/80" />
        <motion.div className="container relative" variants={staggerContainer} initial="hidden" animate="show">
          <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-widest text-primary-200">Campus</motion.p>
          <motion.h1 variants={fadeInUp} className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">The Baldwin Experience</motion.h1>
          <motion.p variants={fadeInUp} className="mt-6 max-w-2xl text-lg text-primary-100/90">
            A rich, multidimensional educational experience in an academically challenging environment, with
            personalised attention from dedicated faculty.
          </motion.p>
        </motion.div>
      </section>

      {/* Campus Gallery Preview */}
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
            {[1, 2, 3, 4, 5, 6, 7, 38].map((n) => (
              <div key={n} className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image src={`/images/gallery/${n}.jpg`} alt="Baldwin campus life" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Resources */}
      <section className="py-20 md:py-28">
        <motion.div className="container" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <motion.div variants={fadeInUp} className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Student Resources</h2>
            <p className="mt-4 text-muted-foreground">Everything you need to succeed at Baldwin.</p>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: BookOpen, title: 'The Baldwin Library', desc: 'Access 7,000+ health/biomedical journals through HINARI, online databases, reserve collections, and interlibrary loans. Open Monday–Friday 9am–8pm, Saturday 9am–2pm.', href: '/student-life/library' },
              { icon: Brain, title: 'Learning Center', desc: 'Tutorial activities, Quality Study Circles, diagnostic testing, and personalised study programmes. Teaching Assistants provide one-on-one course support.', href: '/student-life/learning-center' },
              { icon: Users, title: 'Faculty Mentoring', desc: 'Every student is assigned a faculty mentor who monitors progress, provides recommendations, tracks attendance, and serves as an advocate.' },
              { icon: Briefcase, title: 'Career Planning', desc: 'Resume writing workshops, job application guidance, coursework selection advice, and entrepreneurship support to prepare you for life after Baldwin.' },
              { icon: Clock, title: 'Study Skills Workshops', desc: 'Note-taking, outlining, key concept identification, memorisation techniques, and time management — all designed to help you excel.' },
              { icon: Heart, title: 'Student Advisors', desc: 'Registration assistance, problem resolution, scheduling guidance, and conflict resolution support throughout your time at Baldwin.' },
            ].map((item) => (
              <motion.div key={item.title} variants={fadeInUp}>
                {item.href ? (
                  <Link href={item.href} className="group block h-full rounded-xl border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg">
                    <item.icon className="h-6 w-6 text-primary" />
                    <h3 className="mt-3 font-semibold group-hover:text-primary">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                  </Link>
                ) : (
                  <div className="h-full rounded-xl border bg-card p-6">
                    <item.icon className="h-6 w-6 text-primary" />
                    <h3 className="mt-3 font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* More Gallery */}
      <section className="bg-muted/30 py-20 md:py-28">
        <motion.div className="container" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <motion.div variants={fadeInUp} className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Campus Gallery</h2>
          </motion.div>
          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {[39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68].map((n) => (
              <motion.div key={n} variants={fadeInUp} className="relative aspect-square overflow-hidden rounded-xl">
                <Image src={`/images/gallery/${n}.jpg`} alt="Baldwin University campus" fill className="object-cover transition-transform hover:scale-105" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* More Gallery - continued */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {[69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100].map((n) => (
              <div key={n} className="relative aspect-square overflow-hidden rounded-xl">
                <Image src={`/images/gallery/${n}.jpg`} alt="Baldwin University campus" fill className="object-cover transition-transform hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-16 text-white">
        <Image src="/images/slides/8.jpg" alt="Baldwin University campus" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 to-primary-950/90" />
        <div className="container relative text-center">
          <h2 className="text-2xl font-bold md:text-3xl">Experience Baldwin for Yourself</h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-100/80">Visit our campus in Osu, Accra and see what makes Baldwin special.</p>
          <Link href="/contact" className="mt-8 inline-flex rounded-lg bg-white px-8 py-3 text-sm font-semibold text-primary-900 hover:bg-primary-50">Schedule a Visit</Link>
        </div>
      </section>
    </>
  );
}
