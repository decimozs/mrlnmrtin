export default function getCurrentTime(): string {
  const now: Date = new Date();
  let hours: number = now.getHours() % 12;
  hours = hours === 0 ? 12 : hours;
  const minutes: string = now.getMinutes().toString().padStart(2, "0");
  const meridiem: string = now.getHours() >= 12 ? "PM" : "AM";
  return `${hours}:${minutes} ${meridiem}`;
}
