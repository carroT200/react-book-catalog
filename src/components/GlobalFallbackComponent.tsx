import { FallbackProps } from 'react-error-boundary';
import { Box, Typography, Button } from '@mui/material';

const GlobalFallbackComponent = ({ error, resetErrorBoundary }: FallbackProps) => (
  <Box sx={{ p: 4, textAlign: 'center' }}>
    <Typography variant="h6" color="error" gutterBottom>
     Something wnet wrong
    </Typography>
    <Typography variant="body2" color="text.secondary" gutterBottom>
      {error.message}
    </Typography>
    <Button variant="contained" onClick={resetErrorBoundary}>
      Repeat
    </Button>
  </Box>
);

export default GlobalFallbackComponent;
