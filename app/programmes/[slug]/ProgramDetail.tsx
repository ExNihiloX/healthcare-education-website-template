'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '@/lib/motion/variants';
import type { Program } from '@/data/content';
import { Clock, Award, BookOpen, ArrowLeft, CheckCircle } from 'lucide-react';

export function ProgramDetail({ program }: { program: Program }) {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 text-white md:py-28">
        <Image src={program.image} alt={program.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950/90 via-primary-900/85 to-primary-800/80" />
        <motion.div
          className="container relative"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={fadeInUp}>
            <Link
              href="/programmes"
              className="inline-flex items-center gap-1.5 text-sm text-primary-200 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              All Programmes
            </Link>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-6 flex flex-wrap gap-3">
            <span className="inline-flex rounded-full bg-white/20 px-3 py-1 text-sm font-medium">
              {program.degree}
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm text-primary-200">
              <Clock className="h-4 w-4" />
              {program.duration}
            </span>
            {program.accreditedBy && (
              <span className="inline-flex items-center gap-1.5 text-sm text-primary-200">
                <Award className="h-4 w-4" />
                {program.accreditedBy}
              </span>
            )}
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="mt-4 text-3xl font-bold tracking-tight md:text-5xl"
          >
            {program.title}
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="mt-2 text-primary-200"
          >
            {program.department}
          </motion.p>
        </motion.div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main content */}
            <motion.div
              className="lg:col-span-2"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeInLeft}>
                <div className="mb-8 overflow-hidden rounded-xl">
                  <Image src={program.image} alt={`${program.title} at Baldwin University`} width={800} height={400} className="h-64 w-full object-cover" />
                </div>
                <h2 className="text-2xl font-bold">Programme Overview</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {program.fullDescription}
                </p>
              </motion.div>

              <motion.div variants={fadeInLeft} className="mt-12">
                <h2 className="text-2xl font-bold">Career Outcomes</h2>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {program.outcomes.map((outcome) => (
                    <div
                      key={outcome}
                      className="flex items-start gap-3 rounded-lg border bg-card p-4"
                    >
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm">{outcome}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <motion.div
                variants={fadeInRight}
                className="sticky top-24 space-y-6"
              >
                <div className="rounded-xl border bg-card p-6">
                  <h3 className="font-semibold">Programme Details</h3>
                  <dl className="mt-4 space-y-4 text-sm">
                    <div>
                      <dt className="text-muted-foreground">Degree</dt>
                      <dd className="mt-1 font-medium">{program.degree}</dd>
                    </div>
                    <div>
                      <dt className="text-muted-foreground">Duration</dt>
                      <dd className="mt-1 font-medium">{program.duration}</dd>
                    </div>
                    <div>
                      <dt className="text-muted-foreground">Format</dt>
                      <dd className="mt-1 font-medium capitalize">{program.format}</dd>
                    </div>
                    <div>
                      <dt className="text-muted-foreground">Department</dt>
                      <dd className="mt-1 font-medium">{program.department}</dd>
                    </div>
                    {program.accreditedBy && (
                      <div>
                        <dt className="text-muted-foreground">Accredited By</dt>
                        <dd className="mt-1 font-medium">{program.accreditedBy}</dd>
                      </div>
                    )}
                  </dl>
                </div>

                <div className="rounded-xl bg-primary/5 p-6">
                  <h3 className="font-semibold text-primary">Apply Now</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Applications are open for the upcoming academic year.
                  </p>
                  <Link
                    href="/admissions"
                    className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary/90"
                  >
                    View Admissions
                  </Link>
                  <Link
                    href="/contact"
                    className="mt-2 inline-flex w-full items-center justify-center rounded-lg border px-6 py-3 text-sm font-medium hover:bg-muted"
                  >
                    Request Information
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
