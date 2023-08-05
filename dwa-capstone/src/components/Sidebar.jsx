import { Stack, Button } from "@mui/material"

const Sidebar = (prop) => {
    const { genreData, onSelect } = prop

    return(
        <Stack direction="row" sx={{ overflowY: "auto",
                                    height: { sx: "auto", md: "85vh" },
                                    flexDirection: { md: "column" } }}>
            <Button color="secondary" sx={{ height: { xs: "auto", md: "100%"},
                                                mx: { xs: 1 },
                                                px: 7,
                                                borderRadius: "10px",
                                               }}
            onClick={() => onSelect("")}>All</Button>
            <Button color="secondary" sx={{ height: { xs: "auto", md: "100%"},
                                                mx: { xs: 1 },
                                                px: 7,
                                                borderRadius: "10px",
                                               }}
            onClick={() => onSelect("")}>Favourites</Button>
            {genreData.map((genre) => {
                return(
                    <Button key={genre.id} color="secondary" sx={{ height: { xs: "auto", md: "100%"},
                    mx: { xs: 1 },
                    px: 7,
                    borderRadius: "10px",
                   }}
                            onClick={() => onSelect(genre)}>{genre.title.slice(0, 28)}
                    </Button>
                )
            })}
        </Stack>
    )
}

export default Sidebar