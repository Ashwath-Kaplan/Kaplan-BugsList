const { GraphQLList } = require("graphql");
const pool = require("../Database");
const Types = require("../Types");

const ProjectQuery = {
  type: GraphQLList(Types.project),
  resolve: async () => {
    const connection = await pool.getConnection();
    const [rows] = await connection.query("SELECT * FROM project");
    connection.release();
    return rows;
  },
};

module.exports = ProjectQuery;
