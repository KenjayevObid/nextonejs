"use client";

import Link from "next/link";
import Image from "next/image";

import { DarkThemeToggle, Navbar, Flowbite } from "flowbite-react";
import img from "../imegs/logo.png";
const NavTop = () => {
  const link = [
    { id: 1, href: "/", title: "Home", active: false },
    { id: 1, href: "/about", title: "Abaut", active: false },
    { id: 1, href: "/contact", title: "Contact", active: false },
    { id: 1, href: "/blog", title: "Blog", active: false },
  ];
  return (
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} href="https://flowbite-react.com">
        <Image src={img} alt="Picture of the author" width={100} />
      </Navbar.Brand>
      <Flowbite>
        <DarkThemeToggle />
      </Flowbite>
      <Navbar.Toggle />
      <Navbar.Collapse>
        {link.map((item) => (
          <Navbar.Link key={item.id} href={item.href}>
            {item.title}
          </Navbar.Link>
        ))}
          <Navbar.Link  href="/logout">Logout</Navbar.Link>

      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavTop;
