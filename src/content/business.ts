/** Only client/source-supported facts belong here. Null fields MUST NOT appear in schema. */
export interface BusinessData {
  name: string;
  foundingYear: number;
  ownership: string;
  phone: string | null;
  email: string | null;
  address: string | null;
  hours: string | null;
  serviceArea: string[];
  socialProfiles: string[];
}
export const business: BusinessData = {
  name: "TenderCare Irrigation",
  foundingYear: 1982,
  ownership: "Locally family-owned",
  phone: null, // TODO: verify current phone; reference has (316) 555-1234. Truck photo shows 788-5416, not confirmation.
  email: null, // TODO: confirm info@tendercareirrigation.com is owned and monitored.
  address: null, // TODO: verify 219 S Water St, Derby and whether customers may visit.
  hours: null, // TODO: confirm Mon–Fri 8am–5pm from the placeholder site.
  serviceArea: ["Wichita", "Derby", "Andover", "Maize", "Haysville", "Goddard"],
  socialProfiles: [],
};
export const navigation = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/blog" },
  { label: "FAQs", href: "/faq" },
  { label: "Contact", href: "/contact" },
];
