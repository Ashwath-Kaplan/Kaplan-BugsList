const { GraphQLList } = require("graphql");
const pool = require("../Database");
const Types = require("../Types");

const EmployeeQuery = {
  type: GraphQLList(Types.employee),
  resolve: async () => {
    const connection = await pool.getConnection();
    const [rows] = await connection.query("SELECT * FROM employee");
    connection.release();
    return rows;
  },
};

module.exports = EmployeeQuery;
