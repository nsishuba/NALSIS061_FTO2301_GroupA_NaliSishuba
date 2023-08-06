import { useState, useEffect } from "react"
import {Stack, Box, Select, MenuItem, InputLabel, Typography} from "@mui/material"
import PodcastList from "./PodcastList"
import Sidebar from "./Sidebar";
import genreData from "../genres.js";
import Navbar from "./Navbar"

const Home = () => {
    const [podcastData, setPodcastData] = useState([])
    const [searchValue, setSearchValue] = useState("")
    const [filteredPodcasts, setFilteredPodcasts] = useState([])
    const [sortedPodcasts, setSortedPodcasts] = useState([])
    const [sortType, setSortType] = useState("")
    const [selectedGenre, setSelectedGenre] = useState("")

    useEffect(() => {
        fetch("https://podcast-api.netlify.app/shows")
        .then(res => res.json())
        .then(data => {
            setPodcastData(data)
        })
    }, [])

    //Searches for podcast
    useEffect(() =>{
        const filter = [...podcastData].filter(podcast => {
            const lowerTitle = podcast.title.trim().toLowerCase()
            const lowerSearch = searchValue.trim().toLowerCase()

            return lowerTitle.includes(lowerSearch)
        })
        setFilteredPodcasts(filter)
    
    }, [searchValue, podcastData])

    //Sorts podcast list
    useEffect(() =>{
        let sortPodcasts;
        switch (sortType) {
            case "A-Z":
                sortPodcasts = filteredPodcasts.sort((a, b) =>
                a.title > b.title ? -1 : 1)
                break;
            case "Z-A":
                sortPodcasts = filteredPodcasts.sort((a, b) =>
                a.title > b.title ? 1 : -1)
                break;
            case "Latest date":
                sortPodcasts = filteredPodcasts.sort((a, b) =>
                new Date(a.updated) - new Date(b.updated))
                break;
            case "Oldest date":
                sortPodcasts = filteredPodcasts.sort((a, b) =>
                new Date(b.updated) - new Date(a.updated))
                break;
            default: sortPodcasts = filteredPodcasts
        }
        if (sortType) {
            setSortedPodcasts(sortPodcasts) 
        }

    }, [ sortType,filteredPodcasts])

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
                <InputLabel id="select-label">Sort by: </InputLabel>
                <Select
                        labelId="select-label"
                        id="select"
                        value={sortType}
                        label="Sort by"
                        onChange={handleSort}
                        sx={{ width: { sm: "10vw", xs: "auto"}, height: "6vh", mb: 1, ml: 1 }}
                >
                    <MenuItem value={"A-Z"}>A-Z</MenuItem>
                    <MenuItem value={"Z-A"}>Z-A</MenuItem>
                    <MenuItem value={"Latest date"}>Latest date</MenuItem>
                    <MenuItem value={"Oldest date"}>Oldest date</MenuItem>
                </Select>
                </div>
                </div>
                {filteredPodcasts.length > 0 ? (
                <PodcastList podcastData={filteredPodcasts} />
                
            ) : (
                <PodcastList podcastData={sortedPodcasts ? sortedPodcasts : podcastData}
                                     filteredPodcasts={filteredPodcasts}
                                     selectedGenre={selectedGenre} />
            )}
            
            </Box>
            
        </Stack>
    </>
    )
}

export default Home