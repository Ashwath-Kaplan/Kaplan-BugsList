const { GraphQLObjectType, GraphQLString, GraphQLInt } = require("graphql");

const StatusType = new GraphQLObjectType({
  name: "Status",
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
  },
});

module.exports = StatusType;
