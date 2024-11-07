import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/Designer.png";

export default function Navbar() {
  return (
    <nav>
      <Image
        src={Logo}
        alt="Jabex Logo"
        width={100}
        height={100}
        placeholder="blur"
      />
      <h1>Jabex Todo List</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/todos">ToDos</Link>
      <Link href="/done">Erledigt</Link>
    </nav>
  );
}
