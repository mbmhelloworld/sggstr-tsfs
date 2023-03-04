import Creator from '../../../../server/models/creator';
import Genre from '../../../../server/models/genre';

export class Book {
  id?: string;
  title?: string;
  creator?: typeof Creator;
  genre?: typeof Genre;
  buyLink?: URL;
  cover?: string;
}
