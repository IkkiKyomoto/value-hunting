//価値選択ページ

import React from "react";
import ValuesCheckForm from "@/app/components/value/valuesCheckForm";
import styles from "@/app/common.module.css";

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const values = searchParams["values"] as string[];

  return (
    <div className="mx-4 mb-10">
      <h2 className={styles.h2}>経験を選択</h2>
      <p className="">あなたにとって重要な価値を最大3つ選択しましょう</p>
      <div>
        <ValuesCheckForm values={values} />
      </div>
    </div>
  );
}
