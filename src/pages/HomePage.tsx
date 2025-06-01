import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { books as booksData, Book } from '../data/books';
import BookCard from '../components/BookCard/BookCard';

interface LayoutContext {
  searchQuery: string;
}

const HomePage = () => {
  const { searchQuery } = useOutletContext<LayoutContext>();
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('books');
    setBooks(saved ? JSON.parse(saved) : booksData);
  }, []);

  const filteredBooks = books.filter((book) =>
    `${book.title} ${book.author}`.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Books catalog:
      </Typography>
      <Grid container spacing={2}>
        {filteredBooks.map((book) => (
          <Grid item xs={12} sm={6} md={4} key={book.id}>
            <BookCard book={book} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomePage;
