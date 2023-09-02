export function formatDuration(duration: number) {
  const minutes = Math.floor(duration / 60).toString().padStart(2, '0');
  const seconds = (duration % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
}

export function formatDate(date:string) {
  return new Date(date).toLocaleDateString(
    Intl.Locale.name,
    { day: 'numeric', month: 'numeric', year: 'numeric' }
  )
}
