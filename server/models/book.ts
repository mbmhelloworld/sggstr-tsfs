import { Document, model, Schema } from 'mongoose';
import Genre from './genre';
import Creator from './creator';

const bookSchema = new Schema<IBook>({
  title: String,
  creator: Creator,
  genre: Genre,
  buyLink: URL,
  cover: String,
});

interface IBook extends Document {
  title: string;
  creator: typeof Creator;
  genre: typeof Genre;
  buyLink: URL;
  cover: string;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const Book = model<IBook>('Book', bookSchema);

export default Book;
