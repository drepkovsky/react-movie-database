import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import React from "react";
import { Rating as RatingType } from "../../redux/movie/types";
import { Skeleton } from "@material-ui/lab";

interface RatingProps {
  rating: RatingType;
}

const Rating = ({ rating }: RatingProps) => {
  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="subtitle1" color="textPrimary">
              {rating.Source}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" color="secondary" align="right">
              {rating.Value}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export const RatingSkeleton = () => {
  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Skeleton variant="text" />
          </Grid>
          <Grid item xs={12}>
            <Skeleton variant="text" />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Rating;
