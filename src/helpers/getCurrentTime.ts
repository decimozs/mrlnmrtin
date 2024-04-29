export default function getCurrentTime(): string {
  const now: Date = new Date();
  const hours: number = now.getHours() % 12 || 12;
  const minutes: string = now.getMinutes().toString().padStart(2, "0");
  const meridiem: string = hours >= 12 ? "AM" : "PM";
  return `${hours}:${minutes} ${meridiem}`;
}
