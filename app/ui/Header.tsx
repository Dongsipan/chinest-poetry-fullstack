'use client';
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link} from "@nextui-org/react";
import {usePathname} from "next/navigation";

export default function Header() {
  debugger
  const pathname = usePathname();
  const links = [
    {name: "Search", href: "/search", isActive: pathname === "/search"},
    {name: "Poets", href: "/poets", isActive: pathname === "/poets"},
    {name: "Rhythmic", href: "/rhythmic", isActive: pathname === "/rhythmic"},
    {name: "Collection", href: "/collection", isActive: pathname === "/collection"}
  ]
  return (
      <Navbar>
        <NavbarBrand>
          <Link color="foreground" className="font-bold text-inherit" href="/home">中华诗词集</Link>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="end">
          <>
            {links.map(({name, href, isActive}) => <NavbarItem key={href} isActive={isActive}><Link color={!isActive ? 'foreground' : 'primary'} href={href}>{name}</Link></NavbarItem>)}
          </>
        </NavbarContent>
      </Navbar>
  );
}
