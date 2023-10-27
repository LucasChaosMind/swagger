import { Post } from '../models/Post';

import { PostRepository } from '../repositories/PostRepository';
  
export class PostService {
    private postRepository = new PostRepository();
  
    addPost(post: Post): void {
      this.postRepository.addPost(post);
    }
  
    getPosts(): Post[] {
      return this.postRepository.getPosts();
    }
}