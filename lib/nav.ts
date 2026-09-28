/** Primary navigation. Single-page site, so every link is an in-page anchor. */
export const navLinks = [
  { href: "#home", id: "home", label: "Home" },
  { href: "#services", id: "services", label: "Services" },
  { href: "#about", id: "about", label: "About" },
  { href: "#reviews", id: "reviews", label: "Reviews" },
  { href: "#faq", id: "faq", label: "FAQ" },
  { href: "#contact", id: "contact", label: "Contact" },
] as const;

export type NavLink = (typeof navLinks)[number];
