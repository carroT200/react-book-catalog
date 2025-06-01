import { AppBar, Toolbar, Typography, Button, TextField, Box } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { RouteNames } from '../../router/route-names';

interface HeaderProps {
  onSearch: (query: string) => void;
}

const Header = ({ onSearch }: HeaderProps) => {
  const [query, setQuery] = useState('');
  const location = useLocation();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <AppBar position="static">
      <Toolbar sx={{ gap: 2, flexWrap: 'wrap' }}>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Book Catalog
        </Typography>

        <Button
          color="inherit"
          component={Link}
          to={RouteNames.HOME}
          disabled={location.pathname === RouteNames.HOME}
        >
          All Books
        </Button>

        <Button
          color="inherit"
          component={Link}
          to={RouteNames.ADD_BOOK}
          disabled={location.pathname === RouteNames.ADD_BOOK}
        >
          Add Book
        </Button>

        <Box sx={{ flexGrow: 1, maxWidth: 300 }}>
          <TextField
            fullWidth
            size="small"
            variant="outlined"
            placeholder="Search..."
            value={query}
            onChange={handleInputChange}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
