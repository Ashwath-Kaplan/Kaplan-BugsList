const { GraphQLObjectType, GraphQLString, GraphQLInt } = require("graphql");

const BugType = new GraphQLObjectType({
  name: "Bug",
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    status_id: { type: GraphQLInt },
    description: { type: GraphQLString },
    project_id: { type: GraphQLInt },
    asignee_id: { type: GraphQLInt },
  },
});

module.exports = BugType;
