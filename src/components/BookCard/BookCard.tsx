import { Card, CardContent, Typography, CardActionArea } from '@mui/material';
import { Link, generatePath } from 'react-router-dom';
import { Book } from '../../data/books';
import { RouteNames } from '../../router/route-names';

interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
  const bookDetailsPath = generatePath(RouteNames.BOOK_DETAILS, { id: book.id });

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardActionArea
        component={Link}
        to={bookDetailsPath}
        sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}
      >
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="h6" gutterBottom>
            {book.title}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            {book.author}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
            }}
          >
            {book.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default BookCard;
