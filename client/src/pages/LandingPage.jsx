import React from "react";
import { Box, Button, Heading, Paragraph } from "grommet";
import { useHistory } from "react-router-dom";
import KofiButton from "../components/KofiButton";
import PageWrapper from "../components/PageWrapper";
import ROUTES from "../constants/routes";
import AddressInput from "../components/AddressInput";

const LandingPage = () => {
  let history = useHistory();
  return (
    <PageWrapper>
      <Box align="center" pad="large">
        <Heading color="accent2" size="xlarge">
          el dorado
        </Heading>
        <Paragraph
          color="accent1"
          margin={{ top: "none" }}
          textAlign="center"
          size="xxlarge"
        >
          your map to the next great treasure.
        </Paragraph>
        <AddressInput />
        <Button
          color="accent1"
          label="let's go!"
          onClick={() => {
            history.push(ROUTES.LISTINGS);
          }}
        />
      </Box>
      <Box pad="large" direction="row" justify="center">
        <Paragraph color="accent2" size="large">
          selling something?
          <Button
            color="accent2"
            label="create a listing"
            onClick={() => {
              // history.push(ROUTES.ACCOUNT);
              history.push(ROUTES.MANAGE)
            }}
          />
          <KofiButton />
        </Paragraph>
      </Box>
    </PageWrapper>
  );
};

export default LandingPage;
