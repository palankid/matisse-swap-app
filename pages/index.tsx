import * as React from "react";
import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "components/atoms/Button";
import { SwapIcon } from "components/atoms/Icons/Icons";

const Home: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom>
        MUI v5 + Next.js with TypeScript example
      </Typography>
      <Button>
        <span>Hello world</span>
      </Button>
      <SwapIcon color="primary" />
    </Container>
  );
};

export default Home;
