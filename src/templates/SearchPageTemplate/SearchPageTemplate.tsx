import { Container, Typography } from "@material-ui/core";
import React from "react";
import NavbarLayout from "../../components/NavbarLayout/NavbarLayout";

export interface SearchPageTemplateProps {
  brandTitle: string;
}

const SearchPageTemplate = ({ brandTitle }: SearchPageTemplateProps) => {
  return (
    <NavbarLayout>
      <Container maxWidth="lg">
        <Typography variant="h1" color="primary" align="center">
          {brandTitle}
        </Typography>
      </Container>
    </NavbarLayout>
  );
};

export default SearchPageTemplate;
