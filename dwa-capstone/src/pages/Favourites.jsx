import { useState, useEffect } from "react"
import Navbar from "../components/Navbar"
import { useNavigate } from "react-router-dom"
import { Button } from "@mui/material"

const Favourites = () => {
    const [favourites, setFavourites] = useState([])

    useEffect(() => {
        const storedFavourites = localStorage.getItem("favourites")
        if(storedFavourites) {
            setFavourites(JSON.parse(storedFavourites))
        }
    }, [])

    const navigate = useNavigate()

    const navigateToHome = () => {
        navigate("/")
    }


    return (
        <>
        <Navbar />
        {/* <div><PodcastList podcastData={} selectedGenre={} filteredPodcasts={}/></div> */}
        <span>My Favourites</span>
        {favourites.length === 0 ? (
        <p>No favourites added yet.</p>
      ) : (
        <ul>
          {favourites.map((favourite) => (
            <li key={favourite.podcast.title}>
              <h2>{favourite.podcast.description}</h2>
              <p>{favourite.podcast.image}</p>
            </li>
          ))}
        </ul>
      )}
        <Button variant="outlined" color="secondary" 
                    sx={{ width: 100, mt: 4, ml: { xs: 2, sm: 4}}}
                    onClick={navigateToHome}>Back</Button>
        
        </>
    )

}
export default Favourites