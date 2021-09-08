import { Typography } from "@material-ui/core";
import React from "react";
import NavbarLayout from "../../components/NavbarLayout/NavbarLayout";

interface DetailsPageTemplateProps {}

const DetailsPageTemplate: React.FunctionComponent<DetailsPageTemplateProps> =
  () => {
    return (
      <NavbarLayout>
        <Typography variant="h3" color="textPrimary">
          Details
        </Typography>
      </NavbarLayout>
    );
  };

export default DetailsPageTemplate;
