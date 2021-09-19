const bcrypt = require('bcryptjs');

const resolvers = {
  Query: {
    async user(root, { id }, { models }) {
      return models.User.findById(id);
    },
    async test(root, { id }, { models }) {
      return "HELLO HACKRICE";
    },
    async allRecipes(root, args, { models }) {
      return models.Recipe.findAll();
    },
    async recipe(root, { id }, { models }) {
      return models.Recipe.findById(id);
    },
  },
  Mutation: {
    async createUser(root, { name, email, password }, { models }) {
      return models.User.create({
        name,
        email,
        password: await bcrypt.hash(password, 10),
      });
    },
    async getQuestion(root, {}, { models }) {
      var word_list = ["Hearts", "Flowers", "apple", "Stars", "Eyes", "Lips", "Trees", "Butterflies", "Leaves", "Diamonds"]
      var question = word_list[Math.floor(Math.random()*word_list.length)];
      console.log(question);
      return question;
    },
    async createRecipe(
      root,
      { userId, title, ingredients, direction },
      { models }
    ) {
      return models.Recipe.create({ userId, title, ingredients, direction });
    },
  },
  User: {
    async recipes(user) {
      return user.getRecipes();
    },
  },
  Recipe: {
    async user(recipe) {
      return recipe.getUser();
    },
  },
};

module.exports = resolvers;