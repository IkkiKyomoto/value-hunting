"use client";

import React, { useState, useEffect } from "react";
import { Post } from "@/app/lib/definition";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import PostCard from "@/app/components/top/postCard";
import { getPostByDate } from "@/app/lib/action";

export default function PostsDisplay() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [status, setStatus] = useState("ロード中…");
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    (async () => {
      try {
        const posts = await getPostByDate();
        setPosts(posts);
        setStatus("");
      } catch (error) {
        console.error(error)
        setStatus("データの取得に失敗しました");
      }}
    )();
    console.log(posts);
  }, []);
  return (
    <div className="flex items-center justify-center space-x-2">


      <div>
      <button
        onClick={() => {
          const prev = (currentIndex + posts.length - 1) % posts.length;
          setCurrentIndex((current) => prev);
        }}
        className="rounded-full w-8 h-8 bg-slate-100"
        disabled={posts.length === 0}
      >
        <ArrowBackIosIcon className="text-lg text-gray-600 hover:text-black " />

      </button>
      </div>

      <div className="text-center">
        <PostCard post={posts[currentIndex]} status={status}/>
      </div>
  
      <button
        onClick={() => {
          const next = (currentIndex + 1) % posts.length;

          setCurrentIndex((current) => next);
        }}
        className="rounded-full w-8 h-8 bg-slate-100"
        disabled={posts.length === 0}
      >
        <ArrowForwardIosIcon className="text-lg text-gray-600 hover:text-black" />
      </button>

    </div>

  );
}

