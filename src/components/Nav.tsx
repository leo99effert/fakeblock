import Image from "next/image";
import logo from "../../public/logo.jpg";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="bg-blue-800 sticky top-0 font-bold">
      <ul className="h-14 flex justify-evenly items-center text-3xl">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/profile">Profile</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}
