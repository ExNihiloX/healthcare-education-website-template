'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/motion/variants';
import { CheckCircle, FileText, CreditCard, Mail, GraduationCap, Briefcase, BookOpen } from 'lucide-react';

export function AdmissionsContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 text-white md:py-28">
        <Image
          src="/images/slides/4.jpg"
          alt="Baldwin University Campus"
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
            Admissions
          </motion.p>
          <motion.h1
            variants={fadeInUp}
            className="mt-3 text-4xl font-bold tracking-tight md:text-5xl"
          >
            Join Baldwin University College
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="mt-6 max-w-2xl text-lg text-primary-100/90"
          >
            Everything you need to know about entry requirements, the application
            process, and financial aid opportunities.
          </motion.p>
        </motion.div>
      </section>

      {/* How to Apply */}
      <section className="py-20 md:py-28">
        <motion.div
          className="container"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={fadeInUp} className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              How to Apply
            </h2>
            <p className="mt-4 text-muted-foreground">
              Follow these simple steps to begin your application.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: '01',
                title: 'Purchase Voucher',
                desc: 'Buy an Application Voucher Code for GHS 100.00 by providing your name, email, and phone number.',
                icon: CreditCard,
              },
              {
                step: '02',
                title: 'Make Payment',
                desc: 'Pay via Mobile Money, Debit Card, or Credit Card. Your voucher code will be sent via SMS and email.',
                icon: FileText,
              },
              {
                step: '03',
                title: 'Complete Application',
                desc: 'Use your voucher code to access and fill out the online application form with your details and qualifications.',
                icon: CheckCircle,
              },
              {
                step: '04',
                title: 'Await Decision',
                desc: 'Your application will be reviewed. Successful applicants will be contacted for next steps.',
                icon: Mail,
              },
            ].map((item) => (
              <motion.div
                key={item.step}
                variants={fadeInUp}
                className="relative rounded-xl border bg-card p-6"
              >
                <span className="text-3xl font-bold text-primary/20">{item.step}</span>
                <item.icon className="mt-2 h-6 w-6 text-primary" />
                <h3 className="mt-3 font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            variants={fadeInUp}
            className="mt-8 text-center text-sm text-muted-foreground"
          >
            International applicants: Email{' '}
            <a href="mailto:enquiries@baldwin.edu.gh" className="font-medium text-primary hover:underline">
              enquiries@baldwin.edu.gh
            </a>{' '}
            for voucher code purchase directions.
          </motion.p>
        </motion.div>
      </section>

      {/* Entry Requirements */}
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
              Entry Requirements
            </h2>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-12 overflow-hidden rounded-xl">
            <Image src="/images/slides/8.jpg" alt="Baldwin University students studying" width={1200} height={400} className="h-64 w-full object-cover" />
          </motion.div>

          <div className="mt-12 space-y-8">
            {/* General */}
            <motion.div variants={fadeInUp} className="rounded-xl border bg-card p-6 md:p-8">
              <div className="flex items-center gap-3">
                <GraduationCap className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">General Requirements</h3>
              </div>
              <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                <p>
                  <strong className="text-foreground">SSSCE Applicants:</strong> Passes in Core English,
                  Core Mathematics and Integrated Science/Social Studies plus any three (3) elective passes.
                </p>
                <p>
                  <strong className="text-foreground">WASSCE Applicants:</strong> Credit passes in Core English,
                  Core Mathematics and Integrated Science/Social Studies plus any three (3) elective credit passes.
                </p>
              </div>
            </motion.div>

            {/* Health Sciences */}
            <motion.div variants={fadeInUp} className="rounded-xl border bg-card p-6 md:p-8">
              <div className="flex items-center gap-3">
                <BookOpen className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Health &amp; Allied Sciences</h3>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">Medical Laboratory Science, Dispensing Technology</p>
              <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                <p>
                  Minimum 3 credits in Core subjects plus 3 credits in Elective subjects: Chemistry, Biology,
                  Mathematics or Physics (not more than two sittings).
                </p>
                <p>
                  <strong className="text-foreground">Mature Applicants:</strong> At least 25 years old,
                  holder of relevant certificates, minimum 2 years working experience in Medical Laboratory,
                  must pass Entrance Examination.
                </p>
              </div>
            </motion.div>

            {/* IT */}
            <motion.div variants={fadeInUp} className="rounded-xl border bg-card p-6 md:p-8">
              <div className="flex items-center gap-3">
                <Briefcase className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Information Technology &amp; Software Engineering</h3>
              </div>
              <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                <p>
                  Passes in Core English, Core Mathematics and Integrated Science/Social Studies plus any
                  three elective passes (SSSCE/WASSCE).
                </p>
                <p>
                  <strong className="text-foreground">HND Holders:</strong> Minimum Second Class Lower Division
                  in IT from an accredited institution. Considered for admission at Level 200.
                </p>
                <p>
                  <strong className="text-foreground">Professional Qualifications:</strong> City &amp; Guilds,
                  CompTIA A+, CompTIA Network+, MCSE holders considered for Level 100 with 5 credit passes
                  including Mathematics and English.
                </p>
              </div>
            </motion.div>

            {/* International */}
            <motion.div variants={fadeInUp} className="rounded-xl border bg-card p-6 md:p-8">
              <div className="flex items-center gap-3">
                <GraduationCap className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">International Applicants</h3>
              </div>
              <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                <p>
                  <strong className="text-foreground">WASSCE/SSSCE from West Africa:</strong> At least
                  six credits including English, Mathematics, Integrated Science.
                </p>
                <p>
                  <strong className="text-foreground">IGCSE/GCE Cambridge:</strong> Five passes including
                  English and Mathematics at O Level, three relevant subjects at A Level.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Financial Aid */}
      <section className="py-20 md:py-28">
        <motion.div
          className="container"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={fadeInUp} className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Financial Aid
            </h2>
            <p className="mt-4 text-muted-foreground">
              Baldwin offers several programmes to help students manage their education costs.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Sponsorship Programme',
                desc: 'Apply for sponsorship from individuals, companies, or foundations. Sponsored students maintain contact with their sponsor throughout the term, sending progress reports and final grades.',
              },
              {
                title: 'Work-Study Programme',
                desc: 'Work on campus as part-time staff in positions as they open. Qualified students may become tutors in the Learning Laboratory, earning compensation while studying.',
              },
              {
                title: 'Textbook Rental Programme',
                desc: 'Rent textbooks for the semester and return them in good condition at the end. Significantly reduces textbook costs for students.',
              },
            ].map((aid) => (
              <motion.div
                key={aid.title}
                variants={fadeInUp}
                className="rounded-xl border bg-card p-6"
              >
                <h3 className="font-semibold">{aid.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {aid.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-16 text-white">
        <Image
          src="/images/slides/9.jpg"
          alt="Start Your Application Today"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 to-primary-950/90" />
        <div className="container relative text-center">
          <h2 className="text-2xl font-bold md:text-3xl">
            Start Your Application Today
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-100/80">
            Purchase your application voucher for GHS 100.00 and take the first step.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex rounded-lg bg-white px-8 py-3 text-sm font-semibold text-primary-900 hover:bg-primary-50"
            >
              Contact Admissions
            </Link>
            <Link
              href="/programmes"
              className="inline-flex rounded-lg border-2 border-white/30 px-8 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              View Programmes
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
