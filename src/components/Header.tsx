import React from "react";

type Props = {};

export default function Header({}: Props) {
  return (
    <div className="w-full flex items-center bg-teal-800 sm:h-12">
      <h1 className="font-normal text-xl text-white ml-4 leading-10 capitalize">Note using react typescript and CSS tailwind</h1>
    </div>
  );
}
