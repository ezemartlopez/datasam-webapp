"use client";

import { navbar_links, NavbarLink } from "@/lib/navbar/navbar-links-data";
import Image from "next/image";
import Link from "next/link";
import clsx from 'clsx';
import { useState } from "react";
import ProfileUser from "./profile-user";
import { useAuth } from "@/hooks/use-auth";

const NavbarItemLink = ({navbarLink}:{navbarLink: NavbarLink}) => {
  return (
    <Link href={navbarLink.href} className="font-rubik font-light text-lg text-white transition-colors duration-500 hover:text-blue-500">{navbarLink.name}</Link>
  );
}


const Navbar = () => {
  const { session, signInWithGoogle, signOut } = useAuth();
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const [openLogin, setOpenLogin] = useState<boolean>(false);
  const toggleLogin = () => {
    setOpenSidebar(false);
    setOpenLogin(prev => !prev);
  }
  const toggleSidebar = () => {
    setOpenLogin(false);
    setOpenSidebar(prev => !prev);
  }
  
  return (
    <header className="fixed top-0 z-50 w-full overflow-hidden">
      <div className="w-full bg-gray-950/70 flex flex-col px-6 md:px-10">
        <nav className="h-16 w-full flex justify-between md:justify-start items-center gap-[100px]">
          <button type="button" onClick={toggleSidebar} className="md:pointer-events-none">
            <Image src={"/images/logo_v_claro_final.svg"} height={30} width={60} alt="logo_datasam"/>
          </button>

          <div className="hidden md:inline-flex flex-1">
            <ul className="h-full w-full flex justify-start items-center gap-8">
              {navbar_links.map((navbarLink, index) => (
                <li key={index} className="w-auto h-auto">
                  <NavbarItemLink navbarLink={navbarLink}/>
                </li>
              ))}
            </ul>
          </div>
          <button onClick={toggleLogin} type="button" className="">
            <ProfileUser />
          </button>
        </nav>
      </div>
      <div className="w-full flex justify-end pr-2">
          <div className={clsx("w-[200px] flex flex-col justify-start", {
            "h-auto": !openLogin,
            "h-min": openLogin
          })}>
            <div className={clsx("max-w-[200px] w-full h-min bg-gray-950/70 rounded-b-lg transition-all duration-1000 ease-in-out", {
              "max-h-[200px] opacity-100": openLogin,
              "max-h-0 opacity-0": !openLogin
              })}>
              <ul className="w-full h-full py-3 gap-2">
                { session? 
                <>
                  <li className="w-full flex items-center justify-center">
                    <button type="button" onClick={signOut}>
                      <span className="text-white text-base md:text-lg font-rubik font-light">Cerrar Sesión</span>
                    </button>
                  </li>
                </>: 
                <>
                  <li className="w-full flex items-center justify-center">
                    <button type="button" onClick={signInWithGoogle} className="flex gap-2">
                      <Image src="/svg/google.svg" width={24} height={24} alt="google_icon" className=""/>
                      <span className="text-white text-base md:text-lg font-rubik font-light">Google</span>
                    </button>
                  </li>
                </>}
              </ul>
            </div>
          </div>
      </div>

      <div className="w-full md:hidden">
        <div className={clsx("w-full transition-opacity duration-500 ease-in-out opacity-100 flex flex-col", {
            "h-auto": !openSidebar,
            "h-screen": openSidebar
          })}>
          <div className={clsx("overflow-hidden bg-gray-950/70 w-full h-min rounded-b-lg transition-all duration-1000 ease-in-out", {
              "max-h-96 opacity-100": openSidebar,
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
