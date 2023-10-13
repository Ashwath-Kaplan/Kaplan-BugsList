import { gql } from "@apollo/client";

const ADD_BUG = gql`
  mutation AddBug(
    $name: String!
    $description: String!
    $project_id: Int!
    $asignee_id: Int!
  ) {
    addBug(
      name: $name
      description: $description
      project_id: $project_id
      asignee_id: $asignee_id
    ) {
      id
      name
      status_id
      description
      project_id
      asignee_id
    }
  }
`;

const UPDATE_BUG = gql`
  mutation UpdateBug(
    $id: Int!
    $name: String!
    $status_id: Int!
    $description: String!
    $project_id: Int!
    $asignee_id: Int!
  ) {
    updateBug(
      id: $id
      name: $name
      status_id: $status_id
      description: $description
      project_id: $project_id
      asignee_id: $asignee_id
    ) {
      id
      name
      status_id
      description
      project_id
      asignee_id
    }
  }
`;

export { ADD_BUG, UPDATE_BUG };
