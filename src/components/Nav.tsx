import Image from "next/image";
import logo from "../../public/logo.jpg";

export default function Nav() {
  return (
    <nav className="bg-black sticky top-0 font-bold">
      <ul className="h-14 flex justify-evenly items-center text-3xl">
        <li>Profile</li>
        <li>Login</li>
      </ul>
    </nav>
  );
}
