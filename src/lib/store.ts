export const storeConfig = {
  currency: "SAR",
  locale: "en",
  phone: "90594 97025",
  phoneLink: "tel:+919059497025",
  address: "Hyderabad, Telangana 500059",
  whatsappNumber: "919059497025",
  whatsappUrl: "https://wa.me/919059497025",
  freeShippingThreshold: 500,
} as const;

export function formatPrice(amount: number | null) {
  if (amount === null) {
    return "Price to be announced";
  }

  return new Intl.NumberFormat(storeConfig.locale, {
    style: "currency",
    currency: storeConfig.currency,
    maximumFractionDigits: 0,
  }).format(amount);
}
