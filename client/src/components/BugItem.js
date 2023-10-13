import { Card, CardContent, CardActions, Typography } from "@mui/joy";
import React from "react";
import { Box } from "@mui/material";
import EditBug from "./EditBug";

const BugItem = ({ bug, refetch }) => {
  return (
    <Box sx={{ boxShadow: 2, borderRadius: 2, flexGrow: 1 }} m={2}>
      <Card color="neutral" variant="outlined">
        <CardContent sx={{ marginBottom: -1 }}>
          <Typography textAlign={"left"} level="title-lg">
            BUG-{bug.id}
          </Typography>
          <Typography textAlign={"left"} level="title-lg">
            {bug.name}
          </Typography>
        </CardContent>
        <CardActions buttonFlex="1 1 120px" sx={{ marginTop: -1 }}>
          <EditBug bug={bug} refetch={refetch} />
        </CardActions>
      </Card>
    </Box>
  );
};

export default BugItem;
