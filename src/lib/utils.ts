import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Prepend Vite's base URL to a public-folder asset path. */
export function asset(path: string) {
  const base = import.meta.env.BASE_URL
  // Avoid double slashes: base already ends with /, path starts with /
  return base.endsWith('/') && path.startsWith('/')
    ? base + path.slice(1)
    : base + path
}
