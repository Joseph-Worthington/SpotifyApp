import React from 'react';
import Track from './Track';


const TrackList = ({tracks, handleClick}) => {
    
      return (
        <>
          {tracks.map(element => (
            <section key={element.id}>
              <div className="track-wrapper">
                <Track name={element.name} artist={element.artists[0].name} />
                <button onClick={() => handleClick(element.name, element.artists[0].name)}>Add</button>
              </div>
            </section>
          ))}
        </>
      );
    };

  
export default TrackList;