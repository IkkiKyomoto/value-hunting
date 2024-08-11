import { describe } from "node:test";
import { sendValue } from "../app/util/data";

describe("Test action", () => {
  // test("createPost", async () => {
  //   const post: Post = {
  //     id: "1",
  //     username: "test",
  //     criteria: [
  //       {
  //         id: "1",
  //         content: "test",
  //       },
  //     ],
  //   };
  //   const prisma = new PrismaClient();
  //   const result = await createPost(post);
  //   const postResult = await prisma.post.findUnique({
  //     where: {
  //       id: post.id,
  //     },
  //     include: {
  //       criteria: true,
  //     },
  //   });
  //   expect(result).equal(postResult);
  // });
  test("function:sendValue", async () => {
    const valuesLine = "社会貢献, チームワーク, お客様第一";
    const criteria = await sendValue(valuesLine);
    console.log(criteria);
    expect(criteria);
  });
});
