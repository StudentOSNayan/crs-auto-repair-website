import { business, siteUrl } from "./business";

/**
 * LocalBusiness / AutoRepair structured data.
 *
 * Contains ONLY verified public facts: business name, address, phone,
 * publicly listed opening hours and approximate (city-level) coordinates.
 *
 * Deliberately NOT included:
 *  - aggregateRating / review markup (no fabricated ratings or reviews)
 *  - priceRange, paymentAccepted, certifications, founding date, services
 *    (none of these have been verified with the owner)
 */
export function localBusinessSchema() {
  const { name, address, phone, geo, hours } = business;

  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "AutoRepair"],
    "@id": `${siteUrl}#business`,
    name,
    url: siteUrl,
    telephone: phone.e164,
    image: `${siteUrl}/images/hero.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.city,
      addressRegion: address.region,
      postalCode: address.postalCode,
      addressCountry: address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: geo.latitude,
      longitude: geo.longitude,
    },
    areaServed: {
      "@type": "City",
      name: "San Gabriel",
      addressRegion: "CA",
      addressCountry: "US",
    },
    openingHoursSpecification: hours
      .filter((entry) => !entry.closed && Boolean(entry.opens && entry.closes))
      .map((entry) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [...entry.schemaDays],
        opens: entry.opens ?? "",
        closes: entry.closes ?? "",
      })),
  };
}

/** Breadcrumb-free WebSite node so search engines understand the page. */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}#website`,
    url: siteUrl,
    name: business.name,
    inLanguage: "en-US",
    publisher: { "@id": `${siteUrl}#business` },
  };
}

/** Combined @graph payload rendered once in the document. */
export function structuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [localBusinessSchema(), websiteSchema()],
  };
}
