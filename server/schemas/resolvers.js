const { AuthenticationError } = require("apollo-server-express");
const { User, Card } = require("../models");
//const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    helloWorld: () => {
      return "Hello world!";
    },
  },
};

module.exports = resolvers;
