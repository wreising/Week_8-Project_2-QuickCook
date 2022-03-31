const router = require('express').Router()
const { Recipe } = require('../models')

// GET article by id
router.get('/article/:id', function (req, res) {
  Article.findById(req.params.id, function (err, DBdocumentById) {
    if (err) {

      console.log(err.message);
      res.redirect('/');
      return;

    } else {

      // Output HTML from DBdocument markdow encoded
      // Markdow to html parser
      let DBdocumentById_body_md2html = markdown.toHTML(DBdocumentById.body);

      res.render('article.pug', {

        // Pass DBdocumentById
        this_DBdocumentById_title: DBdocumentById.title,
        this_DBdocumentById_author: DBdocumentById.author,

        this_DBdocumentById_body: DBdocumentById_body_md2html,

        this_DBdocumentById_id: DBdocumentById.id
      });
    }
  });
});

module.exports = router