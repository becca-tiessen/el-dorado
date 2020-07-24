import React from 'react';
import { Box, Button, Header, Heading, Paragraph} from 'grommet';
import { useHistory } from "react-router-dom";
import NavigationBar from "../pages/NavigationBar"

const Home = () => {
    let history = useHistory();
    return (
        <>
            {/* <Header height="7%" background="accent4" pad="medium"></Header> */}
            <NavigationBar/>
            <Box fill background='brand' >
                <Box align="center" pad="large">
                    <Heading color='accent2' size='xlarge'>el dorado</Heading>
                    <Paragraph color='accent1' margin={{ top: "none" }} textAlign="center" size="xxlarge">
                        your map to the next great treasure.
                    </Paragraph>
                    <Button color='accent1' label="let's go!" onClick={()=>{history.push('/map')}}/>
                    <Button color='accent1' label="your profile" onClick={()=>{history.push('/garageProfile')}}/>
                </Box>
            </Box>
        </>
    )
}

export default Home;
