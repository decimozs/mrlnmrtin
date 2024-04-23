import Link from "next/link";

export default function EmailButton() {
  return (
    <Link href="/" className="italic underline email tooltip">
      hello@marlonmartin
    </Link>
  );
}
