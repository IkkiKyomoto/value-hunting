'use client'

import React, {useState} from "react";
import Checkbox from '@mui/material/Checkbox';
import { FormControlLabel, FormGroup } from "@mui/material";
import { sendValue } from "@/app/util/data";
import { useRouter } from "next/navigation";

export default function ValuesCheckForm({ values }: { values:string[] }) {
    const maxCheckedValues = 3;
    const [checkedValues, setCheckedValues] = useState<string[]>([]);
    const router = useRouter()
    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const criteria = await sendValue(checkedValues.join(','));
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
    <form onSubmit={handleSubmit}>
      <FormGroup className="ml-5">
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
        <button type="submit">送信する</button>
      </div>
    </form>
  );
}
