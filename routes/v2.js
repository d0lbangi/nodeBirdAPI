const express = require('express');
const cors = require('cors');

const { verifyToken, apiLimiter, corsWhenDomainMatches } = require('../middlewares');
const { createToken, tokenTest, getMyPosts, getPostsByHashtag } = require('../controllers/v1');

const router = express.Router();

router.use(corsWhenDomainMatches);

router.use(cors({
  credentials: true,
}));

// POST /v2/token
router.post('/token', apiLimiter, createToken);

// POST /v2/test
router.post('/test', apiLimiter, verifyToken, tokenTest);

// GET /v2/posts/my
router.get('/posts/my', apiLimiter, verifyToken, getMyPosts);

// GET /v2/posts/hashtag/:title
router.get('posts/hashtag/:title', apiLimiter, verifyToken, getPostsByHashtag);

module.exports = router;