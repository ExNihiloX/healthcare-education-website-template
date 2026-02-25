'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '@/lib/motion/variants';
import { siteConfig } from '@/data/content';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function ContactContent() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission will be connected to a backend later
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 text-white md:py-28">
        <Image
          src="/images/slides/12.jpg"
          alt="Baldwin University College campus"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950/90 via-primary-900/85 to-primary-800/80" />
        <motion.div
          className="relative container"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          <motion.p
            variants={fadeInUp}
            className="text-sm font-semibold uppercase tracking-widest text-primary-200"
          >
            Contact
          </motion.p>
          <motion.h1
            variants={fadeInUp}
            className="mt-3 text-4xl font-bold tracking-tight md:text-5xl"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="mt-6 max-w-2xl text-lg text-primary-100/90"
          >
            Have questions about admissions, programmes, or campus life? We would
            love to hear from you.
          </motion.p>
        </motion.div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact Info */}
            <motion.div
              className="lg:col-span-2"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeInLeft} className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold">Contact Information</h2>
                  <p className="mt-2 text-muted-foreground">
                    Reach out to us through any of the channels below.
                  </p>
                  <div className="mt-4 overflow-hidden rounded-xl">
                    <Image src="/images/gallery/106.jpg" alt="Baldwin University campus building" width={500} height={300} className="h-48 w-full object-cover" />
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="shrink-0 rounded-lg bg-primary/10 p-3">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Campus Address</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {siteConfig.contact.address.street}
                        <br />
                        {siteConfig.contact.address.city}, {siteConfig.contact.address.country}
                        <br />
                        {siteConfig.contact.address.poBox}
                        <br />
                        Digital Address: {siteConfig.contact.address.digitalAddress}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="shrink-0 rounded-lg bg-primary/10 p-3">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-primary">
                          {siteConfig.contact.phone}
                        </a>
                        <br />
                        <a href={`tel:${siteConfig.contact.secondaryPhone}`} className="hover:text-primary">
                          {siteConfig.contact.secondaryPhone}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="shrink-0 rounded-lg bg-primary/10 p-3">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-primary">
                          {siteConfig.contact.email}
                        </a>
                        <br />
                        <a href={`mailto:${siteConfig.contact.registrarEmail}`} className="hover:text-primary">
                          {siteConfig.contact.registrarEmail}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="shrink-0 rounded-lg bg-primary/10 p-3">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Office Hours</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {siteConfig.hours.weekday}
                        <br />
                        {siteConfig.hours.saturday}
                        <br />
                        {siteConfig.hours.sunday}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="lg:col-span-3"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeInRight}>
                <div className="rounded-xl border bg-card p-6 md:p-8">
                  <h2 className="text-xl font-bold">Send Us a Message</h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Fill out the form below and we will get back to you within 1-2 business days.
                  </p>

                  {submitted ? (
                    <div className="mt-8 rounded-lg bg-primary/10 p-6 text-center">
                      <h3 className="text-lg font-semibold text-primary">
                        Thank You!
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Your message has been received. We will get back to you shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium">
                            Full Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            required
                            value={formState.name}
                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                            className="mt-1.5 w-full rounded-lg border bg-background px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium">
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="email"
                            required
                            value={formState.email}
                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                            className="mt-1.5 w-full rounded-lg border bg-background px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                            placeholder="you@example.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium">
                          Subject
                        </label>
                        <select
                          id="subject"
                          required
                          value={formState.subject}
                          onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                          className="mt-1.5 w-full rounded-lg border bg-background px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        >
                          <option value="">Select a subject</option>
                          <option value="admissions">Admissions Enquiry</option>
                          <option value="programmes">Programme Information</option>
                          <option value="financial-aid">Financial Aid</option>
                          <option value="campus-visit">Campus Visit</option>
                          <option value="general">General Enquiry</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium">
                          Message
                        </label>
                        <textarea
                          id="message"
                          required
                          rows={5}
                          value={formState.message}
                          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                          className="mt-1.5 w-full rounded-lg border bg-background px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                          placeholder="How can we help you?"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary/90 sm:w-auto"
                      >
                        Send Message
                      </button>
                    </form>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
