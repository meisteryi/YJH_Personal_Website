const DAY_START_HOUR = 6;
const NIGHT_START_HOUR = 18;
const SERVER_TIMEZONE = 'Asia/Seoul';

/**
 * Convert an epoch timestamp (ms) to the 24-hour clock hour (0-23) in KST (Asia/Seoul).
 */
export function getKstHour(epochMs) {
  const hourStr = new Intl.DateTimeFormat('en-US', {
    timeZone: SERVER_TIMEZONE,
    hour: 'numeric',
    hour12: false,
  }).format(new Date(epochMs));
  const hour = Number.parseInt(hourStr, 10);
  return hour === 24 ? 0 : hour;
}

/**
 * Return true when dark mode should be active (18:00 <= KST hour < 06:00).
 */
export function isDarkByServerTime(epochMs) {
  const hour = getKstHour(epochMs);
  return hour < DAY_START_HOUR || hour >= NIGHT_START_HOUR;
}

/**
 * Apply or remove the Tailwind `.dark` class on `<html>`.
 */
export function applyThemeClass(isDark) {
  document.documentElement.classList.toggle('dark', isDark);
}

/**
 * Fetch the HTTP `Date` header from the origin server and return `(serverMs - clientMs)`.
 * Falls back to `0` when the header is unavailable or the request fails.
 */
export async function fetchServerTimeOffsetMs() {
  try {
    const start = Date.now();
    const response = await fetch(window.location.pathname || '/', {
      method: 'HEAD',
      cache: 'no-store',
    });
    const end = Date.now();
    const dateHeader = response.headers.get('date');
    if (!dateHeader) return 0;

    const serverEpochMs = Date.parse(dateHeader);
    if (Number.isNaN(serverEpochMs)) return 0;

    const clientMidEpochMs = start + (end - start) / 2;
    return serverEpochMs - clientMidEpochMs;
  } catch {
    return 0;
  }
}
