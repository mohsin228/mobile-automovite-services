import { company, processSteps, stats, trustPoints } from "../data/siteContent";

export default function About() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="section-eyebrow">About</p>
          <h1 className="section-title">
            A mobile-first automotive brand built to feel sharper and more trustworthy.
          </h1>
          <p className="section-copy">
            {company.name} is positioned around the same local-service promise as the reference site:
            we come to you. The difference is a stronger front-end system, better hierarchy, and a more modern booking path.
          </p>
          <p className="mt-6 text-sm leading-7 text-slate-400">
            Our approach emphasizes clean installs, professional communication, and premium visual presentation from the first click through the final handoff.
          </p>
        </div>
        <div className="overflow-hidden rounded-[34px] border border-white/10 bg-white/5">
          <img
            src="https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1400&q=80"
            alt="Professional automotive service"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="mt-20 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <div key={item.label} className="glass-panel p-6">
            <p className="text-3xl font-semibold text-white">{item.value}</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">{item.label}</p>
          </div>
        ))}
      </section>

      <section className="mt-20 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="glass-panel p-8">
          <p className="section-eyebrow">Our standards</p>
          <h2 className="text-3xl font-semibold text-white">What customers should expect from every visit.</h2>
          <div className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
            {trustPoints.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {processSteps.map((step, index) => (
            <div key={step.title} className="glass-panel p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-amber-300">
                0{index + 1}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{step.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
