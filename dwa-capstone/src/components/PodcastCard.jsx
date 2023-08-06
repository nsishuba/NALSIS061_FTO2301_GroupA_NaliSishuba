import {Typography, Card, CardContent, CardMedia } from '@mui/material'
import { Link } from "react-router-dom"
import genreData from "../genres.js"
import monthsData from "../months.js"


const PodcastCard = (prop) => {
    const { podcastID, image, title, noOfSeasons, lastUpdated, genres } = prop

    const date = new Date(lastUpdated)
    const year = date.getFullYear()
    const month = monthsData[date.getMonth()]
    const day = date.getDate()

    const dateFormate = `${day} ${month} ${year}`

    const genreTitles = genres.map((id) => {
        const genre = genreData.find((genre) => genre.id === id)
        return genre ? genre.title: "Unknown Genre"
    })
 
    return (
           <Card sx={{ maxWidth: {sm: 200, xs: "auto"}, height: {lg: "45vh", md: "70vh", sm: "70vh", xs: "70vh"}, borderRadius: 1, display: "flex", flexDirection: "column", alignItems: "center"}}>
            <Link to={`/id/${podcastID}`}>
                <CardMedia
                    sx={{ width: 140, height: 140 }}
                    image={image}
                    component="img"
                    alt={title}
                />
            </Link>
             <CardContent sx={{ marginLeft: "5px", 
                                backgroundColor: "none", 
                                height: "110px", 
                                width: "210px",
                               
                                overflow: "hidden"
                            }}>
                
                <Typography variant="subtitle2" fontWeight="bold" color="#7b1fa2">
                     <span>{title}</span>
                </Typography>
                <Typography variant ="caption text" fontWeight="bold" fontSize="15px" color="#616161">
                     <span>Seasons: {noOfSeasons}</span> <br />
                </Typography>
                <Typography variant ="overline text" fontSize="14px" color="#bdbdbd">
                    <span>Updated: {dateFormate ? dateFormate : "Not available"}</span><br />
                    <span>Genres: {genreTitles.join(", ") }</span>
                </Typography>
             
             </CardContent>
          </Card>
    )
}

export default PodcastCard