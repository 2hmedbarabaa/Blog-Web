import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const posts = await prisma.post.findMany({ include: { author: true } });
    return res.status(200).json(posts);
  }

  if (req.method === "POST") {
    const { title, content, authorId } = req.body;
    const post = await prisma.post.create({ data: { title, content, authorId } });
    return res.status(201).json(post);
  }

  res.status(405).end();
}
