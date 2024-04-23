export default function ResumeButton() {
  const handleClick = () => {
    window.open("/docs/resume.pdf", "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="text-slate resume tooltip smooth-hover"
    >
      Resume
    </button>
  );
}
