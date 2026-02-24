import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiMapPin,
  FiSend,
} from "react-icons/fi";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { personalInfo } from "../data/portfolio";
import SectionTitle from "./ui/SectionTitle";
import Button from "./ui/Button";
import { fadeUp, slideLeft, slideRight } from "../hooks/useScrollReveal";

/**
 * Contact — form + contact info + social links.
 *
 * Includes basic client-side validation.
 * Email sending is a placeholder — replace with your own
 * backend endpoint, EmailJS, Formspree, etc.
 */
export default function Contact() {
  const { email, location, socialLinks } = personalInfo;

  // ── Form state ──────────────────────────────
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // ── Simple validation ───────────────────────
  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Invalid email address";
    }
    if (!formData.message.trim()) errs.message = "Message is required";
    return errs;
  };

  // ── Handle submit ──────────────────────────
  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      // TODO: Replace with real email sending logic
      // e.g. fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
      console.log("Form submitted:", formData);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    // Clear error for this field on change
    if (errors[e.target.name]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
    }
  };

  // Input field base classes
  const inputBase =
    "w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-dark-200 border border-gray-200 dark:border-dark-300 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all";

  return (
    <section id="contact" className="bg-white dark:bg-dark-100">
      <div className="section-container">
        <SectionTitle title="Get In Touch" subtitle="Contact Me" />

        <div className="grid md:grid-cols-2 gap-12">
          {/* ── Contact Info ──────────────── */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-xl font-heading font-semibold text-gray-900 dark:text-white mb-4">
              Let&apos;s talk about everything!
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Feel free to reach out if you&apos;re looking for a developer,
              have a question, or simply want to connect.
            </p>

            {/* Info items */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-primary-100 dark:bg-primary-900/30 text-primary-500">
                  <FiMail size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                  <a
                    href={`mailto:${email}`}
                    className="font-medium text-gray-900 dark:text-white hover:text-primary-500 transition-colors"
                  >
                    {email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-primary-100 dark:bg-primary-900/30 text-primary-500">
                  <FiMapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                  <p className="font-medium text-gray-900 dark:text-white">{location}</p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              {[
                { icon: <FaGithub />, url: socialLinks.github, label: "GitHub" },
                { icon: <FaLinkedinIn />, url: socialLinks.linkedin, label: "LinkedIn" },
                { icon: <FaTwitter />, url: socialLinks.twitter, label: "Twitter" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="p-3 rounded-xl bg-gray-100 dark:bg-dark-200 text-gray-600 dark:text-gray-400 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 dark:hover:text-white transition-all duration-300 text-lg"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* ── Contact Form ──────────────── */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Name */}
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className={`${inputBase} ${errors.name ? "ring-2 ring-red-400" : ""}`}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className={`${inputBase} ${errors.email ? "ring-2 ring-red-400" : ""}`}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={5}
                  className={`${inputBase} resize-none ${errors.message ? "ring-2 ring-red-400" : ""}`}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-500">{errors.message}</p>
                )}
              </div>

              {/* Submit */}
              <Button type="submit" icon={<FiSend />} className="w-full">
                Send Message
              </Button>

              {/* Success feedback */}
              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-sm text-emerald-600 dark:text-emerald-400 font-medium"
                >
                  ✅ Message sent successfully! I&apos;ll get back to you soon.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
