import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between">
      <nav className="text-base font-medium space-x-6">
        <Link href="/">Home</Link>
        <Link href="/dic">Dic</Link>
        <Link href="/about">About</Link>
      </nav>
      <ModeToggle />
    </div>
  );
}
