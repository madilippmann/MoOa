const express = require('express');
const router = express.Router();
const { asyncHandler, grabLikes, grabCommentCount } = require("./utils")
const db = require("../db/models");
const { requireAuth } = require('../auth.js');


/* GET home page. */
router.get('/', asyncHandler(async (req, res, next) => {
  console.log(res.locals.authenticated);
  const posts = await db.Post.findAll(
    {
      order: [
      ['id', 'DESC']],
      limit: 25
  })

  let counts = [];

  for (post of posts) {
    const likesCount = await grabLikes(post.id)
    const commentsCount = await grabCommentCount(post.id)

    const count = {
      likesCount,
      commentsCount
    }
    counts.push(count)
  }

  let sessionUsername;
  if (req.session.auth) {
    sessionUsername = req.session.auth.username;
  }

  console.log(posts)
  res.render('home', {
    title: 'Latest Exhibits',
    posts,
    counts,
    sessionUsername
  });
}));



router.get('/feed', requireAuth, asyncHandler(async (req, res, next) => {
  const userId = req.session.auth.userId;

  const follows = await db.Follower.findAll({
    where: { follower_id: userId },
    include: {
      model:
    }
  })

  const postIds = Array.from(follows).map(follow => follow.)
  console.log([...follows]);

  // const posts = await db.Post.findAll({
  //   where: { user_id: {
  //     [Op.in]: [...follows]
  //   }},
  //   order: [
  //     ['id', 'DESC']],
  //     limit: 25
  // })


  res.render('feed', {

  })

}))

module.exports = router;
