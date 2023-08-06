import { useState, useEffect } from "react"
import {Stack, Box, Select, MenuItem, InputLabel, Typography, CircularProgress, FormControl} from "@mui/material"
import PodcastList from "./PodcastList"
import Sidebar from "./Sidebar";
import genreData from "../genres.js";
import Navbar from "./Navbar"

const Home = () => {
    const [podcastData, setPodcastData] = useState([])
    const [loading, setLoading] = useState(true)
    const [searchValue, setSearchValue] = useState("")
    const [sortedPodcasts, setSortedPodcasts] = useState([])
    const [sortType, setSortType] = useState("")
    const [selectedGenre, setSelectedGenre] = useState("")
    const [appliedFilters, setAppliedFilters] = useState([])

    useEffect(() => {
        fetch("https://podcast-api.netlify.app/shows")
        .then(res => res.json())
        .then(data => {
            setPodcastData(data)
            setLoading(false)
        })
    }, [])

    //Searche and genre filter for podcast
    useEffect(() =>{
        const searchFilter = [...podcastData].filter(podcast => {
            const lowerTitle = podcast.title.trim().toLowerCase()
            const lowerSearch = searchValue.trim().toLowerCase()

            return lowerTitle.includes(lowerSearch)
        })  
        
        const genreFilter = selectedGenre ?
        podcastData.filter(podcast => podcast.genres.includes(selectedGenre.id))
        : podcastData

        const combinedFilter = searchFilter.filter((podcast) =>
    genreFilter.includes(podcast)
  );
        setAppliedFilters(combinedFilter)
    
    }, [searchValue, selectedGenre, podcastData])

    //Sorts podcast list
    useEffect(() =>{
        let sortPodcasts;
        switch (sortType) {
            case "A-Z":
                sortPodcasts = appliedFilters.sort((a, b) =>
                a.title > b.title ? -1 : 1)
                break;
            case "Z-A":
                sortPodcasts = appliedFilters.sort((a, b) =>
                a.title > b.title ? 1 : -1)
                break;
            case "Latest date":
                sortPodcasts = appliedFilters.sort((a, b) =>
                new Date(a.updated) - new Date(b.updated))
                break;
            case "Oldest date":
                sortPodcasts = appliedFilters.sort((a, b) =>
                new Date(b.updated) - new Date(a.updated))
                break;
            default: sortPodcasts = appliedFilters
        }
        if (sortType) {
            setSortedPodcasts(sortPodcasts) 
        }

    }, [ sortType,appliedFilters])
    
    if(loading) {
        return (
            <Box sx={{ display: "flex", mx: "45%", mt: 25 }}>
                <CircularProgress color="secondary"/>
            </Box>
        )
    } 

    const handleSort = (event) => {
        setSortType(event.target.value)
    }
    const handleGenreSelection = (genre) => {
        setSelectedGenre(genre)
    }

    
    return (
    <>
        <Navbar searchValue={searchValue}
                    setSearchValue={setSearchValue}/>
        <Stack sx={{ flexDirection: { sx: "column", md: "row" }, m: 1 }}>
            
            <Box sx={{ height: { sx: "auto", md: "85vh" }, 
                                width: {md: "25%", xs: "auto"},
                                borderRight: "2px solid #fafafa",
                                px: { sx: 0, md: 2 } }}>
                <Sidebar genreData={genreData}
                         onSelect={handleGenreSelection}/>
            </Box>
            <Box sx={{ overflowY: "auto", 
                                height: "90vh", 
                                flex: 2, 
                                p: 1, }}> 
                <div className="title-sort-container">
                <Typography variant="h5" sx={{ color: "#7b1fa2", 
                                                        fontWeight: "bold", 
                                                        mb: 2, 
                                                        }}>
                                    <span>{selectedGenre ? selectedGenre.title : "Discover"}</span>
                </Typography>
                <div className="sort--select">
                <FormControl fullWidth>
                <InputLabel id="select-label">Sort </InputLabel>
                <Select
                        labelId="select-label"
                        id="select"
                        value={sortType}
                        label="Sort by"
                        onChange={handleSort}
                        sx={{ width: { sm: "10vw", xs: "auto"}, height: "6vh", mb: 1, ml: 1, p: 2 }}
                >
                    <MenuItem value={"A-Z"}>A-Z</MenuItem>
                    <MenuItem value={"Z-A"}>Z-A</MenuItem>
                    <MenuItem value={"Latest date"}>Latest date</MenuItem>
                    <MenuItem value={"Oldest date"}>Oldest date</MenuItem>
                </Select>
                </FormControl>
                </div>
                </div>
                {appliedFilters.length > 0 ? (
                <PodcastList podcastData={appliedFilters} />
                
            ) : (
                <PodcastList podcastData={sortedPodcasts ? sortedPodcasts : podcastData}
                                     filteredPodcasts={appliedFilters}
                                     selectedGenre={selectedGenre} />
            )}
            
            </Box>
            
        </Stack>
    </>
    )
}

export default Home