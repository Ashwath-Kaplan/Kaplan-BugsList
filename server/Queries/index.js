const BugQuery = require("./Bugs");
const EmployeeQuery = require("./Employees");
const ProjectQuery = require("./Projects");
const StatusQuery = require("./Statuses");

const QueryFields = {
  bug: BugQuery,
  employee: EmployeeQuery,
  project: ProjectQuery,
  status: StatusQuery,
};

module.exports = QueryFields;
