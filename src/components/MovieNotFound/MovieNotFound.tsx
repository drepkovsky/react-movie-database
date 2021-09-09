import { Box, Button, Grid, Typography } from "@material-ui/core";
import React from "react";

const MovieNotFound = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h1" color="textPrimary" align="center">
          404
        </Typography>
        <Typography variant="h5" color="textSecondary" align="center">
          Movie does not exits.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Box display="flex" justifyContent="center">
          <Button href="/" variant="contained">
            Back Home
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default MovieNotFound;
