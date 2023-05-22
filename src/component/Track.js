import React from 'react';

const Track = ({name, artist}) => {
    return (
        //get the data from data.json
        <div className='track-data'>
            <h1>Track</h1>
            <p>{name}</p>
            <p>{artist}</p>
        </div>
        
    );
}

export default Track;