import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import { GET_EMPLOYEES, GET_PROJECTS, GET_STATUSES } from "../GraphQL/Queries";
import { useQuery } from "@apollo/client";
import Loading from "./Loading";

const DialogForm = ({
  open,
  setOpen,
  bugName,
  setBugName,
  bugDescription,
  setBugDescription,
  projectId,
  setProjectId,
  asigneeId,
  setAsigneeId,
  title,
  statusId,
  setStatusId,
  handleClick,
  disabled,
  btnText,
}) => {
  const {
    loading: employeeLoading,
    error: employeeError,
    data: employeeData,
  } = useQuery(GET_EMPLOYEES);

  const {
    loading: projectLoading,
    error: projectError,
    data: projectData,
  } = useQuery(GET_PROJECTS);

  const {
    loading: statusLoading,
    error: statusError,
    data: statusData,
  } = useQuery(GET_STATUSES);

  if (employeeLoading || projectLoading || statusLoading) return <Loading />;
  if (employeeError || projectError || statusError)
    return (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        Failed to fetch the data.
      </div>
    );

  return (
    <Dialog
      sx={{ mx: "auto" }}
      fullWidth
      open={open}
      onClose={() => setOpen(false)}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent dividers>
        <Box>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Project</InputLabel>
            <Select
              required
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={projectId}
              label="Project Name"
              onChange={(e) => setProjectId(e.target.value)}
            >
              {projectData.projects.map((project) => {
                return (
                  <MenuItem key={project.id} value={project.id}>
                    {project.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Box>
        <Box mt={2}>
          <TextField
            required
            id="outlined-basic"
            label="Summary"
            value={bugName}
            onChange={(e) => setBugName(e.target.value)}
            variant="outlined"
            fullWidth
            autoComplete="off"
          />
        </Box>
        {!disabled && (
          <Box mt={2}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Status</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={statusId}
                label="Status"
                onChange={(e) => setStatusId(e.target.value)}
              >
                {statusData.statuses.map((status) => {
                  return (
                    <MenuItem key={status.id} value={status.id}>
                      {status.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Box>
        )}
        <Box mt={2}>
          <TextField
            id="outlined-basic"
            label="Description"
            value={bugDescription}
            onChange={(e) => setBugDescription(e.target.value)}
            variant="outlined"
            fullWidth
            autoComplete="off"
            multiline
            rows={4}
          />
        </Box>
        <Box mt={2}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Asignee</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={asigneeId}
              label="Asignee"
              onChange={(e) => setAsigneeId(e.target.value)}
            >
              {employeeData.employees.map((employee) => {
                return (
                  <MenuItem key={employee.id} value={employee.id}>
                    {employee.first_name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpen(false)}>Cancel</Button>
        <Button onClick={handleClick}>{btnText}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogForm;
