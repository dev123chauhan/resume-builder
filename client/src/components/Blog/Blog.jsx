import { Container, Typography, Box, Grid, Card, CardContent, CardMedia } from '@material-ui/core';
import Blog1 from "../../assets/Blog 1.jpg"
import Blog2 from "../../assets/Blog 2.jpg"
import Blog3 from "../../assets/Blog 3.jpg"
const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "How to Write a Great Resume",
      excerpt: "Learn the best tips for writing a professional resume...",
      image: Blog1
    },
    {
      id: 2,
      title: "Resume Builder Features",
      excerpt: "Explore the features of our resume builder...",
      image: Blog2
    },
    {
      id: 3,
      title: "The Importance of a Well-Crafted Resume",
      excerpt: "Understand why a well-crafted resume is essential for job hunting...",
      image: Blog3
    },
  
  ];
  const maxTitleLength = 30;
  const maxExcerptLength = 52;
  const truncateText = (title, maxLength) => {
    if (title.length <= maxLength) return title;
    return title.substring(0, maxLength) + '...';
  };
  
  return (
    <Container style={{marginTop:"6rem"}}>
      <Box my={4}>
        <Typography style={{fontWeight:"bold"}}  variant="h4" component="h1" gutterBottom>
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
                  {truncateText(post.title, maxTitleLength)}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  {truncateText(post.excerpt, maxExcerptLength)}
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
