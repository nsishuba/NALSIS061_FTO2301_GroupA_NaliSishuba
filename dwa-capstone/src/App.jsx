// import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom" 
import Home from "./components/Home"


function App() {
 
	return( 
    <BrowserRouter>  
    {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/id/:id" element={<PodcastDetail /> } />
        <Route path="/espisode/:episodeId" element={<PodcastEpisode /> } /> */}
      </Routes>
  </BrowserRouter>
    
  )
}

export default App
