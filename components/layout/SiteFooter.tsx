import Link from "next/link";
import { business, demoNote, maps } from "@/lib/business";
import { navLinks } from "@/lib/nav";
import { Wordmark } from "@/components/ui/Wordmark";
import { PhoneIcon, PinIcon, ClockIcon } from "@/components/icons";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-obsidian">
      {/* Extra bottom padding on phones so the fixed action bar never covers content. */}
      <div className="page pt-16 pb-32 md:pt-20 md:pb-24 lg:pb-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Wordmark variant="stacked" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/50">
              {business.address.city}, California
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={business.phone.href}
                className="focus-visible:outline-accent-bright inline-flex h-11 items-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold text-white transition-colors hover:bg-accent-bright focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                <PhoneIcon className="size-4" />
                Call
              </Link>
              <a
                href={maps.directions}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-visible:outline-accent-bright inline-flex h-11 items-center gap-2 rounded-full border border-white/20 px-5 text-sm font-semibold text-bone transition-colors hover:border-white/45 hover:bg-white/[0.06] focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                <PinIcon className="size-4" />
                Directions
              </a>
            </div>
          </div>

          {/* Quick links */}
          <nav aria-labelledby="footer-links">
            <h2 id="footer-links" className="text-eyebrow text-white/50">
              Quick Links
            </h2>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="focus-visible:outline-accent-bright rounded-sm text-sm text-white/65 transition-colors hover:text-bone focus-visible:outline-2 focus-visible:outline-offset-2"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className="text-eyebrow text-white/50">Contact</h2>
            <address className="mt-5 space-y-3 text-sm not-italic text-white/65">
              <p>
                {business.address.street}
                <br />
                {business.address.city}, {business.address.region}{" "}
                {business.address.postalCode}
              </p>
              <p>
                <a
                  href={business.phone.href}
                  className="focus-visible:outline-accent-bright rounded-sm font-semibold text-bone transition-colors hover:text-accent-bright focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  {business.phone.display}
                </a>
              </p>
            </address>
          </div>

          {/* Hours */}
          <div>
            <h2 className="text-eyebrow flex items-center gap-2 text-white/50">
              <ClockIcon className="size-3.5" />
              Hours
            </h2>
            <ul className="mt-5 space-y-3 text-sm text-white/65">
              {business.hours.map((entry) => (
                <li key={entry.days} className="flex justify-between gap-4">
                  <span>{entry.days}</span>
                  <span className="text-white/85">{entry.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Legal / demo disclosure */}
        <div className="mt-14 border-t border-white/10 pt-8">
          <p className="text-white/85">
            &copy; {year} {business.name}
          </p>
          <p className="mt-3 max-w-2xl text-xs leading-relaxed text-white/45">
            {demoNote.label} {demoNote.detail}
          </p>
        </div>
      </div>
    </footer>
  );
}
