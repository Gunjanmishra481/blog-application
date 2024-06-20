import express from 'express';
const router = express.Router();

// Sample blog posts
let posts = [];

// Home route to display all posts
router.get('/', (req, res) => {
  res.render('index', { posts });
});

// Route to render new post form
router.get('/new', (req, res) => {
  res.render('new-post');
});

// Route to create a new post
router.post('/new', (req, res) => {
  const { title, content } = req.body;
  posts.push({ title, content });
  res.redirect('/');
});

// Route to render edit post form
router.get('/edit/:id', (req, res) => {
  const { id } = req.params;
  const post = posts[id];
  res.render('edit-post', { post, id });
});

// Route to update a post
router.post('/edit/:id', (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  posts[id] = { title, content };
  res.redirect('/');
});

// Route to delete a post
router.post('/delete/:id', (req, res) => {
  const { id } = req.params;
  posts.splice(id, 1);
  res.redirect('/');
});

export default router;

