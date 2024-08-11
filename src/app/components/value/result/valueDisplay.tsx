import React from "react";

export default function ValueDisplay({ criteria }: { criteria: string[] }) {
  return (
    <div>
      {criteria.map((criterion, index) => {
        return (
          <p className="mt-5 " key={index}>
            {index + 1 + "."} <span className="text-red-700">{criterion}</span>
          </p>
        );
      })}
    </div>
  );
}
