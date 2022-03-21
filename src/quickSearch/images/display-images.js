import React from "react";


const DisplayImages = (props) => {
    const { data } = props;
    if (data !== ""){
        const renderImages = data.map((image) => (
            <img src={image.url} 
                    key={image.score} 
                    alt="images"
                    style={{height: '20rem', padding: '5px'}} />
            ));
            return (
                <div style={{marginTop: '2rem'}}>{renderImages}</div>
            )
    }   
}

export default DisplayImages;