const router = require('express').Router()
const { response } = require('express');
const res = require('express/lib/response');
const { UUID } = require('sequelize/types');
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


// // CREATE

//will create new recipes
router.post('./insert', (req, res) => {
  console.info(`${req.method} request received to submit recipe`);

  //I know I'm supposed to do this to make it faster.. but is it necessary? I guess we can see when we test it. 
  const { recipe_name, description, ingredient1, q1quantity, ingredient2, q2quantity, ingredient3, q3quantity, ingredient4, q4quantity, ingredient5, q5quantity, instructions, vegetarian, difficultyHard, photoLink, source, meal } = req.body;

  if (recipe_name && description && ingredient1 && q1quantity && ingredient2 && q2quantity && ingredient3 && q3quantity && ingredient4 && q4quantity && ingredient5 && q5quantity && instructions && vegetarian && difficultyHard && photoLink && source && meal) {

    const newRecipe = {
      recipe_name,
      description,
      ingredient1,
      q1quantity,
      ingredient2,
      q2quantity,
      ingredient3,
      q3quantity,
      ingredient4,
      q4quantity,
      ingredient5,
      q5quantity,
      instructions,
      vegetarian,
      difficultyHard,
      photoLink,
      source,
      meal,
      id: uuid(),
    };

    readAndAppend(newRecipe, './db/schema.sql') // not entirely sure about the routes here...

    const response = {
      staus: 'success',
      body: newRecipe,
    };

    res.json(response);
  } else {
    res.json(`Error in posting feedback`);
  }
});



// //READ

//will retrieve all objects

// router.findAll = (req, res) => {
//   const title = req.query.title;
//   let condition = title ? {
//     title: {
//       [Op.like]: `%${title}%`
//     }
//   }
//   Recipe.findAll({ where: condition })
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || `Error occurred while retrieving recipes.`
//       });
//     });
// };

//will retrieve one object

recipe.findOne = (req, res) => {
  const id = req.params.id;
  Recipe.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Error retrieving Recipe with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Error retrieving Recipe with id=` + id
      });
    });
};

// // UPDATE

// will update with new recipes
router.update = (req, res) => {
  const id = req.params.id;
  Recipe.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num === 1) {
        res.send({
          message: "Recipe was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Recipe with id=${id}. `
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `error updating Recipe with id=` + id
      });
    });
};



// // DELETE

//will delete one recipe
router.delete = (req, res) => {
  const id = req.params.id;
  Recipe.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num === 1) {
        res.send({
          message: 'Recipe was deleted successfully.'
        });
      } else {
        res.send({
          message: `Cannot delete Recipe with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Could not delete Recipe with id=` + id
      });
    });
};

//will delete all recipes

router.deleteAll = (req, res) => {
  Recipe.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.status(500).send({
        message:
          err.message || 'Error occurred removing all recipes.'
      });
    });
};


module.exports = router