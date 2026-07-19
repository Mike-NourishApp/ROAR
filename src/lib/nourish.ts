const EMBED_ID = "6e2c6065-63be-451a-9198-a5116dec49c6";
const API_BASE = `https://my.nourishapp.co.nz/api/embed/${EMBED_ID}`;

// The embed API validates the Origin header against its domain whitelist.
// Server-side we always identify as the production Vercel domain.
const EMBED_ORIGIN = "https://roar-nourishapp.vercel.app";

export interface NourishClass {
  id: number;
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

export async function getUpcomingClasses(): Promise<NourishClass[]> {
  try {
    const res = await fetch(`${API_BASE}/classes?per_page=100`, {
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
