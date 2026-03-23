import { Link } from "react-router-dom";
import { FiArrowRight, FiClock, FiMapPin, FiShield } from "react-icons/fi";
import ServiceCard from "../components/ServiceCard";
import {
  company,
  gallery,
  processSteps,
  serviceAreas,
  services,
  stats,
  testimonials,
  trustPoints,
} from "../data/siteContent";

export default function Home() {
  return (
    <div>
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster={services[0].image}
        >
          <source src={company.heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.24),transparent_28%),linear-gradient(135deg,rgba(2,6,23,0.84),rgba(2,6,23,0.92))]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />

        <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-28">
          <div className="space-y-8 animate-fade-up">
            <span className="inline-flex rounded-full border border-amber-300/25 bg-amber-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-amber-300">
                MOON mobile automotive services
            </span>
            <div className="space-y-6">
              <h1 className="max-w-4xl text-5xl font-semibold leading-tight text-white md:text-7xl">
                Professional vehicle upgrades without the shop visit.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
                {company.intro} We bring installation, tint, and detailing
                expertise directly to your driveway, office lot, or condo garage.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/booking"
                className="rounded-full bg-amber-400 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
              >
                Book a mobile service
              </Link>
              <a
                href={company.phoneHref}
                className="rounded-full border border-white/15 bg-white/5 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Call {company.phoneDisplay}
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="glass-panel flex items-start gap-3 p-4">
                <FiMapPin className="mt-1 text-amber-300" />
                <div>
                  <p className="text-sm font-semibold text-white">We come to you</p>
                  <p className="text-sm text-slate-400">Home, office, or parking structure</p>
                </div>
              </div>
              <div className="glass-panel flex items-start gap-3 p-4">
                <FiClock className="mt-1 text-amber-300" />
                <div>
                  <p className="text-sm font-semibold text-white">Flexible hours</p>
                  <p className="text-sm text-slate-400">{company.hours}</p>
                </div>
              </div>
              <div className="glass-panel flex items-start gap-3 p-4">
                <FiShield className="mt-1 text-amber-300" />
                <div>
                  <p className="text-sm font-semibold text-white">Clean workmanship</p>
                  <p className="text-sm text-slate-400">Built around reliability and finish quality</p>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-fade-up-delayed space-y-5 rounded-[32px] border border-white/10 bg-slate-950/55 p-6 shadow-[0_30px_100px_rgba(2,6,23,0.55)] backdrop-blur-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-amber-300">
              Why drivers switch
            </p>
            <h2 className="text-3xl font-semibold text-white">
              A more professional alternative to chasing local shops.
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {stats.map((item) => (
                <div key={item.label} className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                  <p className="text-3xl font-semibold text-white">{item.value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.label}</p>
                </div>
              ))}
            </div>
            <p className="rounded-[24px] border border-amber-300/20 bg-amber-400/10 px-5 py-4 text-sm leading-7 text-slate-200">
              Same-day and next-available scheduling options depend on service type,
              technician route, and your location.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="section-eyebrow">Our services</p>
            <h2 className="section-title">The core mobile services MOON drivers book most.</h2>
            <p className="section-copy">
              The reference site centers on four high-intent services. This redesign keeps that structure,
              but presents each offering with stronger hierarchy, imagery, and clearer outcomes.
            </p>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-amber-300 transition hover:text-amber-200"
          >
            Explore all services <FiArrowRight />
          </Link>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.slug} {...service} />
          ))}
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {trustPoints.map((point) => (
            <div key={point} className="glass-panel p-5 text-sm leading-7 text-slate-300">
              {point}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 pb-24 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="rounded-[32px] border border-white/10 bg-slate-900/80 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.3)]">
          <p className="section-eyebrow">Watch the difference</p>
          <h2 className="section-title">A cleaner, more premium presentation across video and imagery.</h2>
          <p className="section-copy">
            The original site is simple and text-heavy. This version adds motion, layered gradients,
            and a cinematic media block so the homepage feels more credible the moment it loads.
          </p>
          <div className="mt-8 overflow-hidden rounded-[28px] border border-white/10">
            <iframe
              className="aspect-video w-full"
              src="https://www.youtube.com/embed/9No-FiEInLA?rel=0"
              title="Mobile automotive service showcase"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {gallery.map((item, index) => (
            <article
              key={item.title}
              className={`overflow-hidden rounded-[30px] border border-white/10 bg-white/5 ${
                index === 0 ? "sm:col-span-2" : ""
              }`}
            >
              <div className="relative h-full min-h-[240px]">
                <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="text-xs uppercase tracking-[0.26em] text-amber-300">Featured visual</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{item.title}</h3>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="section-eyebrow">How it works</p>
            <h2 className="section-title">A mobile service flow that feels straightforward and premium.</h2>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <div key={step.title} className="glass-panel p-6">
                <span className="text-sm font-semibold uppercase tracking-[0.26em] text-amber-300">
                  0{index + 1}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="section-eyebrow">Testimonials</p>
            <h2 className="section-title">Drivers remember the finish quality and convenience.</h2>
            <p className="section-copy">
              The goal is the same as the reference site: make trust obvious. The difference here is stronger visual rhythm and more deliberate spacing.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {serviceAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
          <div className="grid gap-5">
            {testimonials.map((item) => (
              <blockquote key={item.name} className="glass-panel p-7">
                <p className="text-lg leading-8 text-slate-100">“{item.quote}”</p>
                <footer className="mt-5 text-sm text-slate-400">
                  <span className="font-semibold text-white">{item.name}</span> · {item.role}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[36px] border border-amber-300/20 bg-[linear-gradient(135deg,rgba(245,158,11,0.16),rgba(15,23,42,0.88))] px-6 py-10 sm:px-10 lg:flex lg:items-center lg:justify-between lg:px-14">
          <div className="max-w-3xl">
            <p className="section-eyebrow text-amber-200">Ready to book</p>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              Book your mobile automotive service and skip the waiting room.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-200">
              Tell us what you need, where your vehicle is parked, and when you want us there.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4 lg:mt-0">
            <Link
              to="/booking"
              className="rounded-full bg-white px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
            >
              Start booking
            </Link>
            <a
              href={company.phoneHref}
              className="rounded-full border border-white/20 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Call now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
