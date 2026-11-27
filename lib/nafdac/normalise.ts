// Dashes people (and phone keyboards) type instead of "-": ‐ ‑ ‒ – — ―  and the minus sign −
const ODD_DASHES = /[\u2010-\u2015\u2212]/g

/**
 * Turn whatever a user or the Greenbook gives us into one comparable form.
 * "04 - 7953 " -> "04-7953",  "a4–1234" -> "A4-1234"
 * Used on BOTH sides of a match: the database column and the user's input.
 */
export function normaliseNafdac(input: string): string {
  return input.replace(ODD_DASHES, "-").replace(/\s+/g, "").toUpperCase()
}

const ENTITIES: Record<string, string> = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'",
}

/** Decode the few HTML entities the Greenbook returns ("Johnson &amp; Johnson"). */
export function decodeEntities(text: string): string {
  return text.replace(/&(amp|lt|gt|quot|#39);/g, (m) => ENTITIES[m] ?? m)
}

/**
 * The product name as NAFDAC's own site shows it: entities decoded,
 * staff marks # and * hidden, extra spaces collapsed.
 * The official raw name is never changed; this is a display copy only.
 */
export function displayName(raw: string): string {
  return decodeEntities(raw).replace(/[#*]/g, "").replace(/\s+/g, " ").trim()
}
