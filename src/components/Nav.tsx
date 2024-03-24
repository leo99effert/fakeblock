import Link from "next/link";

export default function Nav() {
  return (
    <nav className="bg-blue-800 sticky top-0 font-bold">
      <ul className="h-14 flex justify-evenly items-center text-3xl">
        <li>
          <Link className="hover:text-blue-950" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="hover:text-blue-950" href="/profile">
            Profile
          </Link>
        </li>
        <li>
          <Link className="hover:text-blue-950" href="/register">
            Register
          </Link>
        </li>
        <li>
          <Link className="hover:text-blue-950" href="/login">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}
