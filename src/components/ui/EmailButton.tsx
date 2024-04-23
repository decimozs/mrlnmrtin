import Link from "next/link";

export default function EmailButton() {
  return (
    <Link
      href="mailto:marlonadiguemartin548@gmail.com"
      className="italic underline email tooltip smooth-hover"
    >
      hello@marlonmartin
    </Link>
  );
}
