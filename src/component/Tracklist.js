import React from 'react';
import Track from './Track';
import data from '../assets/fake-data/data.json';

const TrackList = () => {

    
    let tracks = JSON.stringify(data);
    tracks = JSON.parse(tracks);
    tracks = tracks.tracks.items;

    return (
        tracks.map(element => (
            <Track key={element.id} name={element.name} artist={element.artists[0].name} />
          ))
    );
        
 

}
export default TrackList;