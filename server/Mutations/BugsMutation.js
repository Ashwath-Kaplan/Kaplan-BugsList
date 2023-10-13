const { GraphQLInt, GraphQLString } = require("graphql");
const pool = require("../Database");
const Types = require("../Types");

const addBug = {
  type: Types.bug,
  args: {
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    project_id: { type: GraphQLInt },
    asignee_id: { type: GraphQLInt },
  },
  resolve: async (_, args) => {
    const connection = await pool.getConnection();
    const [result] = await connection.query(
      "INSERT INTO bug (name, description, project_id, asignee_id) VALUES (?, ?, ?, ?)",
      [args.name, args.description, args.project_id, args.asignee_id]
    );
    connection.release();
    return {
      id: result.insertId,
      name: args.name,
      description: args.description,
      project_id: args.project_id,
      asignee_id: args.asignee_id,
      status: "New",
    };
  },
};

const updateBug = {
  type: Types.bug,
  args: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    status_id: { type: GraphQLInt },
    description: { type: GraphQLString },
    project_id: { type: GraphQLInt },
    asignee_id: { type: GraphQLInt },
  },
  resolve: async (_, args) => {
    const connection = await pool.getConnection();
    await connection.query(
      "UPDATE bug SET  name = ?, status_id = ?, description = ?, project_id = ?, asignee_id =? WHERE id = ?",
      [
        args.name,
        args.status_id,
        args.description,
        args.project_id,
        args.asignee_id,
        args.id,
      ]
    );
    connection.release();
    return {
      id: args.id,
      name: args.name,
      status_id: args.status_id,
      description: args.description,
      project_id: args.project_id,
      asignee_id: args.asignee_id,
    };
  },
};

module.exports = { addBug, updateBug };
