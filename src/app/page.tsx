import Image from "next/image";
import React from "react";
import ExpForm from "@/app/components/top/expForm";
import styles from '@/app/common.module.css'

import "./style.css";

export default function Home() {
  return (
    <div className="mx-5">
      <h2 className={styles.h2}>経験を入力</h2>
      <ExpForm />
    </div>
  );
}
