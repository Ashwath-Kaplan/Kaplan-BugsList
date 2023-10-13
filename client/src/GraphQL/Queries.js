import { gql } from "@apollo/client";

const GET_BUGS = gql`
  query {
    bugs {
      id
      name
      status_id
      description
      project_id
      asignee_id
    }
  }
`;

const GET_EMPLOYEES = gql`
  query {
    employees {
      id
      first_name
      last_name
    }
  }
`;

const GET_PROJECTS = gql`
  query {
    projects {
      id
      name
    }
  }
`;

const GET_STATUSES = gql`
  query {
    statuses {
      id
      name
    }
  }
`;

export { GET_BUGS, GET_EMPLOYEES, GET_PROJECTS, GET_STATUSES };
