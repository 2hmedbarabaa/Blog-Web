import { Request, Response } from 'express';
import prisma from '../config/prismaClient';
import { getPostById,createPosts } from '../services/postService';

export const getPosts = async (req: Request, res: Response) => {
  try {
    const id:string = '1'
    const posts = await getPostById(id)
    res.status(200).json({data:posts})
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const createPost = async (req: Request, res: Response) => {
  const { title, content } = req.body;
  const id:string = '1'
  const post = await createPosts(title,content,id)
  res.status(201).json({data:post})
  try {
    if (!req.user?.id) {
      res.status(401).json({ message: 'Not authenticated' });
      return;
    }

    const newPost = await prisma.post.create({
      data: {
        title,
        content,
        author: {
          connect: { id: req.user.id }
        }
      },
      include: {
        author: {
          select: {
            id: true,
            email: true
          }
        }
      }
    });

    res.status(201).json(newPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};