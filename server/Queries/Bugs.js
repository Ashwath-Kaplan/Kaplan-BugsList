const { GraphQLList } = require("graphql");
const pool = require("../Database");
const Types = require("../Types");

const BugQuery = {
  type: GraphQLList(Types.bug),
  resolve: async () => {
    const connection = await pool.getConnection();
    const [rows] = await connection.query("SELECT * FROM bug");
    connection.release();
    return rows;
  },
};

module.exports = BugQuery;
