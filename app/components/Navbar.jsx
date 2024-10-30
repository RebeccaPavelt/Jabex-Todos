import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/Designer.png";

export default function Navbar() {
  return (
    <div>
      <div className="flex justify-center">
        <Image src={Logo} alt="Jabex Logo" width={100} height={100} />
      </div>
      <nav className="nav">
        <h1 className="nav_items">Jabex Todo List</h1>
        <Link className="nav_items" href="/">
          Dashboard
        </Link>
        <Link className="nav_items" href="/done">
          Erledigt
        </Link>
      </nav>
    </div>
  );
}
