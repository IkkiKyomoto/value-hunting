// データ型の定義

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
