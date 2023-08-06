import { Box, Stack, Card, CardContent, Typography, CardMedia} from "@mui/material"

const PodcastEpisodeCard = (prop) => {
    const { episodesData, episodeNumber, episodeTitle, episodeDescription, episodeFile } = prop

    console.log(episodesData)
    return (
        <Card sx={{ display: 'flex', m: 0.3, width: {xs: "82vw", md: "auto"}, height: {xs: "50vh", md: "35vh" } }}>
        <Stack sx={{ display: 'flex', flexDirection: {xs: 'column', md: "column"}, width: {xs: "60vw"}}}>
            <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="subtitle1">
                {episodeNumber}. {episodeTitle}
            </Typography><br />
            <Typography variant="caption text" color="text.secondary" component="div">
                {episodeDescription}
            </Typography>
            </CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            <audio src={`${episodeFile}`} controls/>
            </Box>
        </Stack>
        <CardMedia
            component="img"
            sx={{ width: "auto", ml: "auto" }}
            image={episodesData.image}
            alt="season image"
        />
        </Card>
    )
}

export default PodcastEpisodeCard