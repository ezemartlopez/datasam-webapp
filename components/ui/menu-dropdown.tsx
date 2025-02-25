'use client';

import { useState } from 'react';
import clsx from 'clsx'; // Importa clsx
import { ChevronDown } from 'lucide-react';

export default function MenuDropdown({ title, description }: { title: string, description: string }) {
  const [openMenu, setOpenMenu] = useState(false);

  // Maneja la apertura y cierre del menú
  const toggleMenu = () => setOpenMenu((prev) => !prev);

  return (
    <div className="static w-full h-auto flex justify-center items-center">
      <div className="w-full h-auto flex flex-col">
        <button
          onClick={toggleMenu}
          className={clsx(
            "w-full p-4 border-b-[1px] flex justify-between items-center transition-colors duration-500",
            {
              "border-b-green-500": openMenu,
              "border-b-black": !openMenu
            }
          )}
        >
          <span
            className={clsx(
              "font-rubik text-base md:text-lg font-normal transition-colors duration-500",
              {
                "text-green-500": openMenu,
                "text-black": !openMenu
              }
            )}
          >
            {title}
          </span>
          <ChevronDown
            size={24}
            className={clsx(
              "transition-all duration-500",
              {
                "rotate-180 text-green-500": openMenu,
                "text-black": !openMenu
              }
            )}
          />
        </button>
        {/* Lista desplegable */}
        <div
          className={clsx(
            "overflow-hidden w-full h-full transition-max-h duration-1000 ease-in-out",
            {
              "max-h-52": openMenu,
              "max-h-0": !openMenu
            }
          )}
        >
          <p className="p-4 text-base md:text-lg font-rubik text-gray-800">{description}</p>
        </div>
      </div>
    </div>
  );
}
