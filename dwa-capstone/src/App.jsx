// import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom" 
import Home from "./components/Home"
import PodcastDetail from "./components/PodcastDetail"
import PodcastEpisodeCard from "./components/PodcastEpisodeCard"
import Favourites from "./pages/Favourites"

function App() {
 
	return( 
    <BrowserRouter>  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/id/:id" element={<PodcastDetail /> } />
        <Route path="/espisode/:episodeId" element={<PodcastEpisodeCard /> } />
      </Routes>
  </BrowserRouter>
    
  )
}

export default App
