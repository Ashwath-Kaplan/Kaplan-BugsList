const { GraphQLSchema, GraphQLObjectType } = require("graphql");
const QueryFields = require("./Queries");
const { addBug, updateBug } = require("./Mutations/BugsMutation");

const RootQueryType = new GraphQLObjectType({
  name: "Query",
  fields: {
    bugs: QueryFields.bug,
    employees: QueryFields.employee,
    projects: QueryFields.project,
    statuses: QueryFields.status,
  },
});

const RootMutationType = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addBug: addBug,
    updateBug: updateBug,
  },
});

module.exports = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType,
});
