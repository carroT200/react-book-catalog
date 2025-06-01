import { useParams, Link } from 'react-router-dom';
import { Container, Typography, Button } from '@mui/material';
import { books } from '../data/books';

const BookPage = () => {
  const { id } = useParams<{ id: string }>();

  const book = books.find((b) => b.id === id);

  if (!book) {
    return (
      <Container sx={{ mt: 4 }}>
        <Typography variant="h5" color="error" gutterBottom>
          Book not found
        </Typography>
        <Button component={Link} to="/" variant="contained">
          Back to the book list
        </Button>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        {book.title}
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
        Автор: {book.author}
      </Typography>
      <Typography variant="body1">{book.description}</Typography>
    </Container>
  );
};

export default BookPage;
