/**
 * VERIFIED BUSINESS DATA — single source of truth for the whole site.
 *
 * IMPORTANT CONTENT RULE
 * ----------------------
 * Everything exported from `business` below is publicly available information
 * (name, address, phone, publicly listed hours and the public Google rating).
 * Nothing else about the real business may be asserted anywhere on this site.
 *
 * Anything that still needs owner confirmation is exported from
 * `pendingConfirmation` and is rendered through neutral, clearly labelled
 * placeholder components. Update `business` first — never hard-code facts
 * inside a component.
 */

/** One row of the publicly listed hours table. */
export type HourEntry = {
  days: string;
  time: string;
  schemaDays: readonly string[];
  opens?: string;
  closes?: string;
  closed?: boolean;
};

export const business = {
  /** Public business name. */
  name: "CRS Auto Repair",
  /** Text-based wordmark treatment (replace with the owner's real logo later). */
  wordmark: "CRS AUTO REPAIR",
  /** Compact wordmark used in the mobile top bar. */
  wordmarkShort: "CRS",

  address: {
    street: "1901 Del Mar Ave",
    /** Street name without the house number — used in prose. */
    streetName: "Del Mar Ave",
    city: "San Gabriel",
    region: "CA",
    postalCode: "91776",
    country: "US",
    /** Single-line form used for maps links / structured data. */
    full: "1901 Del Mar Ave, San Gabriel, CA 91776",
  },

  phone: {
    display: "(626) 573-3922",
    /** E.164 — always use this for tel: links. */
    e164: "+16265733922",
    href: "tel:+16265733922",
  },

  /**
   * Publicly listed Google rating for this location.
   * This is a GOOGLE-specific rating — it must never be presented as a rating
   * across every review platform. Also intentionally NOT emitted as
   * `aggregateRating` structured data.
   */
  googleRating: {
    score: "4.2",
    outOf: "5",
    reviewCount: 131,
    source: "Google",
  },

  /**
   * Publicly listed opening hours. Update here only — the FAQ, contact section,
   * footer and LocalBusiness structured data all read from this array.
   */
  hours: [
    {
      days: "Monday – Friday",
      time: "8:00 AM – 5:00 PM",
      schemaDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
    {
      days: "Saturday",
      time: "9:00 AM – 3:00 PM",
      schemaDays: ["Saturday"],
      opens: "09:00",
      closes: "15:00",
    },
    {
      days: "Sunday",
      time: "Closed",
      schemaDays: ["Sunday"],
      closed: true,
    },
  ] satisfies HourEntry[],

  /**
   * Approximate city-level coordinates for San Gabriel, CA.
   * Used for the LocalBusiness `geo` property and map centering only.
   * Replace with the precise rooftop coordinates if the owner supplies them.
   */
  geo: {
    latitude: "34.0961",
    longitude: "-118.1057",
  },
} as const;

export const maps = {
  /** Opens turn-by-turn directions in Google Maps. */
  directions: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    business.address.full,
  )}`,
  /** Opens the location in Google Maps. */
  place: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    business.address.full,
  )}`,
  /** Keyless Google Maps embed used in the contact section. */
  embed: `https://www.google.com/maps?q=${encodeURIComponent(
    business.address.full,
  )}&z=16&output=embed`,
} as const;

/**
 * Neutral fallback answer used wherever an answer has NOT been verified.
 * Do not replace this with a guess.
 */
export const UNVERIFIED_ANSWER =
  "Please contact CRS Auto Repair directly for the most up-to-date information.";

/** Discreet demo disclosure shown in the footer. */
export const demoNote = {
  label: "Concept website created for presentation purposes.",
  detail:
    "Unofficial concept demo. Not the official CRS Auto Repair website and not endorsed by or affiliated with the business.",
};

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://crs-auto-repair-website.vercel.app";
