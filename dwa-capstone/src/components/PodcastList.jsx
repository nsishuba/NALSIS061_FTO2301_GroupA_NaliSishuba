import PodcastCard from "./PodcastCard";
import { Stack } from "@mui/material";

  const PodcastList = (prop) => {
    const { podcastData, selectedGenre, filteredPodcasts } = prop
  
    if (!selectedGenre || selectedGenre.length === 0) {
      const allPodcasts = podcastData.map((podcast) => {
        return (
                <PodcastCard key={podcast.id}
                              podcastID={podcast.id}
                              image={podcast.image} 
                              title={podcast.title} 
                              noOfSeasons={podcast.seasons}
                              lastUpdated={podcast.updated}
                              genres={podcast.genres} />
        )       
      })
      return (
          <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
                  {allPodcasts}
          </Stack>
      );
    }

    const podcastList = filteredPodcasts.map((podcast) => {
      return (
              <PodcastCard key={podcast.id}
                        podcastID={podcast.id}
                        image={podcast.image} 
                        title={podcast.title} 
                        noOfSeasons={podcast.seasons}
                        lastUpdated={podcast.updated}
                        genres={podcast.genres}
                  />
          ) 
    })
  
    return (
      <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
              {podcastList}
      </Stack>
    )
    
  }

export default PodcastList;
