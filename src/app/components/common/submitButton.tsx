import React from "react";

export default function SubmitButton({
  name = "submitButton",
}: {
  name?: string;
}) {
  return (
    <div className="flex items-center justify-center mt-10  h-10  mx-5">
      <button
        type="submit"
        className="text-slate-50 w-full h-full rounded-full bg-slate-800 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-800 disabled:border-2"
        name={name}
      >
        送信する
      </button>
    </div>
  );
}
