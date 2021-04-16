const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const catData = await Category.findAll({
      include: [ { model: Product } ],
    });
    res.status(200).json(catData);
  } catch (err) {
    res.status(500).json(err)
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const catData = await Category.findByPk(req.params.id, {
      include: [ { model: Product } ],
    });

    if (!catData) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }

    res.status(200).json(catData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const catData = await Category.create({category_name: req.body.category_name,});
    res.status(200).json(catData);
  } catch (err) {
    res.status(400).json(err);
    console.log(err)
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const catData = await Category.update(
      {category_name: req.body.category_name}, // what is changing
      {where: {id: req.params.id}}); // where it's changing
    res.status(200).json(catData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const catData = await Category.destroy({
      where: {id: req.params.id,},
    });

    if (!catData) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }

    res.status(200).json(catData);
    console.log('Deleted!')
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
