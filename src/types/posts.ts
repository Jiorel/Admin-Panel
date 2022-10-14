export interface Post {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  author: string;
}

export interface AddPostParams {
  title: string;
  description: string;
  image: string;
  date: string;
  author: string;
}

export interface PatchPostParams {
  title: string;
  description: string;
  image: string;
  date: string;
  author: string;
}

export interface EditPostParams {
  id: string;
}
