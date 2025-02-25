"use client";

import { navbar_links, NavbarLink } from "@/lib/navbar/navbar-links-data";
import Image from "next/image";
import Link from "next/link";
import clsx from 'clsx';
import { useState } from "react";
import ProfileUser from "./profile-user";

const NavbarItemLink = ({navbarLink}:{navbarLink: NavbarLink}) => {
  return (
    <Link href={navbarLink.href} className="font-rubik font-light text-lg text-white transition-colors duration-500 text-muted-foreground hover:text-blue-500">{navbarLink.name}</Link>
  );
}


const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const toggleSidebar = () => {
    setOpenSidebar(prev => !prev);
  }
  
  return (
    <header className="fixed top-0 z-50 w-full overflow-hidden">
      <div className="w-full bg-gray-950/70 flex flex-col px-6 md:px-10">
        <nav className="h-16 w-full flex justify-between md:justify-start items-center gap-[100px]">
          <button type="button" onClick={toggleSidebar}>
            <Image src={"/images/logo_v_claro_final.svg"} height={30} width={60} alt="logo_datasam"/>
          </button>

          <div className="hidden md:inline-flex flex-1">
            <ul className="h-full w-full flex justify-start items-center gap-6">
              {navbar_links.map((navbarLink, index) => (
                <li key={index} className="w-auto h-auto">
                  <NavbarItemLink navbarLink={navbarLink}/>
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            <ProfileUser />
          </div>
        </nav>
      </div>
      <div className="w-full md:hidden">
          <div className={clsx("w-full transition-opacity duration-500 ease-in-out opacity-100 flex flex-col", {
            "h-auto": !openSidebar,
            "h-screen": openSidebar
          })}>
            <div className={clsx("overflow-hidden bg-gray-950/70 w-full h-full rounded-b-lg transition-all duration-1000 ease-in-out", {
              "max-h-52 opacity-100": openSidebar,
              "max-h-0 opacity-0": !openSidebar
            })}>
              <ul className="px-10 py-10 flex flex-col items-center gap-5">
                {navbar_links.map((navbarLink, index) => (
                  <li key={index} className="w-auto h-auto">
                    <NavbarItemLink navbarLink={navbarLink}/>
                  </li>
                ))}
              </ul>
            </div>
            <div onClick={() => setOpenSidebar(false)} className={clsx("w-full flex-1", {
              "hidden": !openSidebar
            })}></div>
          </div>
        </div>
    </header>
  );
};

export default Navbar;
