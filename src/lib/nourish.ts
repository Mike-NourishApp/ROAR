const EMBED_ID = "6e2c6065-63be-451a-9198-a5116dec49c6";
const API_BASE = `https://my.nourishapp.co.nz/api/embed/${EMBED_ID}`;

// The embed API validates the Origin header against its domain whitelist.
// Server-side we always identify as the production Vercel domain.
const EMBED_ORIGIN = "https://roar-nourishapp.vercel.app";

// The hosted booking widget. Appending ?class=<id> opens that class's
// booking modal on load (the embed reads the "class" query param).
const EMBED_BOOKING_URL = `https://my.nourishapp.co.nz/embed/${EMBED_ID}`;

export function classBookingUrl(classId: string): string {
  return `${EMBED_BOOKING_URL}?class=${encodeURIComponent(classId)}`;
}

export interface NourishClass {
  id: string;
  scheduled_at: string;
  scheduled_at_local: string;
  timezone: string;
  display_name: string;
  cover_photo_url: string | null;
  coach_name: string | null;
  coach_profile_picture_url: string | null;
  secondary_coach_name: string | null;
  secondary_coach_profile_picture_url: string | null;
  location: string | null;
  capacity: number | null;
  confirmed_bookings_count: number;
  waitlist_bookings_count: number;
  waitlist_full: boolean;
  spots_remaining: number | null;
  paid: boolean;
}

export interface NourishCoach {
  first_name: string;
  last_name: string;
  name: string;
  bio: string | null;
  title: string | null;
  tags: string | null;
  qualifications: string | null;
  instagram: string | null;
  youtube: string | null;
  facebook: string | null;
  profile_picture_url: string | null;
}

export async function getCoaches(): Promise<NourishCoach[]> {
  try {
    const res = await fetch(`${API_BASE}/coaches`, {
      headers: { Accept: "application/json", Origin: EMBED_ORIGIN },
      next: { revalidate: 300 },
    });
    if (!res.ok) return [];
    const json = await res.json();
    return Array.isArray(json.data) ? json.data : [];
  } catch {
    return [];
  }
}

export async function getUpcomingClasses(): Promise<NourishClass[]> {
  const classes: NourishClass[] = [];
  try {
    let url: string | null = `${API_BASE}/classes?per_page=100`;
    let pages = 0;
    while (url && pages < 5) {
      const res: Response = await fetch(url, {
        headers: { Accept: "application/json", Origin: EMBED_ORIGIN },
        next: { revalidate: 300 },
      });
      if (!res.ok) break;
      const json = await res.json();
      if (Array.isArray(json.data)) classes.push(...json.data);
      url = json.links?.next ?? null;
      pages++;
    }
  } catch {
    // fall through to whatever we collected
  }
  return classes;
}
