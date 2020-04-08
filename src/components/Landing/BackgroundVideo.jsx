import React from 'react';

import classes from './BackgroundVideo.module.css';

const BackgroundVideo = () => {
    const videoSource = "https://www.w3schools.com/tags/movie.mp4"

    return (
        <div className={classes.Container} >
            <video autoPlay="autoplay" loop="loop" muted className={classes.Video} >
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className={classes.Content}>
                <div className={classes.SubContent} >
                <div className="banner">
                  <h1>Saint Hair</h1>
                  <hr />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam corrupti accusamus nobis veniam quidem, similique dignissimos nemo voluptates laborum suscipit, temporibus incidunt repudiandae</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default BackgroundVideo



//  Reference :  