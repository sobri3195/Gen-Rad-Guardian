import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPercent(value: number) {
  return `${Math.round(value)}%`;
}

export function formatTier(score: number) {
  if (score >= 75) return 'High';
  if (score >= 45) return 'Moderate';
  return 'Low';
}
