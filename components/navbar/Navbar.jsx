import React from "react";
import Link from "next/link";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Projects",
    url: "/projects",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
];

const Navbar = () => {
  return (
    <div style={{ zIndex: "200", position: "absolute" }}>
      {links.map((link) => (
        <Link key={link.id} href={link.url}>
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
