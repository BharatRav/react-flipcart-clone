import React from "react";
import {AppBar,Toolbar,Box,styled, Typography} from '@mui/material';
import Search from "./Search";
import CustomButtons from "./CustomButtons";

//Box is div, AppBar is header,Typography is h,p tags

const HeaderStyled = styled(AppBar)`
    background:#2874f0;
    height: 55px;
`;

const Component =styled(Box)`
    margin-left:12%;
    line-height:0rem;
`;
const SubHeading =styled(Typography)`
    font-size:10px;
    font-style:italic;
`;
const PlusImage =styled("img")({
    width:10,
    height:10,
    marginLeft:3,
    marginTop:1
});
const CustomButtonsWrapper=styled(Box)`
    margin: 0 5% 0 auto;
`;
const Header=( )=> {
    const logoURL = "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png";
    const subURL =  "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png";
    return(
        <HeaderStyled>
            <Toolbar style={{minHeight:55}}>
                <Component>
                    <img src={logoURL} alt="flipcart_logo" style={{width:75}} />
                    <Box style={{display:"flex"}}>
                        <SubHeading>Explore&nbsp;
                            <Box component="span" style={{color:"#FFE500"}}>Plus</Box>
                        </SubHeading>
                        <PlusImage src={subURL} alt="flipcart_sub_logo" />
                    </Box>
                    
                </Component>
                <Search />
                <CustomButtonsWrapper >
                    <CustomButtons />
                </CustomButtonsWrapper>
            </Toolbar>
        </HeaderStyled>
    );
}

export default Header;