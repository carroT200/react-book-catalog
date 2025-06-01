import { Container, Typography, TextField, Button, Box } from '@mui/material';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { bookValidationSchema } from '../validation/bookSchema';
import { Book, books } from '../data/books';

const AddBookPage = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      title: '',
      author: '',
      description: '',
    },
    validationSchema: bookValidationSchema,
    onSubmit: (values) => {
      const newBook: Book = {
        id: uuidv4(),
        ...values,
      };

      books.push(newBook);
      localStorage.setItem('books', JSON.stringify(books));

      toast.success('Book succesfully added!');
      navigate('/');
    },
  });

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Add book
      </Typography>
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
      >
        <TextField
          label="Title"
          name="title"
          value={formik.values.title}
          onChange={formik.handleChange}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
          fullWidth
        />

        <TextField
          label="Author"
          name="author"
          value={formik.values.author}
          onChange={formik.handleChange}
          error={formik.touched.author && Boolean(formik.errors.author)}
          helperText={formik.touched.author && formik.errors.author}
          fullWidth
        />

        <TextField
          label="Description"
          name="description"
          multiline
          minRows={3}
          value={formik.values.description}
          onChange={formik.handleChange}
          error={formik.touched.description && Boolean(formik.errors.description)}
          helperText={formik.touched.description && formik.errors.description}
          fullWidth
        />

        <Button type="submit" variant="contained">
          Save
        </Button>
      </Box>
    </Container>
  );
};

export default AddBookPage;
