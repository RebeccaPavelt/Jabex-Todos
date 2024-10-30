import Link from "next/link";

export default function Navbar() {
  return (
    <div>
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
