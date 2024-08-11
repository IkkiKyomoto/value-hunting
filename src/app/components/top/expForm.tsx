"use client";

import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import {useRouter} from 'next/navigation'
import { extractValue } from "@/app/util/data";


export default function ExpForm() {
  const [inputs, setInputs] = useState([
    <div key={0}>
      <input type="text" id="exp0" name="exp" />
    </div>,
  ]);
  const router = useRouter()
  function handleAddClick() {
    const newInputs = inputs.concat(
      <div key={inputs.length}>
        <input type="text" id={`exp${inputs.length}`} name="exp" />
      </div>,
    );
    setInputs(newInputs);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const expsInputs = document.getElementsByName("exp");

    const exps: string[] = [];
    expsInputs.forEach((expInput) => {
      exps.push((expInput as HTMLInputElement).value);
    });
    const expsLine = exps.join(',');
    const values = await extractValue(expsLine)
    const queryLine = values.map((value) => {
      return `values=${value}`
    }
    ).join('&')
    console.log(queryLine)
    router.push(`/value?${queryLine}`)

  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>経験を入力</label>
        {inputs}
      </div>
      <div>
        <div>
          <p>
            <span onClick={handleAddClick}>
              <AddIcon />
              経験を追加
            </span>
          </p>
        </div>
      </div>
      <button type="submit">送信する</button>
    </form>
  );
}
