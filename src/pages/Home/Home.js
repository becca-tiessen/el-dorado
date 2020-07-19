import React from 'react';
import { Box, Button, Header, Heading} from 'grommet';


const Home = () => {
    return (
        <>
            <Header background="accent4" pad="medium"></Header>
            <Box fill background='brand'>
                <Box align="center" pad="large">
                    <Heading color='accent2' size='xlarge'>el dorado</Heading>
                    <Button>hit me</Button>
                </Box>
            </Box>
        </>
    )
}

export default Home;
