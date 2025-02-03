import prisma from "../config/prismaClient";

export const getAllPosts = async () => {
  return await prisma.post.findMany();
};

export const getPostById = async (id: string) => {
  return await prisma.post.findUnique({ where: { id } });
};

export const createPosts = async (title: string, content: string, authorId: string) => {
  return await prisma.post.create({ data: { title, content, authorId } });
};

export const updatePost = async (id: string, title: string, content: string) => {
  return await prisma.post.update({
    where: { id },
    data: { title, content },
  });
};

export const deletePost = async (id: string) => {
  return await prisma.post.delete({ where: { id } });
};
