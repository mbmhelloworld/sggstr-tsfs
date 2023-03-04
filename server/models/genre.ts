import { Document, model, Schema } from 'mongoose';

const genreSchema = new Schema<IGenre>({
  name: String,
});

interface IGenre extends Document {
  name: string;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const Genre = model<IGenre>('Genre', genreSchema);

export default Genre;
