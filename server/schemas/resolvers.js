const { AuthenticationError } = require("apollo-server-express");
const { sign } = require("jsonwebtoken");
const { User, Card } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
        .select("-__v -password");
        return userData;
      }
      throw new AuthenticationError("Not logged in");
    },
   user: async () => {
     return User.find();
   },
   getCategoryCards: async (parent, {category}) => {
     return Card.find({category: category});
   },
   getSingleCard: async (parent, {_id}) => {
     return Card.findById({_id});
   },
   getUserCards: async (parent, args, context) => {
    if (context.user) {
      return Card.find({createdBy: context.user.username});
    }
    throw new AuthenticationError("Not logged in");
   }
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, {email, password}) => {
      const user = await User.findOne({email});
       if (!user) {
         throw new AuthenticationError("Incorrect credentials");
       }
       const validatePassword = await user.isCorrectPassword(password);

       if(!validatePassword){
         throw new AuthenticationError("Incorrect credentials");
       }

       const token = signToken(user);
       return { token, user };
    },

    addCard: async (parent, args, context) => {
      if(context.user) {
        const card = await Card.create({...args, createdBy: context.user.username});
        await User.findByIdAndUpdate({_id: context.user._id}, {$push:{Cards: card._id}}, {new: true});
        return card;
      }
      throw new AuthenticationError("You need to be logged in");
    },
    deleteCard: async (parent, {_id}, context) => {
      if(context.user) {
        const card = await Card.findOneAndDelete({_id: _id});
        if(!card) {
          throw new AuthenticationError("Card not found");
        }
        await User.findByIdAndUpdate({_id: context.user._id}, {$pull: {Cards: _id}}, {new: true});
        return card;
      }
      throw new AuthenticationError("You need to be logged in");
    }
  }
};

module.exports = resolvers;
