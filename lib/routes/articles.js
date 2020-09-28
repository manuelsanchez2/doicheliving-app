const { Router } = require("express");
const router = Router();

const { readArticles, readArticle } = require("../models/articles");

router.get("/", async (request, response) => {
  try {
    const articles = await readArticles();
    if (!articles) {
      response.status(404).send(`Articles not found`);
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
    const article = await readArticle(id);

    response.json(article);
  } catch (error) {
    response.status(500).send(error.message);
  }
});

module.exports = router;
