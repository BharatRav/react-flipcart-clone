import { InputBase,Box,styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';



const SearchContainer =styled(Box)`
    background:#fff;
    width:38%;
    margin-left: 1rem;
    border-radius:2px;
    display:flex;
`;

const SearchInputBase =styled(InputBase)`
    padding-left:20px;
    width:100%;
    font-size:unset;
`;
const SearchIconWrapper =styled(Box)`
    color:#2874f0;
    padding:5px;
    display:flex;
`;
const Search = () => {
    return (
        <SearchContainer>
            <SearchInputBase 
                placeholder='Search for products, brands and more' 
            />

            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
        </SearchContainer>
    );
}
export default Search;