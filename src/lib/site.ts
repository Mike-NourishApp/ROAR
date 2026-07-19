export const site = {
  name: "ROAR",
  phoneDisplay: "+65 9424 6862",
  phone: "6594246862",
  email: "roargymsg@gmail.com",
  instagramHandle: "@roargymsg",
  instagramUrl: "https://instagram.com/roargymsg",
  address: "221 Henderson Rd, Singapore 159557",
  mapsUrl: "https://maps.google.com/?q=221+Henderson+Rd%2C+Singapore+159557",
  hours: [
    { days: "Monday – Friday", time: "6:00 AM – 8:00 PM" },
    { days: "Saturday – Sunday", time: "7:00 AM – 5:00 PM" },
  ],
} as const;

export function whatsappUrl(message: string) {
  return `https://api.whatsapp.com/send/?phone=${site.phone}&text=${encodeURIComponent(
    message
  )}&type=phone_number&app_absent=0`;
}
