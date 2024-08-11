"use client";

import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { useRouter } from "next/navigation";
import { extractValue } from "@/app/util/data";
import SubmitButton from "../common/submitButton";

function ExpInput({ id }: { id: string }) {
  return (
    <div className="border-b-2 w-full mt-5">
      <input
        id={id}
        type="text"
        name="exp"
        placeholder="ここにあなたの経験を入力しましょう"
        className="w-full"
      />
    </div>
  );
}

export default function ExpForm() {
  const [inputs, setInputs] = useState([
    <div key={"0"}>
      <ExpInput id={"0"} />
    </div>,
  ]);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();
  function handleAddClick() {
    const newInputs = inputs.concat(
      <div key={inputs.length.toString()}>
        <ExpInput id={inputs.length.toString()} />
      </div>,
    );
    setInputs(newInputs);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.submitButton.disabled = true;

    const expsInputs = document.getElementsByName("exp");

    const exps: string[] = [];

    expsInputs.forEach((expInput) => {
      if ((expInput as HTMLInputElement).value !== "") {
        exps.push((expInput as HTMLInputElement).value);
      }
    });
    if (exps.length === 0) {
      event.currentTarget.submitButton.disabled = false;
      setErrorMessage("1つ以上入力してください");
      return;
    }
    const expsLine = exps.join(",");
    var values: string[] = [];
    try {
      values = await extractValue(expsLine);
    } catch (error) {
      console.error(error);
      event.currentTarget.submitButton.disabled = true;
      setErrorMessage("経験の送信に失敗しました");
      return;
    }

    const queryLine = values
      .map((value) => {
        return `values=${value}`;
      })
      .join("&");
    router.push(`/value?${queryLine}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      {errorMessage && (
        <p className="text-red-500" id="error">
          {errorMessage}
        </p>
      )}
      <div>{inputs}</div>
      <div>
        <div>
          <p className="mt-5 text-center">
            <span
              id="add-input"
              onClick={handleAddClick}
              className="inline-block"
            >
              <AddIcon />
              経験を追加
            </span>
          </p>
        </div>
      </div>
      <SubmitButton />
    </form>
  );
}
