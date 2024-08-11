'use client'

import React, {useState} from "react";
import Checkbox from '@mui/material/Checkbox';
import { FormControlLabel, FormGroup } from "@mui/material";
import { sendValue } from "@/app/util/data";
import { useRouter } from "next/navigation";
import SubmitButton from "../common/submitButton";

export default function ValuesCheckForm({ values }: { values:string[] }) {
    const maxCheckedValues = 3;
    const [checkedValues, setCheckedValues] = useState<string[]>([]);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const router = useRouter()
    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        event.currentTarget.submitButton.disabled = true
        var criteria: string[] = [];
        if (checkedValues.length === 0) {
            event.currentTarget.submitButton.disabled = false
            setErrorMessage('最低1つ選択してください')

            return
        }
        event.currentTarget.submitButton.disabled = false
        try {
            criteria = await sendValue(checkedValues.join(','));
        } catch (error) {
            console.error(error);
            setErrorMessage('経験の送信に失敗しました')
            event.currentTarget.submitButton.disabled = true
            return
        }
        const queryLine = criteria.map((criterion) => {
            return `criteria=${criterion}`
          }
          ).join('&')
          router.push(`/value/result?${queryLine}`)
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.currentTarget.checked) {
            setCheckedValues([...checkedValues, event.currentTarget.name]);
        } else {
            setCheckedValues(checkedValues.filter((value) => value !== event.currentTarget.name));
        }
    }
  return (
    <form className="ml-5 mt-5" onSubmit={handleSubmit}>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      <FormGroup className="">
        {values.map((value, index) => {
          return (
            <FormControlLabel
              key={index}
              control={
                <Checkbox
                  name={`${value}`}
                  color="primary"
                  onChange={handleChange}
                  disabled={checkedValues.length >= maxCheckedValues && !checkedValues.includes(value)}
                />
              }
              label={value}
            />
          );
        })}
      </FormGroup>
      <div>
        <SubmitButton />
        </div>
    </form>
  );
}
