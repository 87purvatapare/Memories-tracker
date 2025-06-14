
const express = require('express');
const {
  getPosts,
  getPost,
  createPost,
  updatePost,
  likePost,
  deletePost
} = require('../controllers/posts'); // Make sure this file also uses CommonJS

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.get('/:id', getPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

module.exports = router; // ✅ use module.exports, not export default
