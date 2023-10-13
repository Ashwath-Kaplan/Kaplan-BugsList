import { Box, CircularProgress } from "@mui/material";

const Loading = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" m={2}>
      <CircularProgress />
    </Box>
  );
};

export default Loading;
