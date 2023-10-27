import { Post } from '../models/Post';

export class PostRepository {
  private posts: Post[] = [];

  addPost(post: Post): void {
    this.posts.push(post);
  }

  getPosts(): Post[] {
    return this.posts;
  }
}