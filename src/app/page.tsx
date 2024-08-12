"use server";

import React from "react";
import ExpForm from "@/app/components/top/expForm";
import styles from "@/app/common.module.css";
import PostsDisplay from "@/app/components/top/postsDisplay";
import { Suspense } from "react";
import "./style.css";

export default async function Home() {
  return (
    <div className="mx-5 mb-10">
      <div>
        <h2 className={styles.h2}>みんなの企業選びの軸</h2>
        <Suspense fallback={"ロード中"}>
          <PostsDisplay />
        </Suspense>
      </div>
      <div className="mt-5">
        <h2 className={styles.h2}>経験を入力</h2>
        <ExpForm />
      </div>
    </div>
  );
}
