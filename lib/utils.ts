export function toDisplayName(raw: string): string {
  return raw
    .replace(/-/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase())
}
