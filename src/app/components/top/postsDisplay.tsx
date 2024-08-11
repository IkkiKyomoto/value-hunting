"use client";

import React, { useState } from "react";
import { Post } from "@/app/lib/definition";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import PostCard from "@/app/components/top/postCard";

export default function PostsDisplay({ posts }: { posts: Post[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="flex items-center justify-center space-x-2">
      <div>
      <button
        onClick={() => {
          const prev = (currentIndex + posts.length - 1) % posts.length;
          setCurrentIndex((current) => prev);
        }}
        className="rounded-full w-8 h-8 bg-slate-100"
      >
        <ArrowBackIosIcon className="text-lg text-gray-600 hover:text-black " />

      </button>
      </div>
      <div className="text-center">
        <PostCard post={posts[currentIndex]} />
      </div>
      <button
        onClick={() => {
          const next = (currentIndex + 1) % posts.length;

          setCurrentIndex((current) => next);
        }}
        className="rounded-full w-8 h-8 bg-slate-100"
      >
        <ArrowForwardIosIcon className="text-lg text-gray-600 hover:text-black" />
      </button>
    </div>
  );
}

