import getCurrentTime from "@/helpers/getCurrentTime";

export default function Time() {
  const currentTime = getCurrentTime();
  return (
    <div>
      <p>{currentTime} (GMT+8)</p>
    </div>
  );
}
