export type Criterion = {
  id?: string;
  content: string;
  createdAt?: Date;
};

export type Post = {
  id?: string;
  username: string;

  criteria: Criterion[];
  createdAt?: Date;
};

/*

model Criterion {
  id String @id @default(uuid())
  content String
  post Post @relation(fields: [postId], references: [id])
  postId String
  createdAt DateTime @default(now())
}

*/
