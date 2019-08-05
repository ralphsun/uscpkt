import React from 'react';

const YouTube = ({ youtubeId }) => {
    console.log(youtubeId);
    return (
        <div
            className="video"
            style={{
                position: "relative",
                paddingBottom: "56.25%" /* 16:9 */,
                paddingTop: 25,
                height: 0
            }}
        >
            <iframe
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                }}
                title={"USC PKT Intro"}
                src={`https://www.youtube.com/embed/${youtubeId}`}
                frameBorder="0"
                allowfullscreen
            ></iframe>
        </div>
    );
}

export default YouTube;