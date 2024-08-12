import React from "react";
import Link from "next/link";

// ヘッダー
export default function Header() {
  return (
    <div className="bg-amber-700 p-5 border-b-4 font-serif">
      <Link href={"/"}>
        <h1 className="text-2xl font-bold text-stone-100">Value Hunting</h1>
      </Link>
    </div>
  );
}
