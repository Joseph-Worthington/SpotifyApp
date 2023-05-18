import React from 'react';

const Track = ({key, name, artist}) => {
    return (
        //get the data from data.json
        <section id={key}>
            <h1>Track</h1>
            <p>{name}</p>
            <p>{artist}</p>
        </section>
    );
}

export default Track;