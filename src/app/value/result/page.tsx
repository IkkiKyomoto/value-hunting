import React from "react";
import ValueDisplay from "@/app/components/value/result/valueDisplay";

export default function Page({searchParams}: {  searchParams: { [key: string]: string | string[] | undefined }}) {
    const criteria = searchParams["criteria"] as string[];
  return (
    <div>
      <p>あなたの企業選びの軸は…</p>
      <ValueDisplay criteria={criteria} />
    </div>
  );
}
