import { Stack, Button } from "@mui/material"

const Sidebar = (prop) => {
    const { genreData, onSelect } = prop

    return(
        <Stack>
            <Button onClick={() => onSelect("")}>All</Button>
            {genreData.map((genre) => {
                return(
                    <Button key={genre.id} 
                            onClick={() => onSelect(genre)}>{genre.title.slice(0, 28)}
                    </Button>
                )
            })}
        </Stack>
    )
}

export default Sidebar