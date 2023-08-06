import { Box, MenuItem, Select, InputLabel } from "@mui/material"
import { useState } from "react"

const SeasonsDropdown = (prop) => {
  //contains all the seasons of specific a podcast(show)
    const { seasons, onSelectSeason } = prop
    const [selectSeason, setSelectSeason] = useState('')
  
    if (!Array.isArray(seasons)) {
        return null; // Return early if seasons is not an array
    }
    
    const handleChange = (event) => {  
      const selectedSeason = seasons.find((item) => item.season === event.target.value)
      setSelectSeason(event.target.value)
      onSelectSeason(selectedSeason)
    }
   
   return ( 
            <Box sx={{ mx: 4}}>
                <InputLabel id="select-label">Seasons</InputLabel>
                <Select
                        labelId="select-label"
                        id="select"
                        value={selectSeason}
                        label="Seasons"
                        onChange={handleChange}
                        sx={{ width: { md: "28vh", xs: "auto"}, height: "8vh", mb: 1 }}
                >
                 
                  {seasons.map((season) => {
                      return (
                          <MenuItem key={season.season} value={season.season}>
                          Season {season.season}</MenuItem> 
                      )
                    })
                  }

                </Select>
            </Box>
   )
}

export default SeasonsDropdown
