import React from "react";
import Link from "next/link";
import styles from "./page.module.css";

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
    <nav className={styles.navigation}>
      {links.map((link) => (
        <Link key={link.id} href={link.url} className={styles.link}>
          {link.title}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
