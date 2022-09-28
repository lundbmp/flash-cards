const { AuthenticationError } = require("apollo-server-express");
const { User, Card } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
    Query: {},

    Mutation: {},
};

module.exports = resolvers;