export const SITE = {
  name: "David Kauzlaric",
  tagline: 'Helping business owners navigate the journey from "stressed operator" to "wealthy owner" through strategy, acquisitions and digital dominance.',
  ctaLabel: "Work with Me",
  newsletterSubtitle: "Weekly Stories, Inspiring and Direct Newsletter from David",
} as const;

export const NAV_LINKS_LEFT = [
  { label: "Podcast",  href: "#" },
  { label: "Speaking", href: "#" },
  { label: "Coaching", href: "#" },
] as const;

export const NAV_LINKS_RIGHT = [
  { label: "Books",   href: "#" },
  { label: "About",   href: "#" },
  { label: "Contact", href: "#" },
] as const;

export const MEDIA_LOGOS = [
  { src: "/ap_news.svg", alt: "AP News" },
  { src: "/forbes.svg",  alt: "Forbes" },
  { src: "/yahoo_news.svg", alt: "Yahoo News" },
  { src: "/business_insider.svg", alt: "Business Insider" },
  { src: "/newsmax.svg", alt: "Newsmax" },
  { src: "/apple_news.svg", alt: "Apple News" },
  { src: "/inc.svg", alt: "Inc." },
  { src: "/entrepreneur.svg", alt: "Entrepreneur" },
] as const;

export const EPISODES = [
  {
    img: "/podcast1.png",
    title: "How BJJ teaches resilience, focus, and problem-solving",
    hasPlay: true,
  },
  {
    img: "/podcast2.png",
    title: "How Predictable Scaling can Help Grow, Scale and Automate your Business in 2026",
    hasPlay: false,
  },
  {
    img: "/podcast3.png",
    title: "Full Marketing Strategy for Business Growth in 2026",
    hasPlay: false,
  },
] as const;

export const FOOTER_COLUMNS = [
  {
    heading: "About David",
    links: ["AAU", "Holdings", "Coaching", "Speaking", "Consulting", "Our Team", "Partnership"],
  },
  {
    heading: "David's Podcast",
    links: ["All Episodes", "Spotify", "Guesting", "Guests", "Newsletter", "Merch Shop"],
  },
  {
    heading: "Community",
    links: ["Books", "Members", "Book a call today"],
  },
] as const;

export const SOCIAL_PLATFORMS = [
  "Facebook", "Twitter", "Instagram", "YouTube", "LinkedIn", "TikTok",
] as const;