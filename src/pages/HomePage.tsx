import { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { books as booksData, Book } from '../data/books';
import BookCard from '../components/BookCard/BookCard';

const HomePage = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    setBooks(booksData);
  }, []);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Books catalog:
      </Typography>
      <Grid container spacing={2}>
        {books.map((book) => (
          <Grid item xs={12} sm={6} md={4} key={book.id}>
            <BookCard book={book} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomePage;
