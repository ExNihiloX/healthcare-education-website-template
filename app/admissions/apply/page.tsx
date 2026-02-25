'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/motion/variants';
import { CreditCard, FileText, CheckCircle, Mail, ArrowRight } from 'lucide-react';

export default function ApplyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 text-white md:py-28">
        <Image src="/images/slides/3.jpg" alt="Baldwin University College campus" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950/90 via-primary-900/85 to-primary-800/80" />
        <motion.div className="container relative" variants={staggerContainer} initial="hidden" animate="show">
          <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-widest text-primary-200">Admissions</motion.p>
          <motion.h1 variants={fadeInUp} className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">Apply to Baldwin</motion.h1>
          <motion.p variants={fadeInUp} className="mt-6 max-w-2xl text-lg text-primary-100/90">
            Follow the steps below to complete your application. The entire process can be done online.
          </motion.p>
        </motion.div>
      </section>

      {/* Steps */}
      <section className="py-20 md:py-28">
        <motion.div className="container" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <div className="mx-auto max-w-3xl space-y-8">
            {[
              { step: 1, icon: CreditCard, title: 'Purchase Application Voucher', desc: 'Visit the online application portal and purchase your Application Voucher Code for GHS 100.00. Provide your full name, a valid email address, and phone number. You will be redirected to the payment page.' },
              { step: 2, icon: FileText, title: 'Make Payment', desc: 'Complete payment via Mobile Money, Debit Card, or Credit Card. Your unique voucher code will be sent to you via both SMS and email immediately after payment.' },
              { step: 3, icon: CheckCircle, title: 'Complete the Application Form', desc: 'Use your voucher code to access the online application form. Fill in all required fields including personal information, educational background, and programme of choice. Upload any required documents.' },
              { step: 4, icon: Mail, title: 'Submit and Await Decision', desc: 'Review your application carefully and submit. You will receive a confirmation email. The Admissions Committee will review your application and notify you of their decision.' },
            ].map((item) => (
              <motion.div key={item.step} variants={fadeInUp} className="flex gap-6 rounded-xl border bg-card p-6 md:p-8">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp} className="mt-12 rounded-xl border-2 border-primary/20 bg-primary/5 p-8 text-center">
            <h3 className="text-lg font-semibold">Application Fee: GHS 100.00</h3>
            <p className="mt-2 text-sm text-muted-foreground">Payment methods: Mobile Money, Visa, Mastercard</p>
            <p className="mt-4 text-sm text-muted-foreground">
              <strong>International applicants:</strong> Email{' '}
              <a href="mailto:enquiries@baldwin.edu.gh" className="font-medium text-primary hover:underline">enquiries@baldwin.edu.gh</a>{' '}
              for voucher code purchase directions.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-8 text-center">
            <Link href="/admissions" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
              <ArrowRight className="h-4 w-4 rotate-180" /> Back to Entry Requirements
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
