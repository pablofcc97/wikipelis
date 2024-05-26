const YoutubeEmbed = ({videoKey}) => {
    return(
        <iframe 
            width="560" height="315" 
            src={`https://www.youtube.com/embed/${videoKey}` }
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" 
        >
        </iframe>
    )
}



export default YoutubeEmbed