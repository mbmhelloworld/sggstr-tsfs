import Book from '../../../../server/models/book';
import User from '../../../../server/models/user';
export class Post {
  id?: string;
  title?: string;
  text?: string;
  upVote?: number;
  downVote?: number;
  object?: typeof Book;

  user?: typeof User;
}
