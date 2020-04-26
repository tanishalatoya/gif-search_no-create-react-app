import React from 'react';
import Gif from './Gif';

const GifList = props => { 

  const allGifs = props.gifs.map(gif => {
    return <Gif 
      url={gif.images.fixed_height.url}
      />

  })
  
  return(
    <ul className="gif-list">
      { allGifs }
    </ul> 
  );
}

export default GifList;
