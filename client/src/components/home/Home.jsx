import React, { Fragment } from 'react'
import Banner from './Banner';
import NavBar from './NavBar';
import {styled, Box} from '@mui/material';

const Component = styled(Box)`
    background:#F2F2F2;
    padding: 1.1rem  1rem;
`;

const Home = () => {
  return (
    <Fragment>
        <NavBar />
        <Component>
            <Banner />
        </Component>
        
    </Fragment>
  )
}

export default Home;