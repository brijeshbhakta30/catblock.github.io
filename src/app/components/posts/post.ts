export class Post {
  id: number;
  title: string;
  author: {
    name: string,
    login: string,
    email: string
  };
  categories: any;
  tags: any;
  comments: any;
  date: string;
  isPublished: boolean;
}
