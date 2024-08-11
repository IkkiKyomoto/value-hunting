import React from "react";

export default function ValueDisplay({ criteria }: { criteria: string[] }) {
  return (
    <div>
      {criteria.map((criterion, index) => {
        return <p key={index}>{index + 1 + "." + criterion}</p>;
      })}
    </div>
  );
}
