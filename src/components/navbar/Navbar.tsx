import { NavLink } from "react-router";
import { navLinks } from ".";

export default function Navbar() {
  return (
    <nav className="bg-slate-400 flex justify-around py-8 items-center">
      <span className="text-2xl font-bold">My Website</span>
      <ul className="flex gap-4">
        {navLinks.map((n) => (
          <NavLink to={n.url}>{n.label}</NavLink>
        ))}
      </ul>
    </nav>
  );
}
