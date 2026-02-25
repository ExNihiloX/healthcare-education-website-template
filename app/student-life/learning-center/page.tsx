'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/motion/variants';
import { Brain, BookOpen, Users, Monitor, GraduationCap, Clock } from 'lucide-react';

export default function LearningCenterPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 text-white md:py-28">
        <Image src="/images/slides/16.jpg" alt="Baldwin University Learning Center" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950/90 via-primary-900/85 to-primary-800/80" />
        <motion.div className="container relative" variants={staggerContainer} initial="hidden" animate="show">
          <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-widest text-primary-200">Student Life</motion.p>
          <motion.h1 variants={fadeInUp} className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">The Learning Center</motion.h1>
          <motion.p variants={fadeInUp} className="mt-6 max-w-2xl text-lg text-primary-100/90">
            Tutorial activities, Quality Study Circles, and personalised support — all coordinated through the Department of Developmental Studies.
          </motion.p>
        </motion.div>
      </section>

      {/* What We Offer */}
      <section className="py-20 md:py-28">
        <motion.div className="container" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <motion.div variants={fadeInUp} className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">What We Offer</h2>
            <p className="mt-4 text-muted-foreground">
              The Learning Center is where students come to strengthen their academic skills and get personalised support.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Brain, title: 'Diagnostic Testing', desc: 'Academic skills assessment and specific study programmes designed for required proficiencies.' },
              { icon: Users, title: 'A Team Tutoring', desc: 'Teaching Assistants serve as tutors for specific courses or skill deficiencies, providing one-on-one support.' },
              { icon: BookOpen, title: 'Quality Study Circles', desc: 'Student groups formed within academic programmes to enhance collaborative learning and peer support.' },
              { icon: Monitor, title: 'Learning Laboratory', desc: 'Computer learning programmes, concept modules, study guides, and both commercial and in-house developed learning materials.' },
              { icon: GraduationCap, title: 'Study Skills Workshops', desc: 'Note-taking, outlining, key concept identification, memorisation techniques, and time management strategies.' },
              { icon: Clock, title: 'Course Assignment Support', desc: 'Help completing incomplete course assignments, reviewing course content, and preparing for examinations.' },
            ].map((item) => (
              <motion.div key={item.title} variants={fadeInUp} className="rounded-xl border bg-card p-6">
                <item.icon className="h-6 w-6 text-primary" />
                <h3 className="mt-3 font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Developmental Studies */}
      <section className="bg-muted/30 py-20 md:py-28">
        <motion.div className="container" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <motion.div variants={fadeInUp} className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold">Developmental Studies</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              The Learning Center incorporates the Department of Developmental Studies, which offers
              non-credit preparatory courses at registration time. These include Developmental Mathematics,
              English, and Basic Writing Skills — designed to bring all students up to the required
              proficiency level for their chosen programme.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              A Learning Laboratory Fee is charged to all students, which compensates Teaching Assistants
              and covers the Director&rsquo;s salary, ensuring continuous high-quality support.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Campus image */}
      <section className="py-12">
        <div className="container">
          <div className="overflow-hidden rounded-xl">
            <Image src="/images/gallery/107.jpg" alt="Baldwin University students" width={1200} height={400} className="h-64 w-full object-cover" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-16 text-white">
        <Image src="/images/slides/17.jpg" alt="Baldwin University campus" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 to-primary-950/90" />
        <div className="container relative text-center">
          <h2 className="text-2xl font-bold md:text-3xl">Need Academic Support?</h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-100/80">The Learning Center is available to all registered Baldwin students.</p>
          <Link href="/contact" className="mt-8 inline-flex rounded-lg bg-white px-8 py-3 text-sm font-semibold text-primary-900 hover:bg-primary-50">Contact Us</Link>
        </div>
      </section>
    </>
  );
}
