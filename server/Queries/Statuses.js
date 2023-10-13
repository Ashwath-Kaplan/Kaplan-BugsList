const { GraphQLList } = require("graphql");
const pool = require("../Database");
const Types = require("../Types");

const StatusQuery = {
  type: GraphQLList(Types.status),
  resolve: async () => {
    const connection = await pool.getConnection();
    const [rows] = await connection.query("SELECT * FROM status");
    connection.release();
    return rows;
  },
};

module.exports = StatusQuery;
