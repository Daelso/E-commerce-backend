const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try{
    const getAllTags = await Tag.findAll({
      include: {
        model: Product,
      }
    });
    res.status(200).json(getAllTags);      
  }
  catch(err){
    console.log(err)
    res.status(500).json(err)
  }
});

router.get('/:id', async(req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try{
    const getOneTag = await Tag.findOne({
      where:{
        id: req.params.id
      },
      include:{
        model:Product
      }
    })
    res.status(200).json(getOneTag)
  }
  catch(err){
    console.log(err)
    res.status(500).json(err)
  }
});

router.post('/', async(req, res) => {
  // create a new tag
  try{
    const newTag = await Tag.create({
      tag_name: req.body.tag_name

    })
    res.status(200).json(newTag)
  }
  catch(err){
    console.log(err),
    json.status(500).json(err)
  }
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
