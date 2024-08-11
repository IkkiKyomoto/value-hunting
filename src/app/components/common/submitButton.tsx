import React from 'react'

export default function SubmitButton({name = 'submitButton'}: {name?: string}) {
  return (
    <div className="flex items-center justify-center mt-10 bg-slate-800 h-10 rounded-full mx-5">
        <button type="submit" className="text-slate-50 w-full h-full" name={name}>送信する</button>
    </div>
  )
}
