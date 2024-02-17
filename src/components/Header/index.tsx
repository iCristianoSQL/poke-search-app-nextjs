"use client";

import Image from "next/image";
import TextInput from "../Inputs/Text";

export const Header = () => {
  return (
    <header className="w-full h-16 bg-transparent flex justify-between items-center border-b border-white border-solid">
      <Image src="/react-logo.png" width={64} height={64} alt="Logo" />
      <TextInput width="100vw" placeholder="Busque por um Pokemon" />
      <Image
        src="/github-icon.png"
        width={64}
        height={64}
        className="mr-2"
        alt="Github Icon"
      />
    </header>
  );
};
