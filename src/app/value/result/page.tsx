import React from "react";
import ValueDisplay from "@/app/components/value/result/valueDisplay";
import Link from "next/link";

export default function Page({searchParams}: {  searchParams: { [key: string]: string | string[] | undefined }}) {
    const criteria = searchParams["criteria"] as string[];
  return (
    <div className="mx-5 mb-10">
        <h2 className="text-2xl font-bold my-5 text-center">結果</h2>
      <p>あなたの企業選びの軸は…</p>
      <ValueDisplay criteria={criteria} />
        <p className="mt-5 text-center"><Link className="border-b-2" href={'/'}>トップ画面へ戻る</Link></p>
    </div>
  );
}
