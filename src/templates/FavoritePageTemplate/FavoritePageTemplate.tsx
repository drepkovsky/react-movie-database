import { Container, Typography } from "@material-ui/core";
import React from "react";
import NavbarLayout from "../../components/NavbarLayout/NavbarLayout";

interface FavoritePageTemplateProps {}

const FavoritePageTemplate: React.FunctionComponent<FavoritePageTemplateProps> =
  () => {
    return (
      <NavbarLayout>
        <Container maxWidth="lg">
          <Typography variant="h3" color="textPrimary">
            Favorite
          </Typography>
        </Container>
      </NavbarLayout>
    );
  };

export default FavoritePageTemplate;
