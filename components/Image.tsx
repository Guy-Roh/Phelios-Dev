import React from 'react';

type imageProps = {
    src: string,
    alt: string
}


const Image = ({ src, alt}:imageProps) => {
    return(
    <div className="image-container">
        <img src={src} alt={alt}/>
    </div>
    )
}

export default Image;