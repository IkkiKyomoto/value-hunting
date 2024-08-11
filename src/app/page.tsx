import Image from "next/image";
import React from "react";
import ExpForm from "@/app/components/top/expForm";

import "./style.css";

export default function Home() {
  return (
    <div className="page">
      <ExpForm />
    </div>
  );
}
