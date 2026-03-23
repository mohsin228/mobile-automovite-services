import { Link } from "react-router-dom";

export default function ServiceCard({
  title,
  shortDescription,
  description,
  image,
  price,
  highlights = [],
}) {
  return (
    <article className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/6 shadow-[0_24px_80px_rgba(15,23,42,0.28)] backdrop-blur-md transition duration-500 hover:-translate-y-1 hover:border-amber-300/30">
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
        <p className="absolute left-5 top-5 rounded-full border border-amber-300/25 bg-slate-950/70 px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">
          {price}
        </p>
      </div>

      <div className="space-y-5 p-6">
        <div>
          <h3 className="text-2xl font-semibold text-white">{title}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            {shortDescription || description}
          </p>
        </div>

        <div className="space-y-2 text-sm text-slate-400">
          {highlights.map((item) => (
            <p key={item} className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-amber-300" />
              {item}
            </p>
          ))}
        </div>

        <Link
          to="/booking"
          className="inline-flex rounded-full border border-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:border-amber-300/40 hover:bg-white/5"
        >
          Book this service
        </Link>
      </div>
    </article>
  );
}
