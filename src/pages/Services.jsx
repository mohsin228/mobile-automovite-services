import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";
import { company, faqs, services, trustPoints } from "../data/siteContent";

export default function Services() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-4xl text-center">
        <p className="section-eyebrow">Services</p>
        <h1 className="section-title text-center">
          Mobile automotive services that mirror the MOON Works offer stack, with a more premium presentation.
        </h1>
        <p className="section-copy mx-auto text-center">
          Each service is framed around convenience, professional installation, and clear starting prices so the site converts like a serious local business.
        </p>
      </section>

      <section className="mt-14 grid gap-6 lg:grid-cols-2">
        {services.map((service) => (
          <ServiceCard key={service.slug} {...service} />
        ))}
      </section>

      <section className="mt-20 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="glass-panel p-8">
          <p className="section-eyebrow">What makes this different</p>
          <h2 className="text-3xl font-semibold text-white">
            Service messaging built for confidence, not filler.
          </h2>
          <div className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
            {trustPoints.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
          <a
            href={company.phoneHref}
            className="mt-8 inline-flex rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
          >
            Call {company.phoneDisplay}
          </a>
        </div>

        <div className="space-y-4">
          {faqs.map((item) => (
            <article key={item.question} className="glass-panel p-6">
              <h3 className="text-xl font-semibold text-white">{item.question}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-20 rounded-[32px] border border-white/10 bg-white/[0.04] px-6 py-10 text-center sm:px-10">
        <p className="section-eyebrow">Book today</p>
        <h2 className="text-3xl font-semibold text-white">
          Need on-site installation or detailing this week?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400">
          Send your vehicle details and location. We will follow up with availability, service timing, and next steps.
        </p>
        <Link
          to="/booking"
          className="mt-8 inline-flex rounded-full bg-amber-400 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
        >
          Request a booking
        </Link>
      </section>
    </div>
  );
}
