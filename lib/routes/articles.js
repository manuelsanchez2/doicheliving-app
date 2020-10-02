const { Router } = require("express");
const router = Router();

const Article = require("../models/articles");

router.get("/", async (request, response) => {
  try {
    const articles = await Article.find();
    if (!articles) {
      return response.status(404).send(`Articles not found`);
    }
    response.status(200).json(articles);
  } catch (error) {
    console.log(error);
    response.status(500).send(error.message);
  }
});

router.get("/:id", async (request, response) => {
  try {
    const id = request.params.id;
    const article = await Article.find(id);

    response.status(200).json(article);
  } catch (error) {
    response.status(500).send(error.message);
  }
});

module.exports = router;
