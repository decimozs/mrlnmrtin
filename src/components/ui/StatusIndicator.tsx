export default function StatusIndicator() {
  return (
    <div className="p-1 px-3 w-[145px] flex items-center gap-2 glass">
      <span className="animate-ping absolute inline-flex h-[10px] w-[12px] rounded-full bg-sky-400 "></span>
      <span className="relative inline-flex rounded-full h-3 w-3 bg-green"></span>
      <p className="text-[0.8rem]">Available to Work</p>
    </div>
  );
}
