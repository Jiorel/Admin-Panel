export interface Post {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  author: string;
}

export interface AddPost extends Omit<Post, "id"> {}

export interface PatchPost extends AddPost {}

export interface EditPost {
  id: string;
}
