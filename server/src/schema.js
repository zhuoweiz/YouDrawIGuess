const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: Int!
    name: String!
    email: String!
    recipes: [Recipe!]!
  }

  type Recipe {
    id: Int!
    title: String!
    ingredients: String!
    direction: String!
    user: User!
  }

  type Query {
    user(id: Int!): User
    allRecipes: [Recipe!]!
    recipe(id: Int!): Recipe
    test: String
  }

  type Mutation {
    createUser(name: String!, email: String!, password: String!): User!
    createRecipe(
      userId: Int!
      title: String!
      ingredients: String!
      direction: String!
    ): Recipe!
  
    getQuestion: String
  }
`;

module.exports = typeDefs;