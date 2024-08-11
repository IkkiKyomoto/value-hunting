import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-amber-700 p-5 border-b-4 font-serif">
      <Link href={'/'}><h1 className="text-2xl font-bold text-stone-100">バリューハンティング</h1></Link>
    </div>
  );
}
