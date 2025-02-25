"use client"
import { UserRound } from "lucide-react";

// Component: profile-user.tsx
export default function ProfileUser() {
  return (
    <button type="button" className="h-full flex justify-start items-center gap-2">
      <UserRound className="size-[22px] text-white"/>
      <span className="font-rubik text-lg font-light text-white">Iniciar Sesión</span>
    </button>
  );
}