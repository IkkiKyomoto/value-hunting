import React from "react";
import { Post } from "@/app/lib/definition";

export default function PostCard({ post }: { post: Post }) {
  if (post.criteria.length > 3) {
    post.criteria = post.criteria.slice(0, 3);
  }
  return (
    <div className="border-2 p-5 border-slate-500 w-72 h-80">
      <h3 className="border-b-2">{post.username + "さん"}</h3>
      <ul className="text-left">
        {post.criteria.map((criterion, index) => {
          return (
            <li className="text-sm mt-5 border-b-2" key={index}>
              <p>{`${index + 1}.${criterion.content}`}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
