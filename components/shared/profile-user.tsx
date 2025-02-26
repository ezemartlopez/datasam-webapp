"use client"
import { UserRound } from "lucide-react";

// Component: profile-user.tsx
export default function ProfileUser() {
  return (
    <div className="h-full flex justify-start items-center gap-2 group">
      <UserRound className="size-[22px] text-white group-hover:text-blue-500 transition-colors duration-500"/>
      <span className="font-rubik text-base md:text-lg font-light text-white group-hover:text-blue-500 transition-colors duration-500">Iniciar Sesión</span>
    </div>
  );
}