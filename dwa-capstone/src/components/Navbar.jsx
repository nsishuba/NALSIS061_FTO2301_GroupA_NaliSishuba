import { Stack, Typography} from "@mui/material"
import SearchFeed from "./SearchFeed"
import Logo from "../images/yoga.png"

const Navbar = (prop) => {
    return (
        <div>
            <Stack 
            direction="row" 
            alignItems="center" 
            p={2} 
            sx={{ height: "11vh",
                position: "sticky", 
                background: "#4a148c", 
                justifyContent: "space-between"}}>
            <img src={Logo} height={30}  />
            <Typography 
                variant="h6" 
                component="h6" 
                color="white" 
                sx={{ flexGrow: 1, ml: 2 }}>
                Euphoria
            </Typography>
            {prop.disableSearch ? <></> : <SearchFeed searchValue={prop.searchValue}
                         setSearchValue={prop.setSearchValue}/>}
        </Stack>
             
        </div>
    )
}

export default Navbar