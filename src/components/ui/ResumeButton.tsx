import Link from "next/link";

export default function ResumeButton() {
  return (
    <Link
      href="/docs/resume.pdf"
      className=" text-slate mt-[-0.2rem] resume tooltip smooth-hover"
      target="_blank"
    >
      Resume
    </Link>
  );
}
