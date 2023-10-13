import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { ADD_BUG } from "../GraphQL/Mutations";
import { useMutation } from "@apollo/client";
import DialogForm from "./DialogForm";

const AddBug = ({ refetch }) => {
  const [open, setOpen] = useState(false);
  const [bugName, setBugName] = useState("");
  const [projectId, setProjectId] = useState("");
  const [bugDescription, setBugDescription] = useState("");
  const [asigneeId, setAsigneeId] = useState("");

  const [addBug] = useMutation(ADD_BUG);

  const handleAddBug = async () => {
    
    if (bugName && projectId && asigneeId) {
      setOpen(false);
      await addBug({
        variables: {
          name: bugName,
          description: bugDescription,
          project_id: projectId,
          asignee_id: asigneeId,
        },
      });
      
      refetch();
      setBugName("");
      setAsigneeId("");
      setBugDescription("");
      setProjectId("");
    }
    else{
      alert("Enter all the mandatory feilds.")
    }
  };

  return (
    <Box mt={1} mb={1} justifyContent={"center"}>
      <Button
        onClick={() => setOpen(true)}
        variant="contained"
        color="secondary"
      >
        Add New Bug
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
        title={"New Bug"}
        statusId={1}
        handleClick={handleAddBug}
        disabled
        btnText={"Add"}
      />
    </Box>
  );
};

export default AddBug;
