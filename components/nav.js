import React from "react";
import Link from "next/link";

const links = [
  {
    href: "/compount-interest-calculator",
    label: "Compount Interest Calculator"
  },
  { href: "https://github.com/jakenherman/swing", label: "GitHub" }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
