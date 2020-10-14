import React from 'react';
import { Box, Button, Heading, Paragraph } from 'grommet';
import { useHistory } from "react-router-dom";
import PageWrapper from '../components/PageWrapper';
import ROUTES from '../constants/routes';

const LandingPage = () => {
    let history = useHistory();
    return (
        <PageWrapper>
            <Box align="center" pad="large">
                <Heading color='accent2' size='xlarge'>el dorado</Heading>
                <Paragraph color='accent1' margin={{ top: "none" }} textAlign="center" size="xxlarge">
                    your map to the next great treasure.
                </Paragraph>
                <Button color='accent1' label="let's go!" onClick={()=>{history.push(ROUTES.LISTINGS)}}/>
            </Box>
            <Box pad="large" direction="row" justify="center">
                <Paragraph color='accent2' size="large">
                    selling something?
                    <Button color='accent2' label="sign up" onClick={()=>{history.push(ROUTES.ACCOUNT)}}/>
                </Paragraph>
            </Box>
        </PageWrapper>
    )
}

export default LandingPage;
