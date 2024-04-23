export default function getCurrentTime(): string {
  const currentTime = new Date();
  let hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  let meridiem = "AM";

  if (hours >= 12) {
    meridiem = "PM";
    if (hours > 12) {
      hours -= 12;
    }
  }
  if (hours === 0) {
    hours = 12;
  }

  const paddedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;

  const formattedTime = `${hours}:${paddedMinutes} ${meridiem}`;

  return formattedTime;
}
