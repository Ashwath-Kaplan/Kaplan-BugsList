const BugType = require("./BugType");
const EmployeeType = require("./EmployeeType");
const ProjectType = require("./ProjectType");
const StatusType = require("./StatusType");

const Types = {
  bug: BugType,
  employee: EmployeeType,
  project: ProjectType,
  status: StatusType,
};

module.exports = Types;
