const { UUID } = require('sequelize');
const db = require("../models");
const Recipe = db.quickcook;

module.exports = {
  create(req, res){
    if (!req.body.title){
      res.status(400).send({
        message: `Content cannot be empty.`
      })
      return
    }
    const recipe = {
      title: req.body.title,
      description: req.body.description,
    };
    Recipe.create(recipe)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
          err.message ||`Error occurred while creating the Recipe.`
        });
      });
    },
findAll(req, res){
  const title = req.query.title;
  let condition = title ? {
    title: {
      [Op.like]: `%${title}%`} } : null;
  Recipe.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || `Error occurred while retrieving recipes.`
      });
    });
},
findOne(req, res) {
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
},
update(req, res){
  const id = req.params.id;
  Recipe.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
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
},
delete(req, res){
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
},
deleteAll(req, res) {
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
},
};