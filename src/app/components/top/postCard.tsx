'use client'

import React, {useState} from "react";
import { Post } from "@/app/lib/definition";


export default function PostCard({ post, status }: { post: Post; status: string }) {
  return (
    <div className="border-2 p-5 border-slate-500 w-64 h-80">

      <h3 className="border-b-2">{post ? post.username + 'さん' : status}</h3>
      <ul className="text-left">
        {post &&
        post.criteria.slice(0, 3).map((criterion, index) => {
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
