import { Request, Response } from 'express';
import { Post } from '../models/Post';
import { PostService } from '../services/PostService';

const postService = new PostService();

export const createPost = (req: Request, res: Response) => {
  const post: Post = req.body;
  postService.addPost(post);
  res.status(201).json(post);
};

export const getPosts = (req: Request, res: Response) => {
  const posts = postService.getPosts();
  res.json(posts);
};