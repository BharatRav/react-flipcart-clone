import { Typography,styled } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { navData } from '../../constants/data'


const Wrapper =styled(Box)`
    display:flex;
    margin:55px 130px 0 130px;
    justify-content:space-between;
    color:black;
`;

const Container = styled(Box)`
    padding: 12px 8px;
    text-align:center;
`;
const Text =styled(Typography)`
    font-size:14px;
    font-weight:600;
    font-family:inherit;
`;
const NavBar = () => {
  return (
    <Wrapper>
        {
            navData.map(data=> (
                <Container >
                    <img src={data.url} alt="nav_data_image"  style={{width:64}}/>
                    <Text>{data.text}</Text>
                </Container>
            ))
        }
    </Wrapper>
  )
}

export default NavBar