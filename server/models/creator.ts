import { Document, model, Schema } from 'mongoose';

const creatorSchema = new Schema<ICreator>({
  lastName: String,
  foreName: String,
  origin: String,
});

interface ICreator extends Document {
  lastName: string;
  foreName: string;
  origin: string;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const Creator = model<ICreator>('Creator', creatorSchema);

export default Creator;
