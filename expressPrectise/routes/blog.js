const express     = require('express')
const blog_data   = require('../data/blogData')
const router      = express.Router()

router.get('/', (req, res) => {
   res.render('home')
})
router.get('/blog', (req, res) => {
   blog_data.forEach(e => {
      console.log(e.title, e.content);
   });
   res.render('blogList', {
      blog_data : blog_data
   })
})

router.get('/blog/:slug', (req, res) => {
   myBlog = blog_data.filter((e) => {
      return e.slug == req.params.slug;
   })
   console.log(myBlog);

   res.render('blogContent', {
      data: myBlog[0]
   })
})

module.exports = router
