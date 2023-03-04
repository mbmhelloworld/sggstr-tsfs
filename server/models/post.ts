import { Document, model, Schema } from 'mongoose';
import Book from './book';
import User from './user';

const postSchema = new Schema<IPost>({
  title: String,
  text: String,
  upVote: Number,
  downVote: Number,
  object: Book,
  user: User,
});

interface IPost extends Document {
  title: string;
  text: string;
  upVote: number;
  downVote: number;
  object: typeof Book;
  user: typeof User;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const Post = model<IPost>('Post', postSchema);

export default Post;
