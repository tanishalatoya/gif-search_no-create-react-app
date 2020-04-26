import React from 'react';
import Gif from './Gif';
import NoGifs from './NoGifs';

const GifList = props => { 
  let allGifs;

  if (props.gifs.length > 0) {
   allGifs = props.gifs.map(gif => {
      return <Gif 
        url={gif.images.fixed_height.url}
        key={gif.id}
        />
  
    })} else {
      allGifs =  <NoGifs />
    }

  
  
  return(
    <ul className="gif-list">
      { allGifs }
    </ul> 
  );
}

export default GifList;
