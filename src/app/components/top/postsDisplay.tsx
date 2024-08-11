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

/*
import { useState } from 'react';

const Carousel = () => {
  const items = [
    '社会貢献ができる',
    '環境に配慮',
    '向上心を持って働ける',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex items-center justify-center space-x-4">
      <button
        onClick={handlePrev}
        className="text-lg text-gray-600 hover:text-black"
      >
        &lt;
      </button>
      <div className="text-center">
        <p className="text-sm text-gray-500">みんなの企業選びの軸</p>
        <p className="text-lg font-semibold">{items[currentIndex]}</p>
      </div>
      <button
        onClick={handleNext}
        className="text-lg text-gray-600 hover:text-black"
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
*/
