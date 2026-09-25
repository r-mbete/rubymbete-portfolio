"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, X, ArrowUpRight, MessageCircle, Mail } from "lucide-react";
import Field from "@/components/ui/Field";
import SectionHead from "@/components/ui/SectionHead";

function ContactDialog({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-ground/70 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 24 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="contact-dialog-title"
              className="tone-peri card w-full max-w-lg relative overflow-hidden bg-ground text-ink"
            >
              <button
                onClick={onClose}
                aria-label="Close"
                className="absolute top-4 right-4 p-2 rounded-full text-ink-muted transition-colors duration-300 hover:text-accent"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="mb-6">
                <h3 id="contact-dialog-title" className="display text-3xl mb-2">
                  Send me a message
                </h3>
                <p className="text-sm text-ink-muted">
                  I&apos;ll get back to you as soon as possible!
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="label block text-ink-muted mb-2">
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
                  <label className="label block text-ink-muted mb-2">
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
                  <label className="label block text-ink-muted mb-2">
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
                {error && <p className="text-sm font-medium text-accent">{error}</p>}
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
                      <div className="w-4 h-4 border-2 border-current/30 border-t-current rounded-full animate-spin" />
                      Sending...
                    </>
                  )}
                  {status === "sent" && (
                    <>
                      <Mail className="w-4 h-4" />
                      Message sent
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
    <Field id="contact" tone="plum" innerClassName="section-container">
      <SectionHead ordinal="05" label="Get In Touch" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="grid gap-12 md:grid-cols-4 md:gap-0"
      >
        <h2 className="display display-2 md:col-span-3 md:pr-12">
          I&apos;d love to <span className="display-em">hear from you.</span>
        </h2>

        <div className="flex flex-col justify-end gap-3">
          <button
            onClick={() => setIsDialogOpen(true)}
            className="btn-primary justify-center"
          >
            <MessageCircle className="w-4 h-4" />
            Send me a message
          </button>
          <a
            href="https://github.com/r-mbete"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline justify-between"
          >
            GitHub
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/ruby-mbete-278072270/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline justify-between"
          >
            LinkedIn
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </motion.div>

      <ContactDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </Field>
  );
}
