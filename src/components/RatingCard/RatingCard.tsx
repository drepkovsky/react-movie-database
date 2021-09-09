import {
  Card,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import React from "react";
import { Rating as RatingType } from "../../redux/movie/types";

interface RatingProps {
  rating: RatingType;
}

const RatingCard = ({ rating }: RatingProps) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
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

export const RatingCardSkeleton = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
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

const useStyles = makeStyles((theme) => ({
  card: {
    height: "100%",
  },
}));

export default RatingCard;
