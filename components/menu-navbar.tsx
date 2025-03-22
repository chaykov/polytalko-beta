"use client";

import Link from "next/link";
import React from "react";

const links = [
  { title: "Home", href: "/" },
  { title: "Profile", href: "/profile" },
  { title: "Users", href: "/users" },
];

export default function NavbarMenu() {
  return (
    <div className="flex flex-row space-x-4 font-sans text-lg ">
      {links.map((l) => (
        <Link key={l.title} href={l.href}>
          {l.title}
        </Link>
      ))}
    </div>
  );
}
