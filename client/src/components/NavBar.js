import React from "react";
import {
  AppBar,
  Avatar,
  Box,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@mui/material";
import AddBug from "./AddBug";
import Loading from "./Loading";
import { GET_PROJECTS } from "../GraphQL/Queries";
import { useQuery } from "@apollo/client";
import "./NavBarStyles.css";

const NavBar = ({ refetch, projectId, setProjectId }) => {
  const {
    loading: projectLoading,
    error: projectError,
    data: projectData,
  } = useQuery(GET_PROJECTS);

  if (projectLoading) return <Loading />;
  if (projectError) return <p>Error: Project Data not fetched.</p>;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <Avatar
              alt="Kaplan"
              src={process.env.PUBLIC_URL + "/favicon.ico"}
            />
          </IconButton>
          <Typography
            style={{ color: "white" }}
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Bugs List
          </Typography>
          <Box sx={{ flexGrow: 1, borderRadius: 2 }} mr={2}>
            <FormControl
              fullWidth
              sx={{ width: 300, m: 1, borderRadius: 2 }}
              className="formControl"
            >
              <InputLabel
                id="demo-simple-select-label"
                style={{ color: "black" }}
              >
                Project
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={projectId}
                label="Project Name"
                onChange={(e) => {
                  const selectedProjectId = e.target.value;
                  if (selectedProjectId === "all-projects") {
                    setProjectId("");
                  } else {
                    setProjectId(selectedProjectId);
                  }
                  refetch();
                }}
              >
                <MenuItem value="all-projects">All Projects</MenuItem>
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
          <Box display="flex" justifyContent="center">
            <AddBug refetch={refetch} />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
