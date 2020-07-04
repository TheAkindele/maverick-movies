import React from 'react'
import ReactPlayer from 'react-player'

const Video = ({ video }) => {
    return (
        <div className='player-wrapper'>
            <ReactPlayer
                className='react-player'
                url={`https://www.youtube.com/watch?v=${video}`}
                width='100%'
                height='100%'
                controls={true}
            />
        </div>
    )
}

export default Video
