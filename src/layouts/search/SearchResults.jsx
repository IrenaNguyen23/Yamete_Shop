import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Card, CardContent, Typography } from '@mui/material';
import './SearchResult.css';
const SearchResults = ({ results }) => (
  <Box sx={{ maxWidth: '800px', mx: 'auto', mt: 2 }}>
    {results.slice(0, 5).map((result) => (
      <Card key={result.id} sx={{ display: 'flex', mb: 2, boxShadow: 2 }}>
        <Link to={`/detail?productId=${result.id}`} style={{ textDecoration: 'none', color: 'inherit', flex: 1 }}>
          <CardContent sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
            <Box sx={{ flexGrow: 1, pr: 2 }}>
              <Typography variant="h6" component="h2">
                {result.title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                <strong>${result.price}</strong>
              </Typography>
            </Box>
            <img 
              src={`./images/items/${result.thumbnail}`} 
              alt={`Thumbnail for ${result.title}`} 
              style={{ height: '100px', borderRadius: '8px', objectFit: 'cover' }} 
            />
          </CardContent>
        </Link>
      </Card>
    ))}
  </Box>
);

export default SearchResults;
