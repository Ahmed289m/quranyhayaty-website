import Link from "next/link";

export default async function Navigation() {
  return (
    <nav className="z-10 text-lg sm:text-xl">
      <ul className="flex flex-row  gap-8 sm:gap-16 items-center">
        <li>
          <Link
            href="/quiz"
            className="hover:text-accent-400 transition-colors"
          >
            اختبر نفسك
          </Link>
        </li>

        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors"
          >
            عن الموقع
          </Link>
        </li>
      </ul>
    </nav>
  );
}
