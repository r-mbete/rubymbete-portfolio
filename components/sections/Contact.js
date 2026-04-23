"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  X,
  ExternalLink,
  MessageCircle,
  Mail,
  Github,
  Linkedin,
} from "lucide-react";

function ContactDialog({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setError("");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();

      if (result.success) {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => {
          setStatus("idle");
          onClose();
        }, 2000);
      } else {
        setError("Something went wrong. Please try again!");
        setStatus("idle");
      }
    } catch (err) {
      setError("Something went wrong. Please try again!");
      setStatus("idle");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
          />

          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 24 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
          >
            <div className="card w-full max-w-lg relative overflow-hidden">
              {/* Top gradient shimmer */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-primary/50 dark:via-purple-light/50 to-transparent" />

              {/* Close */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-lavender-100/50 dark:bg-dark-border/50 hover:bg-lavender-200 dark:hover:bg-dark-border text-gray-500 dark:text-lavender-300 transition-all duration-300"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-lavender-100 mb-1">
                  Send me a message
                </h3>
                <p className="text-sm text-gray-500 dark:text-lavender-300">
                  I&apos;ll get back to you as soon as possible!
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-lavender-200 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Jane Doe"
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-lavender-200 mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="jane@example.com"
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-lavender-200 mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Tell me about your project or just say hi!"
                    className="form-input resize-none"
                  />
                </div>

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <motion.button
                  type="submit"
                  disabled={status === "sending" || status === "sent"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "idle" && (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                  {status === "sending" && (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  )}
                  {status === "sent" && (
                    <>
                      <Mail className="w-4 h-4" />
                      Message Sent! 🎉
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default function Contact() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <section id="contact">
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-purple-primary dark:bg-purple-light" />
              <p className="section-subtitle mb-0">Get In Touch</p>
              <div className="w-8 h-0.5 bg-purple-primary dark:bg-purple-light" />
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-lavender-100 leading-tight mb-4">
              I&apos;d love to
              <span className="text-purple-primary dark:text-purple-light">
                {" "}
                hear from you!
              </span>
            </h2>

            <motion.button
              onClick={() => setIsDialogOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary mx-auto"
            >
              <MessageCircle className="w-5 h-5" />
              Send me a message
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8"
          >
            {/* GitHub */}
            <a
              href="https://github.com/r-mbete"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group flex items-center gap-2.5
                px-4 py-2.5 rounded-full
                border border-lavender-200/60 dark:border-dark-border
                bg-lavender-100/40 dark:bg-dark-border/40
                text-gray-500 dark:text-lavender-300
                hover:text-purple-primary dark:hover:text-purple-light
                hover:border-purple-primary/30 dark:hover:border-purple-light/30
                hover:bg-purple-primary/5 dark:hover:bg-purple-light/5
                transition-all duration-300
                text-sm font-medium
              "
            >
              <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
              github.com/r-mbete
            </a>

            {/* Dot divider — hidden on mobile */}
            <span className="hidden sm:block w-1 h-1 rounded-full bg-gray-300 dark:bg-dark-border" />

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/ruby-mbete-278072270/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group flex items-center gap-2.5
                px-4 py-2.5 rounded-full
                border border-lavender-200/60 dark:border-dark-border
                bg-lavender-100/40 dark:bg-dark-border/40
                text-gray-500 dark:text-lavender-300
                hover:text-purple-primary dark:hover:text-purple-light
                hover:border-purple-primary/30 dark:hover:border-purple-light/30
                hover:bg-purple-primary/5 dark:hover:bg-purple-light/5
                transition-all duration-300
                text-sm font-medium
              "
            >
              <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
              LinkedIn
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
