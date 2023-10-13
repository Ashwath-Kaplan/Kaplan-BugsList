import { Box } from "@mui/material";
import React, { useState } from "react";
import { UPDATE_BUG } from "../GraphQL/Mutations";
import { useMutation } from "@apollo/client";
import { Button } from "@mui/joy";
import DialogForm from "./DialogForm";

const EditBug = ({
  bug: { id, name, description, status_id, project_id, asignee_id },
  refetch,
}) => {
  const [open, setOpen] = useState(false);
  const [bugId] = useState(id);
  const [bugName, setBugName] = useState(name);
  const [projectId, setProjectId] = useState(project_id);
  const [bugDescription, setBugDescription] = useState(description);
  const [asigneeId, setAsigneeId] = useState(asignee_id);
  const [statusId, setStatusId] = useState(status_id);

  const [updateBug] = useMutation(UPDATE_BUG);

  const handleEditBug = async () => {
    if(bugName && statusId && projectId){
    setOpen(false);
    await updateBug({
      variables: {
        id: bugId,
        name: bugName,
        status_id: statusId,
        description: bugDescription,
        project_id: projectId,
        asignee_id: asigneeId,
      },
    });
    refetch();
  }
  else{
    alert("Mandatory fields cannot be empty.")
  }
  };

  return (
    <Box mt={1} mb={1}>
      <Button color="success" variant="soft" onClick={() => setOpen(true)}>
        Edit
      </Button>
      <DialogForm
        open={open}
        setOpen={setOpen}
        bugName={bugName}
        setBugName={setBugName}
        bugDescription={bugDescription}
        setBugDescription={setBugDescription}
        projectId={projectId}
        setProjectId={setProjectId}
        asigneeId={asigneeId}
        setAsigneeId={setAsigneeId}
        title={`Bug-${bugId}`}
        statusId={statusId}
        setStatusId={setStatusId}
        handleClick={handleEditBug}
        disabled={false}
        btnText={"Save"}
      />
    </Box>
  );
};

export default EditBug;
