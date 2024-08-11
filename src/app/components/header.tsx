import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <div className="header">
      <Link href={'/'}><h1 className="">バリューハンティング</h1></Link>
    </div>
  );
}
