import PageWrapper from "../components/PageWrapper";
import React from 'react';
import { Box, Heading } from "grommet";
import CreateListingForm from "../components/CreateListingForm";

const CreateListingPage = () => {
   

    return ( 
        <PageWrapper>
            <Box alignContent='center' width="large" margin="large">
            <Heading>tell us about what you're selling</Heading>
                <CreateListingForm/>
            </Box>
        </PageWrapper>
        )


}

export default CreateListingPage