import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  category: String,
  dateline: String,
  slug: String
});

const Blog = mongoose.model('Blog', blogSchema);

export default Blog;