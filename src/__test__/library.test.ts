import { describe } from "node:test";
import { Post } from "@/app/lib/definition";
import { PrismaClient } from "@prisma/client";
import { createPost } from "./../app/lib/action";

describe("Test action", () => {
  test("createPost", async () => {
    const post: Post = {
      id: "1",
      username: "test",
      content: "test",
      criteria: [
        {
          id: "1",
          content: "test",
        },
      ],
    };
    const prisma = new PrismaClient();
    const result = await createPost(post);
    const postResult = await prisma.post.findUnique({
      where: {
        id: post.id,
      },
      include: {
        criteria: true,
      },
    });
    expect(result).toEqual(postResult);
  });
});
