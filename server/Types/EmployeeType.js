const { GraphQLObjectType, GraphQLString, GraphQLInt } = require("graphql");

const EmployeeType = new GraphQLObjectType({
  name: "Employee",
  fields: {
    id: { type: GraphQLInt },
    first_name: { type: GraphQLString },
    last_name: { type: GraphQLString },
  },
});

module.exports = EmployeeType;
