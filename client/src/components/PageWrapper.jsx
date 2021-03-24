import React from 'react';
import { Box } from 'grommet';
import NavigationBar from "./NavigationBar"

const PageWrapper = ({children}) => {
    return (
        <>
            <NavigationBar/>
            <Box fill background='brand'>
                {children}
            </Box>
        </>
    )
}

export default PageWrapper;