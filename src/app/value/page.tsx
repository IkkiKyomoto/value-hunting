import React from "react";
import ValuesCheckForm from "@/app/components/value/valuesCheckForm";

export default async function Page({searchParams}: {  searchParams: { [key: string]: string | string[] | undefined }}) {
    const values = searchParams["values"] as string[];


  return (
    <div>
      <p>あなたにとって重要な価値を最大3つ選択しましょう</p>
      <div>
        <ValuesCheckForm values={values}/>
      </div>
    </div>
  );
}
