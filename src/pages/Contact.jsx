import { useState } from "react";
import { company, serviceAreas } from "../data/siteContent";
import { createContactMessage } from "../lib/leadStore";

const initialForm = {
  name: "",
  email: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState("");
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    setSubmitSuccess("");

    try {
      await createContactMessage(form);
      setForm(initialForm);
      setSubmitSuccess("Message sent. We will get back to you as soon as possible.");
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Unable to send your message right now.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <aside className="space-y-6">
          <div className="glass-panel p-8">
            <p className="section-eyebrow">Contact</p>
            <h1 className="text-4xl font-semibold text-white">Talk to a real local mobile service team.</h1>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              Use the form for questions, quotes, or scheduling support. For faster booking, phone calls still convert best for high-intent local service businesses.
            </p>
            <div className="mt-6 space-y-3 text-sm text-slate-300">
              <p>{company.phoneDisplay}</p>
              <p>{company.email}</p>
              <p>{company.hours}</p>
              <p>{company.address}</p>
            </div>
          </div>

          <div className="glass-panel p-8">
            <h2 className="text-xl font-semibold text-white">Primary service areas</h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {serviceAreas.map((area) => (
                <span key={area} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </aside>

        <div className="space-y-8">
          <form onSubmit={handleSubmit} className="glass-panel space-y-6 p-8">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300" htmlFor="name">
            Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300" htmlFor="email">
            Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300" htmlFor="message">
            Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                required
                className="form-input min-h-32"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-full bg-amber-400 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
            >
              {isSubmitting ? "Sending message..." : "Send message"}
            </button>

            {submitSuccess ? (
              <p className="rounded-2xl border border-emerald-400/25 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
                {submitSuccess}
              </p>
            ) : null}

            {submitError ? (
              <p className="rounded-2xl border border-rose-400/25 bg-rose-500/10 px-4 py-3 text-sm text-rose-200">
                {submitError}
              </p>
            ) : null}
          </form>

          <div className="overflow-hidden rounded-[30px] border border-white/10">
            <iframe
              title="Toronto service area map"
              src="https://www.google.com/maps?q=Toronto%20Ontario&output=embed"
              className="h-[360px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
