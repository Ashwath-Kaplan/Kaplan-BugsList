import { useQuery } from "@apollo/client";
import { Grid, Box, Typography, Container } from "@mui/material";
import { GET_BUGS, GET_STATUSES } from "../GraphQL/Queries";
import Loading from "./Loading";
import BugItem from "./BugItem";
import { useState } from "react";
import NavBar from "./NavBar";

const Body = () => {
  const [projectId, setProjectId] = useState("");

  const {
    loading: statusLoading,
    error: statusError,
    data: statusData,
  } = useQuery(GET_STATUSES);

  const {
    loading: bugLoading,
    error: bugError,
    data: bugData,
    refetch,
  } = useQuery(GET_BUGS);

  if (statusLoading || bugLoading) return <Loading />;
  if (statusError || bugError)
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
    <>
      <NavBar
        refetch={refetch}
        projectId={projectId}
        setProjectId={setProjectId}
      />
      <Box sx={{ flexGrow: 1 }} mt={1}>
        <Container>
          <Grid
            container
            spacing={{ xs: 2, sm: 1, md: 1 }}
            columns={{ xs: 4, sm: 12, md: 28 }}
          >
            {statusData.statuses.map((status) => (
              <Grid key={status.id} item xs={2} sm={4} md={4}>
                <Typography variant="h6" align="center">
                  {status.name}
                </Typography>
                {bugData.bugs
                  .filter(
                    (bug) =>
                      (projectId === "" && bug.status_id === status.id) ||
                      (bug.status_id === status.id &&
                        bug.project_id === projectId)
                  )
                  .map((bug) => (
                    <BugItem key={bug.id} bug={bug} refetch={refetch} />
                  ))}
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Body;
