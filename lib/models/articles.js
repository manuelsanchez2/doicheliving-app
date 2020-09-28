const { getCollection } = require("../database");

async function readArticles() {
  const articleCollection = await getCollection("articles");
  const articles = await articleCollection.find({}).toArray();

  if (!articles) {
    return null;
  }
  return articles;
}

async function readArticle(id) {
  const articleCollection = await getCollection("articles");
  const article = await articleCollection.findOne({ id });

  if (!article) {
    return null;
  }
  return article;
}

exports.readArticles = readArticles;
exports.readArticle = readArticle;
