import { useParams } from 'react-router-dom';
import { books, Book } from '../data/books';
import { Container, Typography } from '@mui/material';

const BookPage = () => {
  const { id } = useParams<{ id: string }>();

  const book: Book | undefined = books.find((b) => b.id === id);

  if (!book) {
    return (
      <Container sx={{ mt: 4 }}>
        <Typography variant="h5" color="error">
          Book not found
        </Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        {book.title}
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
        Author: {book.author}
      </Typography>
      <Typography variant="body1">
        {book.description}
      </Typography>
    </Container>
  );
};

export default BookPage;
