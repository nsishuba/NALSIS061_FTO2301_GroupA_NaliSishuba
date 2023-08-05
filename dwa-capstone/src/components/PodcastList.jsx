
const PodcastList = (prop) => {
    const list = prop.podcasts.map((podcast, index) => (
        <div key={index}>
            <img  src={podcast.image} alt="podcast image" height={60}/>
            <p>{podcast.title}</p>
        </div>
        
    ))

    return (
        <>
            {list}
        </>

    )
}

export default PodcastList