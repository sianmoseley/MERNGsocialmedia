const postsResolvers = require("./posts");
const usersResolves = require("./users");
const commentsResolves = require("./comments");

module.exports = {
  Post: {
    //can be done as arrow function like commentCount
    likeCount(parent) {
      console.log(parent);
      return parent.likes.length;
    },
    commentCount: (parent) => parent.comments.length,
  },
  Query: {
    ...postsResolvers.Query,
  },
  Mutation: {
    ...usersResolves.Mutation,
    ...postsResolvers.Mutation,
    ...commentsResolves.Mutation,
  },
  Subscription: {
    ...postsResolvers.Subscription,
  },
};
