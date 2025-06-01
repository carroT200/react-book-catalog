import { Container, Typography } from '@mui/material';

const NotFoundPage = () => {
  return (
    <Container sx={{ mt: 4, textAlign: 'center' }}>
      <Typography variant="h3" color="error" gutterBottom>
        404
      </Typography>
      <Typography variant="h5">Page not found</Typography>
    </Container>
  );
};

export default NotFoundPage;
