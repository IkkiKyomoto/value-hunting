'use server'

import { Post } from "@/app/lib/definition";
import { PrismaClient } from "@prisma/client";


export async function createPost(post: Post) {
  const prisma = new PrismaClient();
  const result = await prisma.post.create({
    data: {
      id: post.id,
      username: post.username,
      criteria: {
        createMany: {
            data: post.criteria.map((c) => ({ content: c.content }))
        }
      }
    },
    include: {
      criteria: true
    }
  });

  return result;
}

export async function getPostByDate() {
    const perPage = 10
    const prisma = new PrismaClient();
    const resPosts:Post[] = await prisma.post.findMany({
        select: {
            id: true,
            username: true,
            criteria: {
                select: {
                    id: true,
                    content: true
                }
            }
        },
        take: perPage,
        orderBy: {
        createdAt: 'desc',
        }
    });
    
    return resPosts;
}