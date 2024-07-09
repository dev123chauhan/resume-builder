// import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, CardMedia } from '@material-ui/core';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "How to Write a Great Resume",
      excerpt: "Learn the best tips for writing a professional resume...",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 2,
      title: "Resume Builder Features",
      excerpt: "Explore the features of our resume builder...",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 3,
      title: "The Importance of a Well-Crafted Resume",
      excerpt: "Understand why a well-crafted resume is essential for job hunting...",
      image: "https://via.placeholder.com/150"
    }
  ];

  return (
    <Container style={{marginTop:"6rem"}}>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Blog
        </Typography>
        <Grid container spacing={4}>
          {posts.map((post) => (
            <Grid item key={post.id} xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  alt={post.title}
                  height="140"
                  image={post.image}
                  title={post.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {post.excerpt}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Blog;
