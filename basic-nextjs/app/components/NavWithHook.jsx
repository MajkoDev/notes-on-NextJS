"use client"

import React from "react";
import { useRouter } from "next/navigation";

const NavWithHook = () => {
  const router = useRouter();

  return (
    <nav className="flex flex-row justify-center gap-5 font-semibold text-lg">
      <button type="button" onClick={() => router.push("/")}>Home</button>
      <button type="button" onClick={() => router.push("/blog")}>Blog</button>
      <button type="button" onClick={() => router.push("/contact")}>Contact</button>
    </nav>
  );
};

export default NavWithHook;
