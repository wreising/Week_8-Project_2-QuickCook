const router = require('express') //.Router()
const { Recipe } = require('../models')

// const recipes = require("../controllers/controller.js");

router.get('/recipes', async (req, res) => {
  try {
    const recipeData = await Recipe.findAll()
    res.status(200).json(recipeData);
  } catch (err) {
    res.status(500).json(err)
  }
})

router.get('/recipes/:id', async (req, res) => {
  try {
    const recipeData = await Recipe.findByPk(req.params.id)

    if (!recipeData) {
      res.status(404).json({ message: 'No recipe found with this id!' })
      return
    }

    res.status(200).json(recipeData);
  } catch (err) {
    res.status(500).json(err)
  }
})

router.post('/recipes', async (req, res) => {
  try {
    const recipeData = await Recipe.create(req.body)
    res.status(200).json(recipeData);
  } catch (err) {
    res.status(400).json(err)
  }
})

router.delete('/recipes/:id', async (req, res) => {
  try {
    const recipeData = await Recipe.destroy({
      where: {
        id: req.params.id
      }
    })
    if (!recipeData) {
      res.status(404).json({ message: 'No recipe found with this id!' })
      return;
    }
    res.status(200).json(recipeData);
  } catch (err) {
    res.status(500).json(err)
  }
})



// router.post("/", recipes.create);

// router.get("/", recipes.findAll);

// router.get("/:id", recipes.findOne);

// router.put("/:id", recipes.update);

// router.delete("/:id", recipes.delete);

// router.delete("/", recipes.deleteAll);
//__.use("/api/recipes", router);


module.exports = router


// const { response } = require('express');
// const res = require('express/lib/response');
// const { UUID } = require('sequelize/types');
// const { Recipe } = require('../models')

// GET article by id
// router.get('/article/:id', function (req, res) {
//   Article.findById(req.params.id, function (err, DBdocumentById) {
//     if (err) {

//       console.log(err.message);
//       res.redirect('/');
//       return;

//     } else {

//       // Output HTML from DBdocument markdow encoded
//       // Markdow to html parser
//       let DBdocumentById_body_md2html = markdown.toHTML(DBdocumentById.body);

//       res.render('article.pug', {

//         // Pass DBdocumentById
//         this_DBdocumentById_title: DBdocumentById.title,
//         this_DBdocumentById_author: DBdocumentById.author,

//         this_DBdocumentById_body: DBdocumentById_body_md2html,

//         this_DBdocumentById_id: DBdocumentById.id
//       });
//     }
//   });
// });


