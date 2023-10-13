const { GraphQLObjectType, GraphQLString, GraphQLInt } = require("graphql");

const ProjectType = new GraphQLObjectType({
  name: "Project",
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
  },
});

module.exports = ProjectType;
