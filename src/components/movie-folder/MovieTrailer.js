import React from 'react'

const MovieTrailer = ({ movieVideo }) => {
    //console.log('trailer key = ', movieVideo)
    return (
        <div
            className="video"
            style={{
                position: "relative",
                paddingBottom: "56.25%" /* 16:9 */,
                paddingTop: 25,
                height: 0,
                width: '100%'
            }}
        >
            <iframe
                title={movieVideo.name}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                }}
                src={`https://www.youtube.com/embed/${movieVideo.key}`}
                frameBorder="0"
            />
        </div>
    )
}

export default MovieTrailer

// { movieVideo }
// src={`https://www.youtube.com/watch?v=${movieVideo.key}`}
//src={`https://www.youtube.com/embed/${trialKey}`}
