import { useState } from "react";
import { company, services } from "../data/siteContent";
import { createBookingRequest } from "../lib/leadStore";

const initialForm = {
  name: "",
  phone: "",
  location: "",
  vehicle: "",
  service: "",
  date: "",
  notes: "",
};

export default function Booking() {
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
      await createBookingRequest(form);
      setForm(initialForm);
      setSubmitSuccess("Booking request sent. We will contact you shortly to confirm availability.");
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Unable to send your booking request right now.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <aside className="glass-panel h-fit p-8">
          <p className="section-eyebrow">Booking</p>
          <h1 className="text-4xl font-semibold text-white">Request mobile service availability.</h1>
          <p className="mt-4 text-sm leading-7 text-slate-400">
            Share your service, vehicle, and location details. This form is structured to feel more credible and conversion-ready than the original placeholder booking page.
          </p>
          <div className="mt-8 space-y-4 text-sm text-slate-300">
            <p>Call us: {company.phoneDisplay}</p>
            <p>Email: {company.email}</p>
            <p>Hours: {company.hours}</p>
          </div>
          <div className="mt-8 rounded-[24px] border border-amber-300/20 bg-amber-400/10 p-5 text-sm leading-7 text-slate-200">
            Most installation requests can be confirmed with a short follow-up after reviewing vehicle compatibility and location access.
          </div>
        </aside>

        <form onSubmit={handleSubmit} className="glass-panel space-y-6 p-8">
          <div className="grid gap-6 md:grid-cols-2">
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
              <label className="mb-2 block text-sm font-medium text-slate-300" htmlFor="phone">
            Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300" htmlFor="vehicle">
            Vehicle Model
              </label>
              <input
                type="text"
                id="vehicle"
                name="vehicle"
                value={form.vehicle}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300" htmlFor="location">
                Service Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={form.location}
                onChange={handleChange}
                required
                placeholder="Toronto, North York, Mississauga..."
                className="form-input"
              />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300" htmlFor="service">
            Service Type
              </label>
              <select
                id="service"
                name="service"
                value={form.service}
                onChange={handleChange}
                required
                className="form-input"
              >
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service.slug} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300" htmlFor="date">
            Preferred Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300" htmlFor="notes">
              Notes
            </label>
            <textarea
              id="notes"
              name="notes"
              rows="5"
              value={form.notes}
              onChange={handleChange}
              placeholder="Vehicle year/model, parking details, service questions, preferred time window..."
              className="form-input min-h-32"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-full bg-amber-400 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
          >
            {isSubmitting ? "Sending booking request..." : "Submit booking request"}
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
      </div>
    </div>
  );
}
